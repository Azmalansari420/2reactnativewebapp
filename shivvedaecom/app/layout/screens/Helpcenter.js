import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const Helpcenter = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission (API call or alert)
    alert("Enquiry submitted successfully!");
    setForm({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* <Text style={styles.pageTitle}>Help Center</Text> */}

        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactCard}>
          <Text style={styles.contactText}>📞 +91 9876543210</Text>
          <Text style={styles.contactText}>✉️ support@yourapp.com</Text>
          <Text style={styles.contactText}>🏢 123, MG Road, New Delhi, India</Text>
        </View>

        <Text style={styles.sectionTitle}>Send us an Enquiry</Text>
        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={form.mobile}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("mobile", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={form.subject}
            onChangeText={(text) => handleChange("subject", text)}
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Message"
            value={form.message}
            multiline
            numberOfLines={5}
            onChangeText={(text) => handleChange("message", text)}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Helpcenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  contactCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  contactText: {
    fontSize: 14,
    marginVertical: 4,
  },
  formCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  submitBtn: {
    backgroundColor: "#05a845",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
