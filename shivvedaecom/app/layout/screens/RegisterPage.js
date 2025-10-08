import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../../assets/css/myAppStyle";

const RegisterPage = ({ navigation }) => {
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
      <Text style={styles.title}>Hey,</Text>
      <Text style={styles.subTitle}>Sign Up</Text>

      {/* Input fields */}
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email/Phone" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Sign In button */}
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signInText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Or sign in with */}
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={styles.socialContainer}>
        <Image
          source={require("../../assets/images/google.png")}
          style={styles.socialIcon}
        />
        <Image
          source={require("../../assets/images/facebook.png")}
          style={styles.socialIcon}
        />
        <Image
          source={require("../../assets/images/apple.png")}
          style={styles.socialIcon}
        />
      </View>

      {/* Create Now */}
      <Text style={styles.footerText}>
        Already have an Account?,{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.createNow}>Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default RegisterPage;
