import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const categoryList = [
  {
    id: "1",
    title: "SALE",
    subtitle: "upto 50% off on all products",
    image: require("../../assets/images/category/sale.png"),
    gif: require("../../assets/images/sale.gif"),
  },
  {
    id: "2",
    title: "WOMEN",
    subtitle: "t-shirts, tops, bottoms..",
    image: require("../../assets/images/category/women.png"),
  },
  {
    id: "3",
    title: "MEN",
    subtitle: "jackets, jeans, denims..",
    image: require("../../assets/images/category/men.png"),
  },
  {
    id: "4",
    title: "KIDS",
    subtitle: "clothing, toys, books..",
    image: require("../../assets/images/category/kids.png"),
  },
  {
    id: "5",
    title: "BEAUTY",
    subtitle: "skincare, haircare, makeup..",
    image: require("../../assets/images/category/beauty.png"),
  },
  {
    id: "6",
    title: "FOOTWEAR",
    subtitle: "shoes, sandle, activewear..",
    image: require("../../assets/images/category/footwear.png"),
  },
  {
    id: "7",
    title: "JEWELLERY",
    subtitle: "necklace, chains, earrings..",
    image: require("../../assets/images/category/jewllery.png"),
  },
];

const Category = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryWrap} onPress={() => navigation.navigate("InnerCategory", { category: item.title })}>
      <View style={styles.contentPart}>
        {item.gif && <Image source={item.gif} style={styles.saleGif} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <View style={styles.imgPart}>
        <Image source={item.image} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container}>
        <FlatList
          data={categoryList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
        />
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryWrap: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    alignItems: "center",
    padding: 10,
  },
  contentPart: {
    flex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  saleGif: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  imgPart: {
    flex: 1,
    alignItems: "flex-end",
  },
  categoryImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
