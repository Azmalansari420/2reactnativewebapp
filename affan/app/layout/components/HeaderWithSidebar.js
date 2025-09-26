import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const HeaderWithSidebar = ({ title = "AFFAN" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-width * 0.7))[0];

  const toggleSidebar = () => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: -width * 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <>
      {/* Header only occupies its height */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={toggleSidebar}>
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Overlay + Sidebar */}
      {isOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleSidebar}
        >
          <Animated.View
            style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
          >
            <TouchableOpacity style={styles.closeBtn} onPress={toggleSidebar}>
              <Text style={{ fontSize: 18, color: "#0057ff" }}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
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
    zIndex: 1001, // keep above content
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#0057ff" },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1000,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.7,
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
    elevation: 6,
    zIndex: 1001,
  },
  closeBtn: {
    marginBottom: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default HeaderWithSidebar;
