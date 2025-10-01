import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const products = [
  { id: 1, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/1.jpg") },
  { id: 2, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/2.jpg") },
  { id: 3, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/3.jpg") },
  { id: 4, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/4.jpg") },
  { id: 5, name: "Pink Hoodie t-shirt full", brand: "Mango", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/5.jpg") },
];

const Wishlist = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container}>
        {products.map(product => (
          <View key={product.id}>
            <View style={styles.cartBox}>
              <TouchableOpacity style={styles.cartImg}>
                <Image source={product.image} style={styles.productImage} />
              </TouchableOpacity>

              <View style={styles.cartContent}>
                <TouchableOpacity>
                  <Text style={styles.productName}>{product.name}</Text>
                </TouchableOpacity>
                <Text style={styles.brandName}>by {product.brand}</Text>

                <View style={styles.priceBox}>
                  <Text style={styles.price}>
                    ${product.price.toFixed(2)}{" "}
                    <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
                    <Text style={styles.discount}> {product.discount}%</Text>
                  </Text>
                </View>

                <View style={styles.cartOption}>
                  <TouchableOpacity style={styles.optionBtn}>
                    <Text style={styles.optionText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <Text style={styles.divider}>|</Text>
                  <TouchableOpacity style={styles.optionBtn}>
                    <Text style={styles.optionText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cartBox: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 2,
  },
  cartImg: {
    marginRight: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cartContent: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  brandName: {
    fontSize: 14,
    color: "#888",
    marginVertical: 2,
  },
  priceBox: {
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#888",
  },
  discount: {
    fontSize: 14,
    color: "green",
  },
  cartOption: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  optionBtn: {
    paddingVertical: 4,
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 15,
    marginVertical: 5,
  },
});
