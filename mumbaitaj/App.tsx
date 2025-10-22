import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Alert, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sound from 'react-native-sound';

// Enable playback in silence mode (iOS)
Sound.setCategory('Playback');

const App = () => {
  const insets = useSafeAreaInsets();
  const webviewRef = useRef<any>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const slotSoundRef = useRef<Sound | null>(null);

  // 🔊 preload slot sound (only in app, not web)
  useEffect(() => {
    if (Platform.OS !== 'web') {
      slotSoundRef.current = new Sound('slot_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Failed to load slot sound', error);
        }
      });
    }

    return () => {
      slotSoundRef.current?.release();
    };
  }, []);

  // 🔊 play splash sound + hide splash
  useEffect(() => {
    if (Platform.OS !== 'web') {
      const splashSound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (!error) {
          splashSound.play((success) => {
            if (!success) console.log('Splash sound playback failed');
          });
        }
      });

      const splashTimer = setTimeout(() => {
        setShowSplash(false);
        splashSound.release();
      }, 3000);

      return () => {
        clearTimeout(splashTimer);
        splashSound.release();
      };
    } else {
      const splashTimer = setTimeout(() => setShowSplash(false), 3000);
      return () => clearTimeout(splashTimer);
    }
  }, []);

  // 📱 device ID + back handler
  useEffect(() => {
    DeviceInfo.getUniqueId()
      .then(id => setDeviceId(id))
      .catch(() => {
        Alert.alert("Error", "Failed to get device ID");
      });

    const backAction = () => {
      if (webviewRef.current && canGoBack) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, [canGoBack]);

  // 🔊 WebSocket message listener from WebView
  const onWebMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log("WebView Msg:", data);

      if (data.type === 'slot_start') {
        slotSoundRef.current?.stop(() => {
          slotSoundRef.current?.play((success) => {
            if (!success) console.log("Slot sound playback failed");
          });
        });
      }
    } catch (err) {
      console.log("Invalid WebView message", event.nativeEvent.data);
    }
  };

  return (
    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
      {showSplash ? (
        <WebView 
          source={{ uri: 'file:///android_asset/splash.html' }} 
          originWhitelist={['*']} 
        />
      ) : deviceId ? (
        <WebView
          ref={webviewRef}
          // source={{ uri: `http://192.168.1.19/mumbaitazapp/app/user/?device_id=${deviceId}` }}
          source={{ uri: `https://digitalnamo.com/azmal/2025/september/mumbaitaj/app/user/?device_id=${deviceId}` }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          onMessage={onWebMessage}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default App;
