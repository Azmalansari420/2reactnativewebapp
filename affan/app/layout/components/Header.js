import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const HeaderWithSidebar = ({ title = "AFFAN" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width * 0.7)); // hidden by default

  const toggleSidebar = () => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: -width * 0.7,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="menu" size={28} color="#000" onPress={toggleSidebar} />
      </View>

      {/* Sidebar Overlay */}
      {isOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <Text style={styles.menuTitle}>Menu</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="document-text-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings-outline" size={20} color="#000" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 3,
    zIndex: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0057ff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    padding: 20,
    zIndex: 2,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HeaderWithSidebar;
