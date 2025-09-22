import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const App = () => {
  const insets = useSafeAreaInsets();
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    DeviceInfo.getUniqueId()
      .then(id => setDeviceId(id))
      .catch(error => {
        Alert.alert("Error", "Failed to get device ID");
      });

    const backAction = () => {
      if (webviewRef.current && canGoBack) {
        webviewRef.current.goBack();
        return true; // handled
      } else {
        // Show confirm dialog instead of closing app directly
        Alert.alert(
          "Exit App",
          "Do you really want to exit?",
          [
            { text: "Cancel", onPress: () => null, style: "cancel" },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]
        );
        return true; // prevent default behavior (app close)
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      clearTimeout(splashTimer);
      backHandler.remove();
    };
  }, [canGoBack]);

  return (
    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom  }}>
      {showSplash ? (
        <WebView source={{ uri: 'file:///android_asset/splash.html' }} />
      ) : deviceId ? (
        <WebView
          ref={webviewRef}
          source={{ uri: `https://azmalansari.com/?device_id=${deviceId}` }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;