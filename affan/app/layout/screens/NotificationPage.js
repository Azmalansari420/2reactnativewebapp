import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../assets/css/myAppStyle";
import Header from "../components/HeaderWithSidebar";

const attendanceData = [
  {
    id: 1,
    name: "Azmal Ansari",
    status: "Present",
    punchIn: "10:04 AM",
    punchOut: "",
    hoursWorked: "",
    lateIn: "04 minutes",
  },
  {
    id: 2,
    name: "Archana Mawar",
    status: "Present",
    punchIn: "10:19 AM",
    punchOut: "",
    hoursWorked: "",
    lateIn: "19 minutes",
  },
  {
    id: 3,
    name: "Md Arwaz",
    status: "Present",
    punchIn: "10:31 AM",
    punchOut: "",
    hoursWorked: "",
    lateIn: "31 minutes",
  },
];

const HomePage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <Header title="Notifications" />

      <ScrollView style={{ flex: 1, padding: 15 }}>
        <Text style={styles.sectionTitle}>Today's Attendance</Text>

        {attendanceData.map((item) => (
          <View key={item.id} style={styles.attendanceCard}>
            <View style={styles.attendanceHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View>
                <Text style={styles.profileName}>{item.name}</Text>
                <Text style={styles.profileRole}>
                  Status: {item.status}
                </Text>
              </View>
              <Text style={styles.presentText}>{item.status}</Text>
            </View>

            <View style={styles.attendanceDetails}>
              <Text style={styles.detailText}>Punch In: {item.punchIn}</Text>
              <Text style={styles.detailText}>Punch Out: {item.punchOut}</Text>
              <Text style={styles.detailText}>Hours Worked: {item.hoursWorked}</Text>
              <Text style={styles.lateText}>Late In: {item.lateIn}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePage;
