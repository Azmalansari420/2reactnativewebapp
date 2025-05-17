import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Mystyle from '../css/Mystyle';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={Mystyle.container}>
      <ImageBackground
        source={require('../../assets/images/bg.png')} // Save your background pattern as bg-pattern.png
        resizeMode="repeat"
        style={Mystyle.bg}
      >
        <View style={Mystyle.logoWrapper}>
          <View style={Mystyle.logoBox}>
            <Image
              source={require('../../assets/images/logo.png')} // Save your yellow icon as shop-icon.png
              style={Mystyle.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={Mystyle.buttonWrapper}>
          <TouchableOpacity
            style={Mystyle.getStartedBtn}
            onPress={() => navigation.navigate('Login')} // Change 'Login' to your desired screen
          >
            <Text style={Mystyle.getStartedText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default Welcome;
