import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const OrderConfirmation = ({ navigation }) => {
  // Sample order details
  const orderDetails = {
    orderId: "123456789",
    deliveryDate: "25th July",
    total: "$270.00",
    paymentMethod: "Credit Card",
  };

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.thankYouBox}>
          <Image
            source={require("../../assets/images/check.jpg")} // You can add a checkmark image
            style={styles.successIcon}
          />
          <Text style={styles.thankYouText}>Thank You!</Text>
          <Text style={styles.orderText}>Your order has been placed successfully</Text>
        </View>

        <View style={styles.orderBox}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          <View style={styles.detailRow}>
            <Text>Order ID</Text>
            <Text>{orderDetails.orderId}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text>Delivery Date</Text>
            <Text>{orderDetails.deliveryDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text>Total Amount</Text>
            <Text>{orderDetails.total}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text>Payment Method</Text>
            <Text>{orderDetails.paymentMethod}</Text>
          </View>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.trackBtn}
          onPress={() => navigation.navigate("TrackOrder")} // Create TrackOrder screen
        >
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Text style={styles.continueText}>Continue Shopping</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 },
  thankYouBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
  },
  successIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
    resizeMode: "contain",
  },
  thankYouText: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  orderText: { fontSize: 16, color: "#555", textAlign: "center" },
  orderBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  trackBtn: {
    backgroundColor: "#0a84ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  trackText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  continueBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0a84ff",
    marginBottom: 30,
  },
  continueText: { color: "#0a84ff", fontSize: 16, fontWeight: "bold" },
});
