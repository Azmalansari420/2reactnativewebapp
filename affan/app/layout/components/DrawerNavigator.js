import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../screens/HomePage";
import Register from "../screens/Register";
import ChangePassword from "../screens/ChangePassword";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
    </Drawer.Navigator>
  );
}
