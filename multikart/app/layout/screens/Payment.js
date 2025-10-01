import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const Payment = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "Credit / Debit Card" },
    { id: 2, name: "Net Banking" },
    { id: 3, name: "UPI / Wallet" },
    { id: 4, name: "Cash on Delivery" },
  ];

  const orderSummary = {
    subtotal: 270,
    discount: 20,
    tax: 5,
    total: 255,
  };

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.pageTitle}>Select Payment Method</Text>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodCard,
              selectedMethod === method.id && styles.methodCardActive,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <Text style={styles.methodText}>{method.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Order Summary */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>${orderSummary.subtotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Discount</Text>
            <Text>${orderSummary.discount}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Tax</Text>
            <Text>${orderSummary.tax}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>${orderSummary.total}</Text>
          </View>

          {/* View Details */}
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View details</Text>
          </TouchableOpacity>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity
          style={styles.proceedBtn}
          onPress={() => navigation.navigate("OrderConfirmation")} // You can create this screen
        >
          <Text style={styles.proceedText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 },
  pageTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 15 },
  methodCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  methodCardActive: {
    borderColor: "#0a84ff",
    backgroundColor: "#e6f0ff",
  },
  methodText: { fontSize: 16 },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
  },
  summaryTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalText: { fontWeight: "bold", fontSize: 16 },
  viewDetails: { color: "#0a84ff", marginTop: 10, fontWeight: "bold" },
  proceedBtn: {
    backgroundColor: "#0a84ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  proceedText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
