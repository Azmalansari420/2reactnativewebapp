import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, View, ActivityIndicator, Alert, Platform, SafeAreaView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Sound from 'react-native-sound';
import Geolocation from 'react-native-geolocation-service';
import { db, initAuth } from './firebaseConfig';
import { ref, onValue, update } from 'firebase/database';

const App = () => {
    const insets = useSafeAreaInsets();
  const webviewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [deviceId, setDeviceId] = useState<string>('');
  const [firebaseToken, setFirebaseToken] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);


  let bookingSound: Sound | null = null;
  let bookingSoundTimer: NodeJS.Timeout | null = null;

  // 🔊 Play booking sound
 const playBookingSound = () => {
  // Stop any previous sound and clear timer
  if (bookingSound) {
    bookingSound.stop(() => bookingSound?.release());
    bookingSound = null;
  }
  if (bookingSoundTimer) {
    clearTimeout(bookingSoundTimer);
    bookingSoundTimer = null;
  }

  bookingSound = new Sound(
    "https://tirangacab.com/assets/silent.mp3",
    null,
    (error) => {
      if (error) {
        console.log("❌ Failed to load sound", error);
        return;
      }
      bookingSound?.setNumberOfLoops(-1);
      bookingSound?.play((success) => {
        if (!success) console.log("❌ Sound playback failed");
      });

      // Stop the sound automatically after 20 seconds
      bookingSoundTimer = setTimeout(() => {
        stopBookingSound();
      }, 20000); // 20,000 ms = 20 seconds
    }
  );
};

const stopBookingSound = () => {
  if (bookingSound) {
    bookingSound.stop(() => bookingSound?.release());
    bookingSound = null;
  }
  if (bookingSoundTimer) {
    clearTimeout(bookingSoundTimer);
    bookingSoundTimer = null;
  }

  if (deviceId) {
    const soundRef = ref(db, `bookingsSound/${deviceId}`);
    update(soundRef, { soundPlay: 0 })
      .then(() => {
        console.log("✅ soundPlay set to 0 in Firebase");
        // deviceId = null; // Optional: clear after update
      })
      .catch(err => console.error("❌ Failed to update soundPlay", err));
  }

};

  // ⏹️ Stop booking sound
  // const stopBookingSound = () => {
  //   if (bookingSound) {
  //     bookingSound.stop(() => bookingSound?.release());
  //     bookingSound = null;
  //   }
  // };

  // Listen Firebase RTDB for new bookings
  const bookingsSoundPlay = (driverDeviceId: string) => {
    initAuth().then((uid) => {
      if (!uid) return;
      const soundRef = ref(db, `bookingsSound/${driverDeviceId}`);
      onValue(soundRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("📡 Booking update:", data);
          if (data?.soundPlay === 1) {
            playBookingSound();
            Alert.alert("New Booking", "You have a new booking!");
          } else {
            stopBookingSound();
          }
        } else {
          stopBookingSound();
        }
      });
    });
  };

  // ✅ GPS check
  const checkLocationServices = () => {
    Geolocation.getCurrentPosition(
      (pos) => console.log("✅ Location enabled:", pos.coords),
      (err) => {
        console.log("❌ GPS error:", err);
        Alert.alert("Enable GPS", "Please turn on GPS from settings");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const safeRequest = async (perm?: string) => {
    try {
      if (!perm) return RESULTS.UNAVAILABLE;
      return await request(perm as any);
    } catch (e) {
      console.log('permission request error for', perm, e);
      return RESULTS.DENIED;
    }
  };

  const requestAppPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) await safeRequest(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        const fineResult = await safeRequest(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (Platform.Version >= 29) await safeRequest(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION);
        if (fineResult === RESULTS.GRANTED) checkLocationServices();
      } else {
        const iosResult = await safeRequest(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (iosResult === RESULTS.GRANTED) checkLocationServices();
      }
    } catch (error) {
      console.error('Permission error:', error);
    }
  };

  useEffect(() => {
    requestAppPermissions();

    messaging()
      .getToken()
      .then(token => {
        setFirebaseToken(token);
        console.log('🔥 FCM Token:', token);
        return messaging().subscribeToTopic('allnoti2');
      })
      .then(() => console.log('✅ Subscribed to topic allnoti2'))
      .catch(err => console.error('FCM error:', err));

    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification?.title || 'Notification',
        remoteMessage.notification?.body || 'You have a new message.'
      );
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log("📩 Background message:", remoteMessage);
    });

    return () => unsubscribeOnMessage();
  }, []);

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 3000);

    DeviceInfo.getUniqueId().then(id => {
      setDeviceId(id);
      bookingsSoundPlay(id); // 🔊 Start listening for booking sounds
    });

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
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top, paddingBottom:insets.bottom  }}>
      <View style={{ flex: 1 }}>
        {showSplash ? (
          <WebView source={{ uri: "file:///android_asset/splash.html" }} />
        ) : deviceId ? (
          <WebView
            ref={webviewRef}
            source={{ uri: `https://tirangacab.com/app/vendor/login.php?device_id=${deviceId}&firebase_token=${firebaseToken || ""}` }}
            geolocationEnabled={true}
            onGeolocationPermissionsShowPrompt={(origin, callback) => { callback(true, false); }}
            onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
            style={{ flex: 1 }}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>

    </SafeAreaView>
  );
};

export default App;
