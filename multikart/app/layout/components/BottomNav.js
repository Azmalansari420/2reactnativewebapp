import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNav = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", icon: "home-outline", iconActive: "home" },
    { name: "Category", icon: "shape-outline", iconActive: "shape" },
    { name: "Cart", icon: "cart-outline", iconActive: "cart" },
    { name: "Wishlist", icon: "heart-outline", iconActive: "heart" },
    { name: "Profile", icon: "account-outline", iconActive: "account" },
  ];

  const handlePress = (tab) => {
    setActiveTab(tab.name);
    // Navigate to the corresponding screen
    navigation.navigate(tab.name);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.navItem}
          onPress={() => handlePress(tab)}
        >
          <MaterialCommunityIcons
            name={activeTab === tab.name ? tab.iconActive : tab.icon}
            size={26}
            color={activeTab === tab.name ? "#FF4D4D" : "#555"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === tab.name ? "#FF4D4D" : "#555" },
            ]}
          >
            {tab.name.toLowerCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
  },
});
