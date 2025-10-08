import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute(); // get current route name

  const tabs = [
    { label: "Home", screen: "Homepage", icon: "home-outline", iconActive: "home" },
    { label: "Category", screen: "Category", icon: "shape-outline", iconActive: "shape" },
    { label: "Cart", screen: "Cart", icon: "cart-outline", iconActive: "cart" },
    { label: "Wishlist", screen: "Wishlist", icon: "heart-outline", iconActive: "heart" },
    { label: "Profile", screen: "Profile", icon: "account-outline", iconActive: "account" },
  ];


  const handlePress = (tab) => {
    navigation.navigate(tab.screen);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.screen; // check active tab using screen name
        return (
          <TouchableOpacity
            key={tab.screen}
            style={styles.navItem}
            onPress={() => handlePress(tab)}
          >
            <MaterialCommunityIcons
              name={isActive ? tab.iconActive : tab.icon}
              size={26}
              color={isActive ? "#FF4D4D" : "#555"}
            />
            <Text
              style={[
                styles.navText,
                { color: isActive ? "#FF4D4D" : "#555" },
              ]}
            >
              {tab.label.toLowerCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
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
