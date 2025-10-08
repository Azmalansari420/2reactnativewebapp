import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Sidebar from "./Sidebar";

const Header = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  
  return (
    <>
    <View style={styles.header}>
      {/* Left Menu */}
      <TouchableOpacity onPress={() => setOpen(true)}>
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
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("Notification")}>
          <Icon name="bell-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("Wishlist")}>
          <Icon name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}  onPress={() => navigation.navigate("Cart")}>
          <Icon name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
    <Sidebar isOpen={open} onClose={() => setOpen(false)} navigation={navigation} />

    </>
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
