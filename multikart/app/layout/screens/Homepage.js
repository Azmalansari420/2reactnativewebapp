import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styles from "../../assets/css/myAppStyle"; // ✅ अब styling यहीं से आएगी
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import FindYourStyleSection from "../components/FindYourStyleSection";
import KidsCornerSection from "../components/KidsCornerSection";
import OfferCornerSection from "../components/OfferCornerSection";
import TopBrands from "../components/TopBrands";

const categories = [
  { name: "Kids", img: require("../../assets/images/kids.png") },
  { name: "Beauty", img: require("../../assets/images/beauty.png") },
  { name: "Footwear", img: require("../../assets/images/shoes.png") },
  { name: "Jewelry", img: require("../../assets/images/jewelry.png") },
  { name: "Women", img: require("../../assets/images/women.png") },
  { name: "Men", img: require("../../assets/images/men.png") },
];


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
  // add as many products as you want
];


const Homepage = ({ navigation }) => {
  return (
    <>
    <Header navigation={navigation} />

    <ScrollView style={styles.homeContainer}>


      {/* Top Categories Slider */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.categoryItem}
            onPress={() => navigation.navigate("Category", { name: item.name })}>
            <Image source={item.img} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Banner Slider */}
      <View style={styles.bannerContainer}>
        <Swiper autoplay height={180} dotColor="#ddd" activeDotColor="#FF4D4D">
          <Image source={require("../../assets/images/slider1.jpg")} style={styles.bannerImage} />
          <Image source={require("../../assets/images/slider2.jpg")} style={styles.bannerImage} />
        </Swiper>
      </View>

      {/* Deals of the Day */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Deals of the Day</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
      </View>

      {/* Product Cards */}
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productBrand}>by {product.brand}</Text>
            <View style={styles.priceRow}>
                <Text style={styles.priceNew}>{product.priceNew}</Text>
                <Text style={styles.priceOld}>{product.priceOld}</Text>
                <Text style={styles.priceOff}>{product.discount}</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.wishlistBtn}>
            <Text>♡</Text>
            </TouchableOpacity>
        </View>
        ))}

        {/* sale section */}
        
        <FindYourStyleSection/>
        <TopBrands />
        <KidsCornerSection />
        <OfferCornerSection />

        



    </ScrollView>
    <BottomNav />
    </>
  );
};

export default Homepage;
