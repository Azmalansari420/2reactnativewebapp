import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const notificationsData = [
  { type: "order", title: "Exclusive Brand Day Sale!! HURRY, LIMITED period offer!", date: "10 July, 2021", image: require("../../assets/images/notification/1.jpg") },
  { type: "offers", title: "Order Placed successfully. It will be delivered on Mon 15 July, 2021", date: "5 July, 2021", image: require("../../assets/images/notification/2.jpg") },
  { type: "order", title: "We have got coupons. collect now and save extras !!!", date: "5 June, 2021", image: require("../../assets/images/notification/3.jpg") },
  { type: "payment", title: "Payment Failed. You can retry making a payment on order sections.", date: "20 April, 2021", image: require("../../assets/images/notification/4.jpg") },
  { type: "payment", title: "Exclusive Brand Day Sale!! HURRY, LIMITED period offer!", date: "10 July, 2021", image: require("../../assets/images/notification/5.jpg") },
  { type: "offers", title: "Your order is delivered on time. for any further assistance please contact us.", date: "5 July, 2021", image: require("../../assets/images/notification/6.jpg") },
];

const Notification = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filterNotifications = () => {
    if (activeTab === "all") return notificationsData;
    return notificationsData.filter(item => item.type === activeTab);
  };

  const tabs = [
    { label: "All", value: "all" },
    { label: "Order Info", value: "order" },
    { label: "Offers", value: "offers" },
    { label: "Payment", value: "payment" },
    { label: "Return", value: "return" },
  ];

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container}>
        {/* <View style={styles.titleSection}>
          <Text style={styles.title}>Notification</Text>
        </View> */}

        <View style={styles.tabSection}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab.value}
              style={[styles.tabButton, activeTab === tab.value && styles.activeTab]}
              onPress={() => setActiveTab(tab.value)}
            >
              <Text style={[styles.tabText, activeTab === tab.value && styles.activeTabText]}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.notifications}>
          {filterNotifications().map((item, index) => (
            <View key={index} style={styles.notificationItem}>
              <Image source={item.image} style={styles.notificationImage} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDate}>{item.date}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleSection: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  tabSection: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10,
    flexWrap: "wrap",
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabText: {
    color: "#444",
    fontSize: 14,
  },
  activeTabText: {
    color: "#fff",
  },
  notifications: {
    paddingHorizontal: 15,
  },
  notificationItem: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  notificationImage: {
    width: 80,
    height: 80,
  },
  notificationContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  notificationDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});
