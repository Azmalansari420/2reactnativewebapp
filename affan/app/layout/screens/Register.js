import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; // Import global style

export default function Register({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login-illustration.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Register to continue to the Affan</Text>
    
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <View style={styles.passwordContainer}>
        <TextInput placeholder="Enter Password" style={styles.passwordInput} />
        <Icon name="eye" size={20} color="#888" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <Icon
            name={isChecked ? "checkbox" : "square-outline"}
            size={24}
            color="#007bff"
          />
        </TouchableOpacity>
        <Text style={[styles.label, { marginLeft: 8 }]}>
          I agree with the terms & policy.
        </Text>
      </View>

      {/* Navigate directly to HomePage */}
      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerddiv}>
        <Text style={styles.registerbtn}>
          Already have an account?{" "}
          <Text
            style={{ color: "blue", fontWeight: "600" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
