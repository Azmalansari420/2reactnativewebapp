import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mystyle from '../css/Mystyle';


export function Loginpage({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Mobile:', mobile);
    console.log('Password:', password);
    if (navigation.navigate) {
        navigation.navigate('Home');
      }
  };

  const handleForgotPassword = () => {
    if (navigation.navigate) {
      navigation.navigate('ForgotPassword');
    }
  };

  const handleSignup = () => {
    if (navigation.navigate) {
      navigation.navigate('Signup');
    }
  };

  return (
    <View style={Mystyle.container}>
      <Image
        source={require('../images/logo.png')}
        style={Mystyle.logo}
      />

      <Text style={Mystyle.heading}>Let’s login.</Text>
      <Text style={Mystyle.subheading}>
        Let us know what your Mobile No. and your password
      </Text>

      <View style={Mystyle.inputContainer}>
        <Icon name="call-outline" size={20} color="#333" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Enter your Mobile"
          keyboardType="number-pad"
          value={mobile}
          onChangeText={setMobile}
          placeholderTextColor="#999"
        />
      </View>

      <View style={Mystyle.inputContainer}>
      <Icon name="lock-closed-outline" size={20} color="#333" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={Mystyle.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Mystyle.loginButton} onPress={handleLogin}>
        <Text style={Mystyle.loginText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Mystyle.signupText} onPress={handleSignup}>
        <Text style={Mystyle.signupText}>
            Create an new account? <Text style={Mystyle.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>


      
    </View>
  );
}

export default Loginpage;
