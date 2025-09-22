import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const HeaderWithSidebar = ({ title = "AFFAN" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width * 0.7));
  const navigation = useNavigation();

  

  const toggleSidebar = () => {
    if (isOpen) {
      Animated.timing(slideAnim, { toValue: -width * 0.7, duration: 300, useNativeDriver: false }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: false }).start();
    }
  };

const navigateTo = (screenName) => {
  toggleSidebar();
  navigation.navigate(screenName); // HomePage/Register/ChangePassword Drawer ke under hi hai
};



  return (
    <View style={{ zIndex: 10 }}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={toggleSidebar}>
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>


      {/* Overlay */}
      {isOpen && <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={toggleSidebar} />}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <Text style={styles.menuTitle}>Menu</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("HomePage")}>
          <Icon name="home-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Register")}>
          <Icon name="person-add-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Login")}>
          <Icon name="log-in-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("ChangePassword")}>
          <Icon name="settings-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 3,
    zIndex: 10, // ensure overlay appears on top
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#0057ff" },
  overlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 },
  sidebar: { position: "absolute", top: 0, bottom: 0, width: width * 0.7, backgroundColor: "#fff", padding: 20, zIndex: 2, elevation: 5 },
  menuTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  menuItem: { flexDirection: "row", alignItems: "center", marginVertical: 12 },
  menuText: { fontSize: 16, marginLeft: 10 },
});


export default HeaderWithSidebar;
