import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const webviewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState<string>(''); 

  useEffect(() => {
    // Get the device ID when the component mounts
    DeviceInfo.getUniqueId().then(id => {
      setDeviceId(id);
    });

    const backAction = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true; 
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  const handleNavigation = (event: any) => {
    if (event.url.startsWith("whatsapp://") || event.url.startsWith("https://api.whatsapp.com/")) {
      Linking.openURL(event.url);
      return false; // Prevent WebView from loading WhatsApp links
    }
    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      {deviceId ? (
        <WebView
          ref={webviewRef}
          source={{ uri: `https://azmalansari.com/0azmal/9freelance/chickbazar/admin/?device_id=${deviceId}` }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          onShouldStartLoadWithRequest={handleNavigation} // Handles WhatsApp link clicks
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default App;