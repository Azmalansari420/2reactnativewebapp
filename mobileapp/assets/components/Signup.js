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

export function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('Password:', password);
    // Add your sign-up logic here
  };

  return (
    <View style={Mystyle.container}>
      <Image
        source={require('../images/logo.png')}
        style={Mystyle.logo}
      />

      <Text style={Mystyle.heading}>Create Account</Text>
      <Text style={Mystyle.subheading}>
        Enter your details to sign up
      </Text>

      <View style={Mystyle.inputContainer}>
        <Icon name="person-outline" size={20} color="#333" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#999"
        />
      </View>

      <View style={Mystyle.inputContainer}>
        <Icon name="mail-outline" size={20} color="#333" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
      </View>

      <View style={Mystyle.inputContainer}>
        <Icon name="call-outline" size={20} color="#333" style={Mystyle.icon} />
        <TextInput
          style={Mystyle.input}
          placeholder="Mobile Number"
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

      <TouchableOpacity style={Mystyle.loginButton} onPress={handleSignup}>
        <Text style={Mystyle.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={Mystyle.signupText}>
          Already have an account? <Text style={Mystyle.signupLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
