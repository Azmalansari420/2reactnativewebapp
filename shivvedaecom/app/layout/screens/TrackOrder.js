import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const TrackOrder = ({ navigation }) => {
  // Sample tracking steps
  const trackingSteps = [
    { id: 1, title: "Order Placed", date: "12 Aug 2025", completed: true },
    { id: 2, title: "Order Confirmed", date: "13 Aug 2025", completed: true },
    { id: 3, title: "Shipped", date: "14 Aug 2025", completed: false },
    { id: 4, title: "Out for Delivery", date: "15 Aug 2025", completed: false },
    { id: 5, title: "Delivered", date: "16 Aug 2025", completed: false },
  ];

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Page Title */}
        <Text style={styles.pageTitle}>Track Your Order</Text>

        {/* Order Info */}
        <View style={styles.orderInfo}>
          <Text style={styles.orderLabel}>Order No:</Text>
          <Text style={styles.orderNumber}>#64484032</Text>
          <Text style={styles.orderLabel}>Payment Method:</Text>
          <Text style={styles.orderNumber}>Google UPI</Text>
        </View>

        {/* Tracking Steps */}
        <View style={styles.trackingContainer}>
          {trackingSteps.map((step, index) => (
            <View key={step.id} style={styles.stepContainer}>
              {/* Line Above Step */}
              {index !== 0 && <View style={styles.line} />}
              
              <View style={styles.stepCircleContainer}>
                <View
                  style={[
                    styles.stepCircle,
                    step.completed && styles.stepCircleCompleted,
                  ]}
                />
              </View>
              
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDate}>{step.date}</Text>
              </View>

              {/* Line Below Step */}
              {index !== trackingSteps.length - 1 && <View style={styles.verticalLine} />}
            </View>
          ))}
        </View>

        {/* Delivery Info */}
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryTitle}>Delivery Address</Text>
          <Text style={styles.deliveryText}>3501 Maloy Court, East Elmhurst, New York City, NY 11369</Text>
        </View>

        {/* Contact Button */}
        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.contactBtnText}>Download Invoice</Text>
        </TouchableOpacity>

      </ScrollView>

      <BottomNav />
    </>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },

  orderInfo: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  orderLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
    marginTop: 5,
  },
  orderNumber: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },

  trackingContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  stepCircleContainer: {
    width: 30,
    alignItems: "center",
  },
  stepCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginTop: 2,
  },
  stepCircleCompleted: {
    backgroundColor: "#05a845",
    borderColor: "#05a845",
  },
  verticalLine: {
    position: "absolute",
    left: 14,
    top: 16,
    height: 50,
    width: 2,
    backgroundColor: "#ccc",
  },
  line: {
    position: "absolute",
    left: 14,
    top: -20,
    height: 20,
    width: 2,
    backgroundColor: "#ccc",
  },
  stepContent: {
    marginLeft: 10,
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stepDate: {
    fontSize: 14,
    color: "#555",
  },

  deliveryInfo: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deliveryText: {
    fontSize: 14,
    color: "#555",
  },

  contactBtn: {
    backgroundColor: "#05a845",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  contactBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
