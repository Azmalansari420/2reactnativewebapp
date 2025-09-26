import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import styles from "../../assets/css/myAppStyle"; // Import global style
import Header from "../components/HeaderWithSidebar";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const banners = [
  { id: 1, img: require("../../assets/images/banner1.jpg") },
  { id: 2, img: require("../../assets/images/banner2.jpg") },
  { id: 3, img: require("../../assets/images/banner3.jpg") },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Fixed Header */}
      <Header title="AFFAN" />

      {/* Scrollable Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* Banner */}
        <View style={{ height: 220 }}>
          <Swiper autoplay={true} showsPagination={true} dotColor="#ccc" activeDotColor="#0057ff">
            {banners.map((item) => (
              <View key={item.id} style={{ borderRadius: 12, overflow: "hidden", marginHorizontal: 15 }}>
                <Image
                  source={item.img}
                  style={{ width: width - 30, height: 200, borderRadius: 12 }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>

        {/* Profile Section */}
        <View style={styles.container}>
          {/* Profile Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>Azmal Ansari</Text>
              <Text style={styles.role}>Developer</Text>
            </View>
            <TouchableOpacity style={styles.punchBtn}>
              <Text style={styles.punchBtnText}>Punch Out</Text>
            </TouchableOpacity>
          </View>

          {/* Greeting */}
          <Text style={styles.greeting}>Good Afternoon, Azmal!</Text>
          <Text style={styles.date}>Sat Aug 16 2025</Text>

          {/* Today’s Activity */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Today’s Activity</Text>
            <Text style={styles.checkIn}>✅ 10:22 AM - Punch In</Text>
            <Text style={styles.checkOut}>❌ Punch Out</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text>My Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text>Apply Leave</Text>
            </TouchableOpacity>
          </View>

          {/* Summary */}
          <View style={styles.summary}>
            <Text style={styles.sectionTitle}>Today’s Summary</Text>
            <Text>Total Hours Worked: 0</Text>
            <Text>Break Time: 01:45 PM To 02:30 PM</Text>
          </View>
         
          {/* Monthly Statistics */}
          <View style={styles.summary}>
            <Text style={styles.sectionTitle}>Monthly Statistics</Text>

            {/* Row 1 */}
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>📅</Text>
              <Text style={styles.statLabel}>Month</Text>
              <Text style={styles.statValue}>August 2025</Text>
            </View>

            {/* Row 2 */}
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>📅</Text>
              <Text style={styles.statLabel}>Total Days in This Month</Text>
              <Text style={styles.statValue}>31</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>💼</Text>
              <Text style={styles.statLabel}>Company's Working Days</Text>
              <Text style={styles.statValue}>27</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>🎉</Text>
              <Text style={styles.statLabel}>Holidays</Text>
              <Text style={styles.statValue}>2</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>☀️</Text>
              <Text style={styles.statLabel}>Sundays</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>✅</Text>
              <Text style={styles.statLabel}>Present Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>🌓</Text>
              <Text style={styles.statLabel}>Half Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>🏢</Text>
              <Text style={styles.statLabel}>Componey Off Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>❌</Text>
              <Text style={styles.statLabel}>Absent Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>📝</Text>
              <Text style={styles.statLabel}>Leave Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>⏰</Text>
              <Text style={styles.statLabel}>Late in Days</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>⌛</Text>
              <Text style={styles.statLabel}>Total Hours Worked</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>🕘</Text>
              <Text style={styles.statLabel}>Average Punch in Time</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statIcon}>🕔</Text>
              <Text style={styles.statLabel}>Average Punch Out Time</Text>
              <Text style={styles.statValue}>2</Text>
            </View>



          </View>

        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      {/* <BottomNav activeTab={activeTab} onTabChange={setActiveTab} /> */}
    </View>
  );
};

export default HomePage;
