import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const AddAddress = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const handleSave = () => {
    // You can add your save logic here, e.g., API call
    console.log({ fullName, phone, pinCode, addressLine1, addressLine2, city, state, landmark, isDefault });
    navigation.goBack();
  };

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.pageTitle}>Add New Address</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Pin Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pin code"
          keyboardType="number-pad"
          value={pinCode}
          onChangeText={setPinCode}
        />

        <Text style={styles.label}>Address Line 1</Text>
        <TextInput
          style={styles.input}
          placeholder="House number, Building Name"
          value={addressLine1}
          onChangeText={setAddressLine1}
        />

        <Text style={styles.label}>Address Line 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Street, Area, Colony"
          value={addressLine2}
          onChangeText={setAddressLine2}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter state"
          value={state}
          onChangeText={setState}
        />

        <Text style={styles.label}>Landmark (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Near landmark"
          value={landmark}
          onChangeText={setLandmark}
        />

        {/* Default Address Toggle */}
        <View style={styles.defaultRow}>
          <Text style={styles.defaultLabel}>Set as default address</Text>
          <Switch
            value={isDefault}
            onValueChange={setIsDefault}
            trackColor={{ false: "#ccc", true: "#0a84ff" }}
            thumbColor="#fff"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>Save Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 },
  pageTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 15 },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
  input: { backgroundColor: "#fff", borderRadius: 10, padding: 12, fontSize: 14 },
  defaultRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 30 },
  defaultLabel: { fontSize: 14, fontWeight: "bold" },
  saveBtn: { backgroundColor: "#0a84ff", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 30 },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
