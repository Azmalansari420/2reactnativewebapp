import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import LoginPage from "./app/layout/screens/LoginPage";
import RegisterPage from "./app/layout/screens/RegisterPage";
import ForgetPassword from "./app/layout/screens/ForgetPassword";
import Homepage from "./app/layout/screens/Homepage";
import Notification from "./app/layout/screens/Notification";
import Wishlist from "./app/layout/screens/Wishlist";
import Cart from "./app/layout/screens/Cart";
import Category from "./app/layout/screens/Category";
import Profile from "./app/layout/screens/Profile";
import InnerCategory from "./app/layout/screens/InnerCategory";
import Shop from "./app/layout/screens/Shop";
import ProductDetail from "./app/layout/screens/ProductDetail";
import Delivery from "./app/layout/screens/Delivery";
import AddAddress from "./app/layout/screens/AddAddress";
import Payment from "./app/layout/screens/Payment";
import OrderConfirmation from "./app/layout/screens/OrderConfirmation";
import TrackOrder from "./app/layout/screens/TrackOrder";
import Orderhistory from "./app/layout/screens/Orderhistory";
import Helpcenter from "./app/layout/screens/Helpcenter";

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Register" component={RegisterPage} />
              <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

              <Stack.Screen name="Homepage" component={Homepage} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="Wishlist" component={Wishlist} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Category" component={Category} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="InnerCategory" component={InnerCategory} />
              <Stack.Screen name="Shop" component={Shop} />
              <Stack.Screen name="ProductDetail" component={ProductDetail} />
              <Stack.Screen name="Delivery" component={Delivery} />
              <Stack.Screen name="AddAddress" component={AddAddress} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
              <Stack.Screen name="TrackOrder" component={TrackOrder} />
              <Stack.Screen name="Orderhistory" component={Orderhistory} />
              <Stack.Screen name="Helpcenter" component={Helpcenter} />
            </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
