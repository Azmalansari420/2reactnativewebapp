import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Switch, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const handleDarkModeToggle = () => setIsDarkMode(!isDarkMode);
  const handleRTLToggle = () => setIsRTL(!isRTL);

  const links = [
    { title: "Pages", subtitle: "Ongoing Orders, Recent Orders..", iconName: "file-document-outline", screen: "Pages" },
    { title: "Orders", subtitle: "Ongoing Orders, Recent Orders..", iconName: "receipt", screen: "OrderHistory" },
    { title: "Your Wishlist", subtitle: "Your Save Products", iconName: "heart-outline", screen: "Wishlist" },
    { title: "Payment", subtitle: "Saved Cards, Wallets", iconName: "credit-card-outline", screen: "SavedCards" },
    { title: "Saved Address", subtitle: "Home, office..", iconName: "map-marker-outline", screen: "SavedAddress" },
    { title: "Language", subtitle: "Select your Language here..", iconName: "earth", screen: "Language" },
    { title: "Notification", subtitle: "Offers, Order tracking messages..", iconName: "bell-outline", screen: "Notification" },
    { title: "Settings", subtitle: "Dark mode, RTL, Notification", iconName: "cog-outline", screen: "Settings" },
    { title: "Profile setting", subtitle: "Full Name, Password..", iconName: "account-outline", screen: "ProfileSetting" },
    { title: "Terms & Conditions", subtitle: "T&C for use of Platform", iconName: "file-document-box-outline", screen: "Terms" },
    { title: "Help/Customer Care", subtitle: "Customer Support, FAQs", iconName: "phone-outline", screen: "Help" },
  ];

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Profile Info */}
        <View style={styles.profileDetail}>
          <Image source={require("../../assets/images/user/1.png")} style={styles.profileImage} />
          <View style={styles.profileText}>
            <Text style={styles.name}>Paige Turner</Text>
            <Text style={styles.email}>paigeturner@gmail.com</Text>
            <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate("ProfileSetting")}>
              <Text style={styles.editBtnText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sidebar Links */}
        <View style={styles.sidebarContent}>
          {/* Dark Mode Toggle */}
          <View style={styles.linkItem}>
            <Text style={styles.linkTitle}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={handleDarkModeToggle} />
          </View>

          {/* RTL Toggle */}
          <View style={styles.linkItem}>
            <Text style={styles.linkTitle}>RTL</Text>
            <Switch value={isRTL} onValueChange={handleRTLToggle} />
          </View>

          {/* Other Links */}
          {links.map((item, index) => (
            <TouchableOpacity key={index} style={styles.linkItem} onPress={() => navigation.navigate(item.screen)}>
              <Icon name={item.iconName} size={28} color="#333" style={{ marginRight: 10 }} />
              <View style={styles.linkText}>
                <Text style={styles.linkTitle}>{item.title}</Text>
                <Text style={styles.linkSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileDetail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    margin: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileText: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  email: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
  editBtn: {
    marginTop: 5,
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  editBtnText: {
    color: "#fff",
    fontSize: 14,
  },
  sidebarContent: {
    marginHorizontal: 15,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  linkText: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  linkSubtitle: {
    fontSize: 12,
    color: "#777",
  },
});
