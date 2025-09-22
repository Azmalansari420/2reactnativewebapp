import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./app/layout/components/DrawerNavigator"; 
import LoginScreen from "./app/layout/screens/LoginScreen";
import ForgetPassword from "./app/layout/screens/ForgetPassword";
import ForgetPasswordSuccess from "./app/layout/screens/ForgetPasswordSuccess";
import ChangePassword from "./app/layout/screens/ChangePassword";
import Register from "./app/layout/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Login Flow */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccess" component={ForgetPasswordSuccess} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Register" component={Register} />

        {/* Drawer After Login */}
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
