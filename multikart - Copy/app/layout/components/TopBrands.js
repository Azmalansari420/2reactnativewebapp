import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const topbrands = [
  { name: "Nike", img: require("../../assets/images/brand-logos/1.png") },
  { name: "Addidas", img: require("../../assets/images/brand-logos/2.png") },
  { name: "cobe", img: require("../../assets/images/brand-logos/3.png") },
  { name: "nikkon", img: require("../../assets/images/brand-logos/4.png") },
  { name: "puma", img: require("../../assets/images/brand-logos/5.png") },
  { name: "jordden", img: require("../../assets/images/brand-logos/6.png") },
];

const TopBrands = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Biggest Deals on Top Brands</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {topbrands.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.item}
            onPress={() => navigation.navigate("Category", { name: item.name })}
          >
            <Image source={item.img} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopBrands;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  scroll: {
    paddingLeft: 15,
    paddingVertical: 5,
  },
  item: {
    marginRight: 15,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 1, // subtle shadow
  },
});
