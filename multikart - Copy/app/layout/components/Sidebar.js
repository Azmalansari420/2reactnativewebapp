import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated, Dimensions, StyleSheet, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Sidebar = ({ isOpen, onClose }) => {
  const translateX = useRef(new Animated.Value(-width)).current; // start hidden
  const navigation = useNavigation(); // <-- get navigation from hook

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const menuItems = [
    { label: "Home", screen: "Homepage", icon: "home-outline" },
    { label: "Shop By Category", screen: "Category", icon: "view-grid-outline" },
    { label: "Orders", screen: "Orderhistory", icon: "clipboard-list-outline" },
    { label: "Your Wishlist", screen: "Wishlist", icon: "heart-outline" },
    { label: "Your Account", screen: "Profile", icon: "account-outline" },
    { label: "Language", icon: "translate" },
    { label: "Cart", screen: "Cart", icon: "cart-outline" },
    { label: "Settings", icon: "Settings", iconActive: "cog-outline" },
    { label: "Help Center",screen: "Helpcenter", icon: "help-circle-outline" },
  ];

  return (
    <>
      {isOpen && <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1} />}

      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        <View style={styles.userSection}>
          <Image source={require("../../assets/images/user.png")} style={styles.userImage} />
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>User</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch value={false} onValueChange={() => {}} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>RTL Layout</Text>
          <Switch value={false} onValueChange={() => {}} />
        </View>

        <View style={styles.divider} />

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            activeOpacity={0.6}
            onPress={() => {
              if (item.screen) {
                navigation.navigate(item.screen); // navigate using the screen property
                onClose(); // close sidebar after navigation
              }
            }}
          >
            <Icon name={item.icon} size={22} color="#444" style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 99,
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75,
    backgroundColor: "#fff",
    padding: 20,
    elevation: 100,
    zIndex: 100,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  greeting: {
    fontSize: 14,
    color: "#888",
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },
});
