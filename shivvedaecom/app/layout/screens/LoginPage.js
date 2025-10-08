import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../../assets/css/myAppStyle";

const LoginPage = ({ navigation }) => {
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
      <Text style={styles.subTitle}>Login Now</Text>

      {/* Input fields */}
      <TextInput placeholder="Username Or Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate("Homepage")}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Or sign in with */}
      <Text style={styles.orText}>Or sign in with</Text>
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
        If you are new,{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.createNow}>Create Now</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginPage;
