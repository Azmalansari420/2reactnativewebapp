import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/layout/screens/LoginScreen";
import ForgetPassword from "./app/layout/screens/ForgetPassword";
import ForgetPasswordSuccess from "./app/layout/screens/ForgetPasswordSuccess";
import ChangePassword from "./app/layout/screens/ChangePassword";
import Register from "./app/layout/screens/Register";
import HomePage from "./app/layout/screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccess" component={ForgetPasswordSuccess} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
