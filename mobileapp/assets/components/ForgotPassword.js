import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mystyle from '../css/Mystyle';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset link sent to:', email);
    // Add your password reset logic here
  };

  return (
    <View style={Mystyle.container}>
      <Image
        source={require('../images/logo.png')} // Adjust path if needed
        style={Mystyle.logo}
      />

      <Text style={Mystyle.heading}>Forgot Password</Text>
      <Text style={Mystyle.subheading}>
        Let’s reset your password. Enter your email to receive a reset link.
      </Text>

      <View style={Mystyle.inputContainer}>
        <Icon name="mail-outline" size={20} color="#000" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#666"
        />
      </View>

      <TouchableOpacity style={Mystyle.loginButton} onPress={handleResetPassword}>
        <Text style={Mystyle.loginText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={Mystyle.signupText}>
          Back to <Text style={Mystyle.signupLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
