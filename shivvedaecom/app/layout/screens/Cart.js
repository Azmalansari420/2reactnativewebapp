import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet, FlatList, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const productsInCart = [
  { id: 1, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, size: "S", qty: 1, image: require("../../assets/images/products/1.jpg") },
  { id: 2, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, size: "S", qty: 1, image: require("../../assets/images/products/2.jpg") },
  { id: 3, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, size: "S", qty: 1, image: require("../../assets/images/products/3.jpg") },
];

const recommendedProducts = [
  { id: 1, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/9.jpg") },
  { id: 2, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/10.jpg") },
  { id: 3, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/2.jpg") },
];

const Cart = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container}>
        {/* Cart Items */}
        {productsInCart.map((item) => (
          <View key={item.id} style={styles.cartBox}>
            <Image source={item.image} style={styles.cartImg} />
            <View style={styles.cartContent}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.brandName}>by {item.brand}</Text>
              <Text style={styles.price}>
                ${item.price.toFixed(2)} <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text> <Text style={styles.discount}>{item.discount}%</Text>
              </Text>
              <View style={styles.optionRow}>
                <Text style={styles.optionText}>Qty: {item.qty}</Text>
                <Text style={styles.optionText}>Size: {item.size}</Text>
              </View>
              <View style={styles.actionRow}>
                <TouchableOpacity>
                  <Text style={styles.actionText}>Move to Wishlist</Text>
                </TouchableOpacity>
                <Text style={styles.divider}>|</Text>
                <TouchableOpacity>
                  <Text style={styles.actionText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Coupons */}
        <View style={styles.couponSection}>
          <Text style={styles.sectionTitle}>Coupons:</Text>
          <View style={styles.couponInputContainer}>
            <TextInput placeholder="Apply Coupons" style={styles.couponInput} />
          </View>
        </View>

        {/* Order Details */}
        <View style={styles.orderDetails}>
          <Text style={styles.sectionTitle}>Order Details:</Text>
          <View style={styles.detailRow}><Text>Bag total</Text><Text>$220.00</Text></View>
          <View style={styles.detailRow}><Text>Bag savings</Text><Text style={styles.textGreen}>-$20.00</Text></View>
          <View style={styles.detailRow}><Text>Coupon Discount</Text><Text>Apply Coupon</Text></View>
          <View style={styles.detailRow}><Text>Delivery</Text><Text>$50.00</Text></View>
          <View style={styles.totalRow}><Text>Total Amount</Text><Text>$270.00</Text></View>
        </View>

        {/* Services */}
        <View style={styles.services}>
          <View style={styles.serviceItem}>
            <Image source={require("../../assets/svg/returning.png")} style={styles.serviceIcon} />
            <Text>7 Day Return</Text>
          </View>
          <View style={styles.serviceItem}>
            <Image source={require("../../assets/svg/24-hours.png")} style={styles.serviceIcon} />
            <Text>24/7 Support</Text>
          </View>
          <View style={styles.serviceItem}>
            <Image source={require("../../assets/svg/wallet.png")} style={styles.serviceIcon} />
            <Text>Secure Payment</Text>
          </View>
        </View>

        {/* Recommended Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You May Also Like</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedProducts.map((item) => (
              <View key={item.id} style={styles.recommendedBox}>
                <Image source={item.image} style={styles.recommendedImg} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.price}>
                  ${item.price.toFixed(2)} <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Cart Bar */}
      <View style={styles.cartBottom}>
        <View style={styles.leftContent}>
          <Text style={styles.totalAmount}>$270.00</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderBtn} onPress={() => navigation.navigate("Delivery")}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  cartBox: { flexDirection: "row", marginBottom: 15 },
  cartImg: { width: 100, height: 100, borderRadius: 8, marginRight: 10 },
  cartContent: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "600" },
  brandName: { fontSize: 14, color: "#888", marginBottom: 5 },
  price: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  oldPrice: { textDecorationLine: "line-through", color: "#888", marginLeft: 5 },
  discount: { color: "green", marginLeft: 5 },
  optionRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
  optionText: { fontSize: 14, color: "#555" },
  actionRow: { flexDirection: "row", alignItems: "center" },
  actionText: { color: "#05a845", fontSize: 14 },
  divider: { marginHorizontal: 5, color: "#888" },
  couponSection: { marginBottom: 15 },
  couponInputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 10 },
  couponInput: { flex: 1, height: 40 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  orderDetails: { marginBottom: 15 },
  detailRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, borderTopWidth: 1, borderColor: "#eee", paddingTop: 5 },
  textGreen: { color: "green" },
  services: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15, marginTop:15 },
  serviceItem: { alignItems: "center", width: (width - 60) / 3 },
  serviceIcon: { width: 50, height: 50, marginBottom: 5 },
  section: { marginBottom: 15 },
  recommendedBox: { width: 120, marginRight: 15 },
  recommendedImg: { width: 120, height: 120, borderRadius: 8, marginBottom: 5 },
  cartBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderTopWidth: 1, borderColor: "#eee", backgroundColor: "#fff" },
  leftContent: { flexDirection: "row", alignItems: "center" },
  totalAmount: { fontSize: 16, fontWeight: "600", marginRight: 10 },
  viewDetails: { color: "#05a845" },
  placeOrderBtn: { backgroundColor: "#05a845", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  placeOrderText: { color: "#fff", fontWeight: "600" },
});
