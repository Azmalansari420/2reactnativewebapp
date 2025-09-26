import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  Modal, 
  TextInput 
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../assets/css/myAppStyle"; 
import Header from "../components/HeaderWithSidebar";
// import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Fixed Header */}
      <Header title="AFFAN" />

      {/* Scrollable Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* Top Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View>
              <Text style={styles.profileName}>Azmal Ansari</Text>
              <Text style={styles.profileRole}>Full Stack Developer</Text>
            </View>
            <Icon name="log-out-outline" size={22} color="#100dd1" style={{ marginLeft: "auto" }} />
          </View>

          {/* Details */}
          <View style={styles.profileDetails}>
            <View style={styles.row}>
              <Text style={styles.label}>Employee ID:</Text>
              <Text style={styles.value}>EmpID004</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>azmal@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Mobile:</Text>
              <Text style={styles.value}>1234567890</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Joining Date:</Text>
              <Text style={styles.value}>4 November 2024</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date of Birth:</Text>
              <Text style={styles.value}>1 November 2024</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Monthly Salary:</Text>
              <Text style={styles.value}>₹30000</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Working Hours/Day:</Text>
              <Text style={styles.value}>08 hours 30 minutes</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Department:</Text>
              <Text style={styles.value}>IT</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Office:</Text>
              <Text style={styles.value}>Code Diffusion Technologies</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Active:</Text>
              <Text style={styles.value}>Yes</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Role:</Text>
              <Text style={styles.value}>Developer</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Reporting To:</Text>
              <Text style={styles.value}>Md Arwaz</Text>
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity 
            style={styles.updateBtn} 
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.updateBtnText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Update Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}>
          <View style={{
            width: "90%",
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 20
          }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Update Profile</Text>
            
            {/* Example Form Fields */}
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Mobile" style={styles.input} keyboardType="numeric" />

            {/* Buttons */}
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 20 }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ marginRight: 20, color: "red" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: "green" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
