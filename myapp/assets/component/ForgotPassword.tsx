import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Forgot Password Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10, backgroundColor: '#007bff', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
