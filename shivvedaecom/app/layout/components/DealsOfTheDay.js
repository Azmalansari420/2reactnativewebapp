import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "../../assets/css/myAppStyle";

const DealsOfTheDay = () => {
  const [wishlist, setWishlist] = useState({});

  const products = [
    {
      id: 1,
      title: "Pink Hoodie t-shirt full",
      brand: "Mango",
      image: require("../../assets/images/product1.jpg"),
      priceNew: "$32.00",
      priceOld: "$35.00",
      discount: "20%"
    },
    {
      id: 2,
      title: "Blue Denim Jacket",
      brand: "Levi's",
      image: require("../../assets/images/product2.jpg"),
      priceNew: "$50.00",
      priceOld: "$60.00",
      discount: "16%"
    },
    {
      id: 3,
      title: "Black Running Shoes",
      brand: "Nike",
      image: require("../../assets/images/product3.jpg"),
      priceNew: "$75.00",
      priceOld: "$90.00",
      discount: "17%"
    },
    // add more products here if needed
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productBrand}>by {item.brand}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceNew}>{item.priceNew}</Text>
          <Text style={styles.priceOld}>{item.priceOld}</Text>
          <Text style={styles.priceOff}>{item.discount}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => toggleWishlist(item.id)}
      >
        <Text>{wishlist[item.id] ? "❤️" : "♡"}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Deals of the Day</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 10 }}
      />
    </View>
  );
};

export default DealsOfTheDay;
