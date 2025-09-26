import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle";
import Header from "../components/HeaderWithSidebar";

const SettingsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Header title="Settings" />

      <ScrollView style={{ flex: 1 }}>
        {/* Profile Section */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" }} // yahan user ki photo aayegi
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.profileName}>Azmal Ansari</Text>
              <Text style={styles.profileRole}>azmal@example.com</Text>
            </View>
          </View>
        </View>

        {/* Settings Options */}
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="person-outline" size={22} color="#333" />
            <Text style={styles.settingsText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="lock-closed-outline" size={22} color="#333" />
            <Text style={styles.settingsText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="notifications-outline" size={22} color="#333" />
            <Text style={styles.settingsText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="shield-checkmark-outline" size={22} color="#333" />
            <Text style={styles.settingsText}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="help-circle-outline" size={22} color="#333" />
            <Text style={styles.settingsText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsItem}>
            <Icon name="log-out-outline" size={22} color="red" />
            <Text style={[styles.settingsText, { color: "red" }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsPage;
