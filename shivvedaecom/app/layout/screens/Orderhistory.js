import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const Orderhistory = ({ navigation }) => {
  // Sample orders data
  const orders = [
    {
      id: 1,
      orderNo: "64484032",
      date: "12 Aug 2025",
      status: "Delivered",
      items: [
        { name: "Pink Hoodie T-shirt", qty: 1, price: 32, image: require("../../assets/images/products/1.jpg") },
        { name: "Blue Denim Jacket", qty: 1, price: 32, image: require("../../assets/images/products/2.jpg") },
      ],
      total: 270,
    },
    {
      id: 2,
      orderNo: "64484033",
      date: "15 Aug 2025",
      status: "Shipped",
      items: [
        { name: "Men Jacket", qty: 1, price: 50, image: require("../../assets/images/products/3.jpg") },
      ],
      total: 50,
    },
  ];

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.pageTitle}>Order History</Text>

        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderNo}>Order #{order.orderNo}</Text>
              <Text style={[styles.orderStatus, order.status === "Delivered" ? styles.delivered : styles.pending]}>
                {order.status}
              </Text>
            </View>
            <Text style={styles.orderDate}>{order.date}</Text>

            {/* Items */}
            {order.items.map((item, index) => (
              <View key={index} style={styles.itemRow}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQty}>Qty: {item.qty}</Text>
                </View>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
            ))}

            {/* Total & View Details */}
            <View style={styles.orderFooter}>
              <Text style={styles.totalAmount}>Total: ${order.total}</Text>
              <TouchableOpacity
                style={styles.detailsBtn}
                onPress={() => navigation.navigate("OrderDetail", { orderId: order.id })}
              >
                <Text style={styles.detailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Orderhistory;

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
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderNo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    overflow: "hidden",
    color: "#fff",
  },
  delivered: {
    backgroundColor: "#28a745",
  },
  pending: {
    backgroundColor: "#ffc107",
  },
  orderDate: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: "cover",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemQty: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsBtn: {
    backgroundColor: "#05a845",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  detailsText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
