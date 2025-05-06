import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const webviewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
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
    const { url } = event;

    if (url.startsWith("whatsapp://") || url.startsWith("https://api.whatsapp.com/")) {
      Linking.openURL(url).catch(err => console.error("Error opening WhatsApp", err));
      return false; // Prevent WebView from loading the link
    }

    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://developershahrukh.in/' }}
        onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        onShouldStartLoadWithRequest={handleNavigation}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']} // Allow all origins
        allowsInlineMediaPlayback={true} // If media needs to be played
      />
    </View>
  );
};

export default App;