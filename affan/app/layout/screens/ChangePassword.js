import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; // Import global style

export default function ChangePassword({ navigation }) {
  return (
    <View style={styles.container}>

       <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate("Login")}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity> 

      <Image
        source={require("../../assets/images/change-password.png")}
        style={styles.image}
    />

    <Text style={styles.title}>Update your password</Text>

    <TextInput placeholder="Enter 8 digit security code" style={styles.input} />
    <View style={styles.passwordContainer}>
        <TextInput placeholder="New password" style={styles.passwordInput} />
        <Icon name="eye" size={20} color="#888" />
    </View>
    <View style={styles.passwordContainer}>
        <TextInput placeholder="Re-write password" style={styles.passwordInput} />
        <Icon name="eye" size={20} color="#888" />
    </View>

    <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate("Login")}>
    <Text style={styles.signInText}>Update Password</Text>
    </TouchableOpacity>

      

    </View>
  );
}
