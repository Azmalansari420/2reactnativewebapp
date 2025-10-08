import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // make sure you have react-native-vector-icons installed
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const numColumns = 2; // or 3, 4, etc.
const itemWidth = (width - 15 * 2 - 10 * (numColumns - 1)) / numColumns;


const tabsData = ["Trending Now", "Top Picks", "Featured Products", "Top Rated", "Ready to ship"];

const productsData = {
  "Trending Now": [
    { id: 1, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/4.jpg") },
    { id: 2, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/5.jpg") },
    { id: 3, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/6.jpg") },
    { id: 6, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/7.jpg") },
  ],
  "Top Picks": [
    { id: 4, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/6.jpg") },
    { id: 5, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/7.jpg") },
  ],
  "Featured Products": [
    { id: 6, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/7.jpg") },
    { id: 7, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/4.jpg") },
  ],
  "Top Rated": [
    { id: 8, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/5.jpg") },
    { id: 9, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/4.jpg") },
  ],
  "Ready to ship": [
    { id: 10, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/4.jpg") },
    { id: 11, name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/6.jpg") },
  ],
};

const FindYourStyleSection = () => {
   const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Trending Now");
  const [wishlist, setWishlist] = useState({}); // to track liked products

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
                
                style={styles.productBox}
                onPress={() => navigation.navigate("ProductDetail")} // <-- Pass product data if needed
              >
  
      <Image source={item.image} style={styles.productImage} />

      {/* Wishlist Button */}
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => toggleWishlist(item.id)}
      >
        <Icon
          name={wishlist[item.id] ? "heart" : "heart-outline"}
          size={22}
          color={wishlist[item.id] ? "#FF4D4D" : "#555"}
        />
      </TouchableOpacity>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>
        ${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text>{" "}
        <Text style={styles.discount}>{item.discount}%</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Find your Style</Text>
        <Text style={styles.subtitle}>Super Summer Sale</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabsData.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
  data={productsData[activeTab]}
  renderItem={renderProduct}
  keyExtractor={(item) => item.id.toString()}
  numColumns={numColumns}
  columnWrapperStyle={styles.columnWrapper}
  contentContainerStyle={{ paddingBottom: 20 }}
  scrollEnabled={false}  // <-- ye add karo
/>


    </View>
  );
};

export default FindYourStyleSection;

const styles = StyleSheet.create({
  container: { padding: 15 },
  titleSection: { marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "#FF4D4D" },
  tabsContainer: { marginVertical: 10 },
  tabButton: { marginRight: 15, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, backgroundColor: "#f0f0f0" },
  activeTabButton: { backgroundColor: "#FF4D4D" },
  tabText: { fontSize: 14, color: "#555" },
  activeTabText: { color: "#fff", fontWeight: "bold" },
productBox: { 
  width: itemWidth,           // fixed width instead of flex:1
  margin: 5, 
  backgroundColor: "#fff", 
  borderRadius: 8, 
  padding: 10, 
  alignItems: "center",
  position: "relative",       // keeps wishlist button relative to box
},
 productImage: { 
  width: itemWidth, 
  height: itemWidth, 
  borderRadius: 8, 
  resizeMode: "cover" 
},

  wishlistBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 20,
    zIndex: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productName: { marginTop: 8, fontSize: 14, fontWeight: "bold", textAlign: "center" },
  productPrice: { marginTop: 4, fontSize: 13, color: "#FF4D4D" },
  oldPrice: { textDecorationLine: "line-through", color: "#999", fontSize: 12 },
  discount: { fontSize: 12, color: "#28a745" },
  columnWrapper: { justifyContent: "space-between" },
});
