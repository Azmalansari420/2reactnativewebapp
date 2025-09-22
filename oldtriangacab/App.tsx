import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const webviewRef = useRef<any>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState<string>('');

  useEffect(() => {
    DeviceInfo.getUniqueId().then(id => setDeviceId(id));

    const backAction = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [canGoBack]);

  const handleNavigation = (event: any) => {
    const url = event.url;
    if (
      url.startsWith("whatsapp://") ||
      url.startsWith("https://api.whatsapp.com/") ||
      url.includes("wa.me/")
    ) {
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "WhatsApp is not installed on your device.");
      });
      return false;
    }
    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      {deviceId ? (
        <WebView
          ref={webviewRef}
          source={{
            uri: `https://digitalnamo.com/azmal/2025/june/triangacab/app/user/login.php?device_id=${deviceId}`,
          }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          onShouldStartLoadWithRequest={handleNavigation}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
      )}
    </View>
  );
};

export default App;
