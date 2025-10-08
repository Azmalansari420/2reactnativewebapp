import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../../assets/css/myAppStyle";

const ForgetPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={[styles.title, { marginBottom: 20 }]}>Forgot Password</Text>


      {/* Input fields */}
      <TextInput placeholder="Email Address" style={styles.input} />
      

      {/* Sign In button */}
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signInText}>SEND OTP</Text>
      </TouchableOpacity>

     
      {/* Create Now */}
      <Text style={styles.footerText}>
        Back to {" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.createNow]}>Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default ForgetPassword;
