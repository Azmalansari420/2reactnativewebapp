import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

// Sample data
const addressesData = [
  { id: 1, name: "John Doe", phone: "+91 9876543210", address: "123, MG Road, New Delhi, India - 110001", default: true },
  { id: 2, name: "Jane Smith", phone: "+91 9123456780", address: "456, Ring Road, Delhi, India - 110002", default: false },
];

const expectedDeliveryProducts = [
  { id: 1, name: "Pink Hoodie T-shirt Full", image: require("../../assets/images/products/1.jpg"), deliveryDate: "25th July" },
  { id: 2, name: "Men Blue Denim Jacket", image: require("../../assets/images/products/2.jpg"), deliveryDate: "25th July" },
];

const Delivery = ({ navigation }) => {
  const [totalAmount] = useState(270);

  const renderProduct = ({ item }) => (
    <View style={styles.productInline}>
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>
      <View style={styles.productInlineContent}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
          <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.deliveryText}>
          Delivery by <Text style={styles.deliveryDate}>{item.deliveryDate}</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }} nestedScrollEnabled={true}>
        {/* Delivery Addresses */}
        <Text style={styles.pageTitle}>Delivery Address</Text>
        {addressesData.map((addr) => (
          <View key={addr.id} style={[styles.addressCard, addr.default && styles.defaultAddress]}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{addr.name}</Text>
              <Text style={styles.phone}>{addr.phone}</Text>
              <Text style={styles.addressText}>{addr.address}</Text>
            </View>
            {addr.default && <Text style={styles.defaultBadge}>Default</Text>}
          </View>
        ))}
        <TouchableOpacity
          style={styles.addAddressBtn}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Text style={styles.addAddressText}>+ Add New Address</Text>
        </TouchableOpacity>

        {/* Expected Delivery */}
        <Text style={[styles.pageTitle, { marginTop: 20 }]}>Expected Delivery</Text>
        <FlatList
          data={expectedDeliveryProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          scrollEnabled={false} 
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>

      {/* Bottom Cart Panel */}
      <View style={styles.deliveryCart}>
        <View style={styles.cartContent}>
          <View style={styles.leftContent}>
            <Text style={styles.totalAmount}>${totalAmount}.00</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CartDetails")}>
              <Text style={styles.viewDetails}>View details</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text style={styles.proceedText}>Proceed to payment</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomNav />
    </>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 },
  pageTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 15 },
  addressCard: { backgroundColor: "#fff", borderRadius: 10, padding: 15, marginBottom: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", elevation: 2 },
  defaultAddress: { borderWidth: 1, borderColor: "#05a845" },
  name: { fontSize: 16, fontWeight: "bold" },
  phone: { fontSize: 14, color: "#555", marginVertical: 2 },
  addressText: { fontSize: 14, color: "#777" },
  defaultBadge: { backgroundColor: "#05a845", color: "#fff", paddingVertical: 3, paddingHorizontal: 8, borderRadius: 15, fontSize: 12, overflow: "hidden" },
  addAddressBtn: { backgroundColor: "#05a845", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  addAddressText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  productInline: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 10, marginBottom: 15, padding: 10, alignItems: "center" },
  productImage: { width: 80, height: 80, borderRadius: 10, resizeMode: "cover" },
  productInlineContent: { flex: 1, marginLeft: 10 },
  productName: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  deliveryText: { fontSize: 14, color: "#555" },
  deliveryDate: { fontWeight: "bold", color: "#05a845" },

  deliveryCart: { position: "absolute", bottom: 60, width: "100%", backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#ccc", paddingVertical: 10, paddingHorizontal: 15, elevation: 5 },
  cartContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  leftContent: { flexDirection: "column" },
  totalAmount: { fontSize: 18, fontWeight: "bold" },
  viewDetails: { fontSize: 14, color: "#05a845", marginTop: 3 },
  proceedBtn: { backgroundColor: "#05a845", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  proceedText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
