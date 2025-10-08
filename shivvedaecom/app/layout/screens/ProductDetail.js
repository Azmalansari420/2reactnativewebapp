import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper"; // <-- Swiper
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const productImages = [
  { id: '1', src: require('../../assets/images/full-img/1.jpg') },
  { id: '2', src: require('../../assets/images/full-img/2.jpg') },
];

const similarProducts = [
  { id: "1", image: require("../../assets/images/products/9.jpg"), name: "Blue Denim Jacket", price: "$32.00", oldPrice: "$35.00" },
  { id: "2", image: require("../../assets/images/products/10.jpg"), name: "Blue Denim Jacket", price: "$32.00", oldPrice: "$35.00" },
  { id: "3", image: require("../../assets/images/products/8.jpg"), name: "Blue Denim Jacket", price: "$32.00", oldPrice: "$35.00" },
];

const ProductDetail = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView style={styles.container}>

        {/* Swiper Image Slider */}
        <View style={{ height: width }}>
          <Swiper
            showsPagination
            autoplay
            loop
            dotStyle={{ backgroundColor: "#ccc" }}
            activeDotStyle={{ backgroundColor: "#0a84ff" }}
          >
            {productImages.map((item) => (
              <Image key={item.id} source={item.src} style={styles.productImage} />
            ))}
          </Swiper>
        </View>

        {/* Product Info */}
        <View style={styles.detailBox}>
          <Text style={styles.productTitle}>Floral Print Skirt with White Top</Text>
          <Text style={styles.productSubtitle}>
            Black, off-white and peach-coloured printed flared skirt, has zip closure, attached lining
          </Text>
          <Text style={styles.price}>
            $32.00 <Text style={styles.oldPrice}>$35.00</Text> <Text style={styles.discount}>(20% off)</Text>
          </Text>
          <Text style={styles.taxInfo}>Inclusive of all taxes</Text>
        </View>

        {/* Size Selector */}
        <View style={styles.selectorBox}>
          <Text style={styles.selectorTitle}>Select Size:</Text>
          <View style={styles.selectorRow}>
            {["S", "M", "L", "XL"].map((size, i) => (
              <TouchableOpacity key={i} style={size === "XL" ? styles.sizeDisabled : styles.sizeButton}>
                <Text style={size === "XL" ? styles.sizeDisabledText : styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Color Selector */}
        <View style={styles.selectorBox}>
          <Text style={styles.selectorTitle}>Select Color:</Text>
          <View style={styles.selectorRow}>
            {["#D8B4FE","#E5E7EB","#7C3AED","#FCD34D"].map((color, i) => (
              <TouchableOpacity key={i} style={[styles.colorBox, { backgroundColor: color }]} />
            ))}
          </View>
        </View>

        {/* Quantity */}
        <View style={styles.selectorBox}>
          <Text style={styles.selectorTitle}>Quantity:</Text>
          <View style={styles.qtyRow}>
            <TouchableOpacity onPress={decrement} style={styles.qtyBtn}><Text>-</Text></TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity onPress={increment} style={styles.qtyBtn}><Text>+</Text></TouchableOpacity>
          </View>
        </View>

        {/* Offers */}
        <View style={styles.detailBox}>
          <Text style={styles.sectionTitle}>Offers for You</Text>
          <Text>Use code MULTIKART10 to get flat 10% off</Text>
          <Text style={styles.offerDesc}>Offer valid for first time users only</Text>
        </View>

        {/* Product Details */}
        <View style={styles.detailBox}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <Text>Black, off-white and peach-coloured printed flared skirt, has zip closure, attached lining</Text>
          <Text style={styles.sectionTitle}>Model Size & Fit</Text>
          <Text>The model (height 5'8") is wearing a size 28</Text>
          <Text style={styles.sectionTitle}>Material & Care</Text>
          <Text>100% polyester, Machine-wash</Text>
          <Text style={styles.sectionTitle}>Product Code</Text>
          <Text>460356366_floral</Text>
        </View>

        {/* Reviews */}
        

        

        {/* Similar Products */}
        <View style={styles.detailBox}>
          <Text style={styles.sectionTitle}>Similar Products</Text>
          <FlatList
            data={similarProducts}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.similarBox}>
                <Image source={item.image} style={styles.similarImage} />
                <Text>{item.name}</Text>
                <Text>{item.price} <Text style={styles.oldPrice}>{item.oldPrice}</Text></Text>
              </View>
            )}
          />
        </View>

      </ScrollView>

      {/* Fixed Panel */}
      <View style={styles.fixedPanel}>
        <TouchableOpacity style={styles.panelBtn}><Text>WISHLIST</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.panelBtn, {backgroundColor:"#0a84ff"}]}><Text style={{color:"#fff"}}>ADD TO BAG</Text></TouchableOpacity>
      </View>

      <BottomNav />
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#fff" },
  productImage: { width, height: width, resizeMode:"cover" },
  detailBox: { padding:15, backgroundColor:"#fff" },
  productTitle: { fontSize:20, fontWeight:"bold", marginBottom:5 },
  productSubtitle: { color:"#6b7280", marginBottom:5 },
  price: { fontSize:18, fontWeight:"bold", marginVertical:5 },
  oldPrice: { textDecorationLine:"line-through", color:"#6b7280", fontSize:14 },
  discount: { color:"green", fontSize:14 },
  taxInfo: { color:"green", marginBottom:10 },
  selectorBox: { paddingHorizontal:15, marginBottom:15 },
  selectorTitle: { fontWeight:"bold", marginBottom:5 },
  selectorRow: { flexDirection:"row", flexWrap:"wrap", gap:10 },
  sizeButton: { borderWidth:1, borderColor:"#6b7280", paddingVertical:8, paddingHorizontal:15, borderRadius:4, marginRight:5 },
  sizeText: { color:"#000" },
  sizeDisabled: { borderWidth:1, borderColor:"#ccc", paddingVertical:8, paddingHorizontal:15, borderRadius:4, backgroundColor:"#f3f3f3", marginRight:5 },
  sizeDisabledText: { color:"#ccc" },
  colorBox: { width:30, height:30, borderRadius:15, marginRight:10, borderWidth:1, borderColor:"#ccc" },
  qtyRow: { flexDirection:"row", alignItems:"center", marginTop:5 },
  qtyBtn: { borderWidth:1, borderColor:"#ccc", paddingHorizontal:12, paddingVertical:6, borderRadius:4 },
  qtyValue: { marginHorizontal:15, fontSize:16 },
  sectionTitle: { fontWeight:"bold", marginBottom:5, marginTop:10 },
  review: { flexDirection:"row", marginVertical:10 },
  reviewAvatar: { width:50, height:50, borderRadius:25, marginRight:10 },
  input: { borderWidth:1, borderColor:"#ccc", padding:8, borderRadius:4, marginBottom:5 },
  checkBtn: { backgroundColor:"#0a84ff", padding:10, borderRadius:4, alignItems:"center", marginBottom:10 },
  similarBox: { width:120, marginRight:10, alignItems:"center",paddingBottom:50 },
  similarImage: { width:100, height:100, resizeMode:"cover", borderRadius:8 },
  fixedPanel: { flexDirection:"row", position:"absolute", bottom:60, width:"100%", borderTopWidth:1, borderColor:"#ccc"},
  panelBtn: { flex:1, padding:15, alignItems:"center", justifyContent:"center", backgroundColor:"#f3f3f3" },
  offerDesc: { color:"#6b7280", fontSize:12, marginTop:2 },
});
