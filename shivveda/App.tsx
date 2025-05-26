import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpage from './assets/screens/Loginpage';
import Signup from './assets/screens/Signup';
import Welcome from './assets/screens/Welcome';
import HomeScreen from './assets/screens/HomeScreen';
import Productdetails from './assets/screens/Productdetails';
import Cart from './assets/screens/Cart';
import OrderSuccess from './assets/screens/OrderSuccess';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, animation: 'slide_from_right', }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Homescreen" component={HomeScreen} />
      <Stack.Screen name="Productdetails" component={Productdetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;