import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; // Import global style

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login-illustration.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Log in to continue to the Affan</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <View style={styles.passwordContainer}>
        <TextInput placeholder="Enter Password" style={styles.passwordInput} />
        <Icon name="eye" size={20} color="#888" />
      </View>

      {/* Navigate directly to HomePage */}
      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgetpassworddiv}
        onPress={() => navigation.navigate("ForgetPassword")}
      >
        <Text style={styles.forgetpasswordbtn}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerddiv}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerbtn}>
          Didn't have an account?{" "}
          <Text style={{ color: "blue", fontWeight: "600" }}>
            Register Now
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
