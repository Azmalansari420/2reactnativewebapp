import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; // Import global style

export default function ForgetPasswordSuccess({ navigation }) {
  return (
    <View style={styles.container}>

       <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate("Login")}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity> 

      <Image
        source={require("../../assets/images/ForgetPasswordSuccess.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Check your mailbox!</Text>

      <Text style={styles.subtitle}>We have sent a password recovery email in your email. This email contain 8 digit security code.</Text>
      

      <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate("ChangePassword")}>
        <Text style={styles.signInText}>Reset Password</Text>
      </TouchableOpacity>

      

    </View>
  );
}
