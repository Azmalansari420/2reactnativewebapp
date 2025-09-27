import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const { width } = Dimensions.get("window");
const itemWidth = 150; // adjust for size

const productsData = [
  { id: 1, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/9.jpg"), rating: 4 },
  { id: 2, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/10.jpg"), rating: 4 },
  { id: 3, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/8.jpg"), rating: 4 },
  { id: 4, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/9.jpg"), rating: 4 },
  // add more products if needed
];

const KidsCornerSection = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.productBox}>
      <View style={styles.imgPart}>
        <Image source={item.image} style={styles.productImage} />
        <TouchableOpacity style={styles.wishlistBtn} onPress={() => toggleWishlist(item.id)}>
          <Icon name={wishlist[item.id] ? "heart" : "heart-outline"} size={20} color={wishlist[item.id] ? "#FF4D4D" : "#555"} />
        </TouchableOpacity>
      </View>
      <View style={styles.productContent}>
        <View style={styles.ratings}>
          {[1,2,3,4,5].map(i => (
            <Icon key={i} name="star" size={14} color={i <= item.rating ? "#FFD700" : "#ccc"} />
          ))}
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.price}>
          <Text style={styles.priceNew}>${item.price}</Text>
          <Text style={styles.priceOld}>${item.oldPrice}</Text>
          <Text style={styles.discount}>{item.discount}%</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>The Kids Corner</Text>
        <Text style={styles.subtitle}>Clothing for your Li’l One’s</Text>
      </View>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </View>
  );
};

export default KidsCornerSection;


const styles = StyleSheet.create({

    container: { padding: 15 },
    
//     kidsContainer: {
//   marginVertical: 15,
// },
titleSection: {
  marginBottom: 10,
},
title: { fontSize: 20, fontWeight: "bold", color: "#000" },
subtitle: { fontSize: 14, color: "#FF4D4D", marginTop: 2 },

productBox: {
  width: 150,
  marginRight: 10,
  backgroundColor: "#fff",
  borderRadius: 8,
  paddingBottom: 10,
  overflow: "hidden",
  elevation: 2,
},
imgPart: {
  position: "relative",
  width: "100%",
  height: 150,
},
productImage: {
  width: "100%",
  height: "100%",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  resizeMode: "cover",
},
wishlistBtn: {
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: 4,
  elevation: 2,
},
productContent: {
  paddingHorizontal: 8,
  paddingTop: 5,
},
ratings: { flexDirection: "row", marginBottom: 4 },
productName: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
price: { flexDirection: "row", alignItems: "center" },
priceNew: { fontWeight: "bold", color: "#FF4D4D", marginRight: 5 },
priceOld: { textDecorationLine: "line-through", color: "#888", marginRight: 5, fontSize: 12 },
discount: { color: "#28a745", fontSize: 12, fontWeight: "bold" },
});
