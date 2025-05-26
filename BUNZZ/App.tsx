import React, { useRef, useState, useEffect } from 'react';
      import { BackHandler, View, ActivityIndicator, Alert, Platform } from 'react-native';
      import { WebView } from 'react-native-webview';
      import DeviceInfo from 'react-native-device-info';
      import messaging from '@react-native-firebase/messaging';
      import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

      const App = () => {
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
                const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
                if (result === RESULTS.GRANTED) {
                  console.log('Notification permission granted');
                } else if (result === RESULTS.DENIED) {
                  Alert.alert(
                    'Notification Permission',
                    'Notification permissions are required for the app to function properly. Please allow them in your settings.',
                  );
                } else if (result === RESULTS.BLOCKED) {
                  Alert.alert(
                    'Notification Permission',
                    'Permission is permanently denied. Please enable it manually in Settings > App Info > Notifications.',
                  );
                }
              } else {
                console.log('Notification permission not required for this Android version.');
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

        

        return (
          <View style={{ flex: 1 }}>
            {showSplash ? (
              <WebView source={{ uri: 'file:///android_asset/splash.html' }} />
            ) : deviceId ? (
              <WebView
                ref={webviewRef}
                source={{ uri: `https://bunzz.in/app/user/login.php?device_id=${deviceId}&firebase_token=${firebaseToken}` }}
                onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
              />
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
          </View>
        );
      };

      export default App;