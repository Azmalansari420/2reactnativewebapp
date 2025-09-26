import React, { useRef, useState, useEffect } from 'react';
      import { BackHandler, View, ActivityIndicator, Alert, Platform } from 'react-native';
      import { useSafeAreaInsets } from "react-native-safe-area-context";
      import { WebView } from 'react-native-webview';
      import DeviceInfo from 'react-native-device-info';
      import messaging from '@react-native-firebase/messaging';
      import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

      const App = () => {
         const insets = useSafeAreaInsets();
        const webviewRef = useRef<WebView | null>(null);
        const [canGoBack, setCanGoBack] = useState(false);
        const [deviceId, setDeviceId] = useState<string>('');
        const [firebaseToken, setFirebaseToken] = useState<string | null>(null);
        const [showSplash, setShowSplash] = useState(true);

        useEffect(() => {
          // Show splash screen for 3 seconds
          

          const requestNotificationPermission = async () => {
            try {
              if (Platform.OS === 'android' && Platform.Version >= 33) {
                if (PERMISSIONS.ANDROID.POST_NOTIFICATIONS) {   // ✅ safe check
                  const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
                  if (result === RESULTS.GRANTED) {
                    console.log('✅ Notification permission granted');
                  } else {
                    console.log('❌ Notification permission denied:', result);
                  }
                } else {
                  console.log('⚠️ POST_NOTIFICATIONS not available in this RN Permissions version');
                }
              } else {
                console.log('ℹ️ Notification permission not required below Android 13');
              }
            } catch (error) {
              console.error('Error requesting notification permission:', error);
            }
          };
          

          const initializeMessaging = async () => {
            try {
              const token = await messaging().getToken();
              setFirebaseToken(token);
              console.log('FCM Token:', token);

              await messaging().subscribeToTopic('allnoti2');
              console.log('Subscribed to topic: allnoti2');

              const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
                Alert.alert(
                  remoteMessage.notification?.title || 'Notification',
                  remoteMessage.notification?.body || 'You have a new message.',
                );
              });

              return unsubscribeOnMessage;
            } catch (error) {
              console.error('Error initializing messaging:', error);
            }
          };

          requestNotificationPermission();
          const unsubscribeMessaging = initializeMessaging();

          return () => {
            if (unsubscribeMessaging) {
              unsubscribeMessaging.then(unsubscribe => unsubscribe && unsubscribe());
            }
          };
        }, []);

        useEffect(() => {
          const splashTimer = setTimeout(() => {
            setShowSplash(false);
          }, 3000);
          
          DeviceInfo.getUniqueId().then(id => setDeviceId(id));

          const backAction = () => {
            if (canGoBack && webviewRef.current) {
              webviewRef.current.goBack();
              return true;
            }
            return false;
          };

          const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

          return () => {
            clearTimeout(splashTimer);
            backHandler.remove();
          };
        }, [canGoBack]);

        

        const postFirebaseToken = async () => {
          try {
            const formData = new FormData();
            formData.append("device_id", deviceId);
            formData.append("token", firebaseToken);
            
         
            const response = await fetch("https://tirangacab.com/api/auth/checkdeviceid", {
              method: "POST",
              body: formData,
            }); 
        
            const text = await response.text(); // kyunki CI response JSON nahi bhej raha
            console.log("✅ API Response:", text);
          } catch (error) {
            console.error("❌ API Error:", error);
          }
        };
        
        useEffect(() => {
        postFirebaseToken();
        }, [firebaseToken, deviceId]);

        return (
          <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom  }}>
            {showSplash ? (
              <WebView source={{ uri: 'file:///android_asset/splash.html' }} />
            ) : deviceId ? (
              <WebView
              ref={webviewRef}
              source={{ uri: `https://tirangacab.com/app/user/login.php?device_id=${deviceId}&firebase_token=${firebaseToken}` }}
              onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              allowsBackForwardNavigationGestures={true}
              cacheEnabled={true}
              thirdPartyCookiesEnabled={true}
              originWhitelist={['*']}
            />

            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
          </View>
        );
      };

      export default App;