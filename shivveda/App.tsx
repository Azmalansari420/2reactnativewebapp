import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpage from './assets/screens/Loginpage';
import Signup from './assets/screens/Signup';
import Welcome from './assets/screens/Welcome';
import HomeScreen from './assets/screens/HomeScreen';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, animation: 'slide_from_right', }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Homescreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;