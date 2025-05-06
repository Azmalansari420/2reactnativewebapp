import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const webviewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState<string>('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await DeviceInfo.getUniqueId();
        setDeviceId(id || "unknown-device");
      } catch (error) {
        console.error("Error getting device ID:", error);
        setDeviceId("unknown-device");
      }
    };

    fetchDeviceId();
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (webviewRef.current && canGoBack) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [canGoBack]);

  const handleNavigation = async (event: any): Promise<boolean> => {
    if (!event?.url) return true;
    const url = event.url;
    console.log("Navigating to:", url);

    if (url.startsWith("upi://") || url.startsWith("whatsapp://") || url.includes("api.whatsapp.com")) {
      try {
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
          await Linking.openURL(url);
        } else {
          Alert.alert("Error", "No compatible app found.");
        }
      } catch (err) {
        Alert.alert("Error", "Could not open the app.");
        console.error("Error opening app:", err);
      }
      return false; // Prevent WebView from handling external URLs
    }

    return true; // Allow other URLs to load in WebView
  };

  return (
    <View style={{ flex: 1 }}>
      {deviceId ? (
        <WebView
          ref={webviewRef}
          source={{ uri: `https://dellega.org/app/user/login.php?device_id=${deviceId}` }}
          originWhitelist={['*']}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          onShouldStartLoadWithRequest={handleNavigation}
          onMessage={(event) => {
            const url = event.nativeEvent.data;
            if (url.startsWith("upi://")) {
              Linking.openURL(url).catch((err) => {
                Alert.alert("Error", "Could not open UPI app.");
                console.error("Error opening UPI app:", err);
              });
            }
          }}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />} 
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default App;
