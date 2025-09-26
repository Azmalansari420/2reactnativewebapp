import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNav = ({ onTabChange }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: "home", icon: "home-outline", label: "Home", screen: "Home" },
    { name: "profile", icon: "person-outline", label: "Profile", screen: "Profile" },
    { name: "Notification", icon: "notifications-outline", label: "Notification", screen: "Notification" },
    { name: "chat", icon: "chatbubble-outline", label: "Chat", screen: "Chat" },
    { name: "setting", icon: "settings-outline", label: "Settings", screen: "Setting" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.screen;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => {
              onTabChange?.(tab.name); // optional chaining in case undefined
              navigation.navigate(tab.screen);
            }}
            style={styles.tab}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeCircle]}>
              <Icon
                name={isActive ? tab.icon.replace("-outline", "") : tab.icon}
                size={24}
                color={isActive ? "#fff" : "#666"}
              />
            </View>
            <Text style={[styles.label, { color: isActive ? "#0057ff" : "#666" }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    elevation: 5,
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    backgroundColor: "#0057ff",
    elevation: 3,
    borderRadius: 10,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default BottomNav;
