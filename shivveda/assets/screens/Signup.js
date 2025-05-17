import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // ← Import navigation hook
import Mystyle from '../css/Mystyle';

const Signup = () => {
  const navigation = useNavigation(); // ← Hook to access navigation

  return (
    <ScrollView style={Mystyle.container}>
      {/* Header */}
      {/* <View style={Mystyle.header}>
        <Text style={Mystyle.headerTitle}>Sign Up</Text>
      </View> */}

<View style={Mystyle.logoWrapperlogin}>
          <View style={Mystyle.logoBox}>
            <Image
              source={require('../../assets/images/logo.png')} // Save your yellow icon as shop-icon.png
              style={Mystyle.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

      {/* Input Form */}
      <View style={Mystyle.form}>
        <Text style={Mystyle.label}>Mobile</Text>
        <View style={Mystyle.inputWrapper}>
          <Icon name="call-outline" size={20} color="#999" style={Mystyle.icon} />
          <TextInput placeholder="+91 12345 67890" style={Mystyle.input} keyboardType="phone-pad" />
        </View>

        <Text style={Mystyle.label}>Your Email</Text>
        <View style={Mystyle.inputWrapper}>
          <Icon name="mail-outline" size={20} color="#999" style={Mystyle.icon} />
          <TextInput placeholder="example@mail.com" style={Mystyle.input} keyboardType="email-address" />
        </View>

        <Text style={Mystyle.label}>Password</Text>
        <View style={Mystyle.inputWrapper}>
          <Icon name="lock-closed-outline" size={20} color="#999" style={Mystyle.icon} />
          <TextInput placeholder="***********" style={Mystyle.input} secureTextEntry />
        </View>
      </View>

      {/* Footer */}
      <View style={Mystyle.footer}>
        <Text style={Mystyle.termsText}>By continuing, you agree to our</Text>
        <Text style={Mystyle.termsLink}>Terms & Conditions</Text>

        <TouchableOpacity style={Mystyle.signInBtn}>
          <Text style={Mystyle.signInText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* 🚀 Navigate to Signup on Press */}
        <TouchableOpacity style={Mystyle.signUpBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={Mystyle.signUpText}>Already Member? SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;
