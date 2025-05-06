import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Mystyle from '../css/Mystyle';

const Loginform = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlelogin = () => {
    console.log("Email", email);
    console.log("Password", password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={Mystyle.container}>
      <Text style={Mystyle.heading}>Login</Text>

      <View style={Mystyle.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#fff" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor="#fff"
        />
      </View>

      <View style={Mystyle.inputContainer}>
        <FontAwesome name="lock" size={20} color="#fff" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#fff"
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handlelogin} style={Mystyle.button}>
        <Text style={Mystyle.buttontext}>Login</Text>
      </TouchableOpacity>

      {/* Navigate to Forgot Password Screen */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={Mystyle.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={Mystyle.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loginform;
