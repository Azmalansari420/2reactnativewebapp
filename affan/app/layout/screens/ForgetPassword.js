import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; // Import global style

export default function ForgetPassword({ navigation }) {
  return (
    <View style={styles.container}>

       <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate("Login")}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity> 

      <Image
        source={require("../../assets/images/forget.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Forgot Your Password?</Text>

      <TextInput placeholder="Enter Your Email Address" style={styles.input} />
      

      <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate("ForgetPasswordSuccess")}>
        <Text style={styles.signInText}>Reset Password</Text>
      </TouchableOpacity>

      

    </View>
  );
}
