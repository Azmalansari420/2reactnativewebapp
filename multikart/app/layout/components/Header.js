import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      {/* Left Menu */}
      <TouchableOpacity>
        <Icon name="menu" size={28} color="#000" />
      </TouchableOpacity>

      {/* Center Logo */}
      <Image
        source={require("../../assets/images/logo.png")}  // <- अपना logo यहां रख देना
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="magnify" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="bell-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },
  logo: {
    width: 120,
    height: 35,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBtn: {
    marginLeft: 12,
  },
});
