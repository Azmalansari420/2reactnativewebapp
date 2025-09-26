import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import LoginScreen from "./app/layout/screens/LoginScreen";
import ForgetPassword from "./app/layout/screens/ForgetPassword";
import ForgetPasswordSuccess from "./app/layout/screens/ForgetPasswordSuccess";
import ChangePassword from "./app/layout/screens/ChangePassword";
import Register from "./app/layout/screens/Register";

import HomePage from "./app/layout/screens/HomePage";
import ProfilePage from "./app/layout/screens/ProfilePage";
import NotificationPage from "./app/layout/screens/NotificationPage";
import ChatPage from "./app/layout/screens/ChatPage";
import SettingsPage from "./app/layout/screens/SettingsPage";

import BottomNav from "./app/layout/components/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const withBottomNav = (Component) => (props) => (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <Component {...props} />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </View>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Login Flow: no bottom nav */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ForgetPasswordSuccess" component={ForgetPasswordSuccess} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Register" component={Register} />

          {/* Main Screens: wrap with bottom nav */}
          <Stack.Screen name="Home" component={withBottomNav(HomePage)} />
          <Stack.Screen name="Profile" component={withBottomNav(ProfilePage)} />
          <Stack.Screen name="Notification" component={withBottomNav(NotificationPage)} />
          <Stack.Screen name="Chat" component={withBottomNav(ChatPage)} />
          <Stack.Screen name="Setting" component={withBottomNav(SettingsPage)} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1 },
});
