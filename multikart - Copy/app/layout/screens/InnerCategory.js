import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const InnerCategory = ({ navigation }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    { title: "Fusion Wear", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Western Wear", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Lingerie & Sleepwear", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Footwear", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Sports & Active Wear", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Beauty & Personal Care", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Jewellery", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Gadgets", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
    { title: "Plus Size", items: ["maxi dresses","skirts","crop tops","tunics","halter tops","spaghetti kurtas","capes","fusion gowns","Nightwear","Handbags"] },
  ];

  const innerCategories = [
    { title: "Flowerprint", image: require("../../assets/images/category/flowerprint.png") },
    { title: "Denim", image: require("../../assets/images/category/denim.png") },
    { title: "Skirts", image: require("../../assets/images/category/skirts.png") },
  ];

  const brands = [
    require("../../assets/images/brand-logos/1.png"),
    require("../../assets/images/brand-logos/2.png"),
    require("../../assets/images/brand-logos/3.png"),
    require("../../assets/images/brand-logos/4.png"),
    require("../../assets/images/brand-logos/5.png"),
    require("../../assets/images/brand-logos/6.png"),
  ];

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Category Listing */}
        <TouchableOpacity style={styles.categoryListing} onPress={() => navigation.navigate("Shop")}>
          <View style={styles.contentPart}>
            <Text style={styles.categoryTitle}>WOMEN</Text>
            <Text style={styles.categorySubtitle}>t-shirts, tops, bottoms..</Text>
          </View>
          <Image source={require("../../assets/images/category/women.png")} style={styles.categoryImage} />
        </TouchableOpacity>

        {/* Accordion Menu */}
        <View style={styles.accordion}>
          {accordionData.map((item, index) => (
            <View key={index} style={styles.accordionItem}>
              <TouchableOpacity
                style={styles.accordionHeader}
                onPress={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <Text style={styles.accordionTitle}>{item.title}</Text>
                <Icon
                  name={activeAccordion === index ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="#333"
                />
              </TouchableOpacity>
              {activeAccordion === index && (
                <View style={styles.accordionBody}>
                  {item.items.map((subItem, subIndex) => (
                    <TouchableOpacity key={subIndex} onPress={() => navigation.navigate("Shop")}>
                      <Text style={styles.accordionText}>{subItem}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Inner Categories */}
        <View style={styles.innerCategory}>
          {innerCategories.map((cat, index) => (
            <TouchableOpacity key={index} style={styles.innerCategoryItem} onPress={() => navigation.navigate("Shop")}>
              <Image source={cat.image} style={styles.innerCategoryImage} />
              <Text style={styles.innerCategoryTitle}>{cat.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Brands Section */}
        <View style={styles.brandSection}>
          <Text style={styles.brandTitle}>Biggest Deals on Top Brands</Text>
          <View style={styles.brandRow}>
            {brands.map((brand, index) => (
              <TouchableOpacity key={index} style={styles.brandBox}>
                <Image source={brand} style={styles.brandImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </>
  );
};

export default InnerCategory;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Category Listing
  categoryListing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  contentPart: { flex: 1 },
  categoryTitle: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
  categorySubtitle: { fontSize: 14, color: "#555" },
  categoryImage: { width: 80, height: 80, resizeMode: "contain", marginLeft: 10 },

  // Accordion Menu
  accordion: { marginHorizontal: 15, marginTop: 8 },
  accordionItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 2,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  accordionTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  accordionBody: { paddingHorizontal: 15, paddingBottom: 10, backgroundColor: "#fff" },
  accordionText: {
    fontSize: 14,
    color: "#555",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  // Inner Categories Grid
  innerCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    marginTop: 20,
    justifyContent: "space-between",
  },
  innerCategoryItem: { width: (width - 60) / 3, alignItems: "center", marginBottom: 20 },
  innerCategoryImage: { width: "100%", height: 80, resizeMode: "contain", borderRadius: 10 },
  innerCategoryTitle: { marginTop: 5, fontSize: 14, fontWeight: "500", textAlign: "center" },

  // Brands Section
  brandSection: { marginHorizontal: 15, marginTop: 20 },
  brandTitle: { fontSize: 18, fontWeight: "700", marginBottom: 15 },
  brandRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  brandBox: { width: (width - 60) / 3, marginBottom: 15, alignItems: "center" },
  brandImage: { width: "100%", height: 60, resizeMode: "contain" },
});
