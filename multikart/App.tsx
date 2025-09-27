import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import LoginPage from "./app/layout/screens/LoginPage";
import RegisterPage from "./app/layout/screens/RegisterPage";
import ForgetPassword from "./app/layout/screens/ForgetPassword";
import Homepage from "./app/layout/screens/Homepage";

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

          <Stack.Screen name="Homepage" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
