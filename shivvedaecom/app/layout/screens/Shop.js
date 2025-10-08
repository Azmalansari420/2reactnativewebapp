import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

// Sample product list
const products = [
  { id: "1", name: "Blue Denim Jacket", price: 32, oldPrice: 35, discount: 20, image: require("../../assets/images/products/1.jpg"), label: "new", rating: 4, brand: "Here & Now" },
  { id: "2", name: "Blue Denim Jacket", price: 52, oldPrice: 60, discount: 15, image: require("../../assets/images/products/2.jpg"), rating: 5, brand: "Zara" },
  { id: "3", name: "Blue Denim Jacket", price: 28, oldPrice: 35, discount: 10, image: require("../../assets/images/products/3.jpg"), rating: 3, brand: "Mast & Harbour" },
  { id: "4", name: "Blue Denim Jacket", price: 75, oldPrice: 85, discount: 12, image: require("../../assets/images/products/4.jpg"), rating: 4, brand: "Gucci" },
];

// Filter options
const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Popularity", value: "popularity" },
  { label: "What's New", value: "new" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Customer rating", value: "rating" },
];

const BRANDS = [
  "Here & Now",
  "Zara",
  "Mast & Harbour",
  "Tokyo talkies",
  "Vogue",
  "Gucci",
];

const SIZES = ["Small", "Medium", "Large", "XL", "2XL"];

const OCCASIONS = [
  "Casual",
  "Sports",
  "Beach wear",
  "Lounge wear",
  "Formal",
  "Party",
];

const COLOR_SWATCHES = [
  { key: "light-purple", hex: "#C3A6FF" },
  { key: "light-grey", hex: "#CFCFCF" },
  { key: "blue-purple", hex: "#6C8CFF" },
  { key: "light-orange", hex: "#FFC38B" },
  { key: "dark-pink", hex: "#FF5C8A" },
  { key: "green-blue", hex: "#3CC7A6" },
  { key: "green", hex: "#4CAF50" },
  { key: "blue", hex: "#2196F3" },
  { key: "yellow", hex: "#FFEB3B" },
  { key: "light-red", hex: "#FF8A80" },
  { key: "light-purple2", hex: "#E1C7FF" },
];

const Shop = ({ navigation }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Filters state
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState(["Here & Now"]);
    const [selectedOccasions, setSelectedOccasions] = useState([]);
    const [selectedColors, setSelectedColors] = useState(["light-grey"]);


  // Stars renderer
  const renderStars = (rating) => {

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={{ color: i <= rating ? "#f5c518" : "#ccc" }}>★</Text>
      );
    }
    return stars;
  };

  // Toggle helpers
 const toggleFromArray = (arr, value, setFn) => {
    if (arr.includes(value)) {
      setFn(arr.filter((v) => v !== value));
    } else {
      setFn([...arr, value]);
    }
  };

  // Filtering + sorting (simple demo: filters only brand & text here; sizes/occasions/colors are collected but not applied to products since sample data lacks those fields)
  const filteredAndSortedProducts = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }

    switch (sortBy) {
      case "price_asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        list = [...list].sort((a, b) => (b.label === "new" ? 1 : 0) - (a.label === "new" ? 1 : 0));
        break;
      case "popularity":
        // demo: treat rating as a proxy for popularity
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // recommended: keep original
    }
    return list;
  }, [searchText, sortBy, selectedBrands]);

  const renderItem = ({ item }) => (
    <View style={styles.productBox}>
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { product: item })}>
        <View style={styles.imgPart}>
          <Image source={item.image} style={styles.productImage} />
          {item.label && (
            <View style={styles.label}>
              <Text style={styles.labelText}>{item.label}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.wishlistBtn}>
            <Text style={{ fontSize: 18 }}>♡</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productContent}>
          <View style={styles.ratings}>{renderStars(item.rating)}</View>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.price}>
            ${item.price.toFixed(2)}{" "}
            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>{" "}
            <Text style={styles.discount}>{item.discount}%</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const onReset = () => {
    setSortBy("recommended");
    setSelectedBrands(["Here & Now"]);
    setSelectedSizes([]);
    setSelectedOccasions([]);
    setSelectedColors(["light-grey"]);
  };

  return (
    <>
      <Header navigation={navigation} />

      {/* Search + Filter Section */}
      <View style={styles.searchPanel}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchIconWrapper}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraIconWrapper}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
          <Text style={{ fontSize: 22 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <ScrollView style={styles.container}>
        <FlatList
          data={filteredAndSortedProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ padding: 10 }}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 15 }}
        />
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filters</Text>
            <TouchableOpacity onPress={() => setFilterVisible(false)}>
              <Text style={{ fontSize: 22 }}>✖️</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalBody}>
            {/* Sort By (Dropdown) */}
            <View style={styles.filterBox}>
              <Text style={styles.filterTitle}>Sort By:</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={sortBy}
                  onValueChange={(v) => setSortBy(v)}
                  style={styles.picker}
                  dropdownIconColor="#666"
                >
                  {SORT_OPTIONS.map((o) => (
                    <Picker.Item label={o.label} value={o.value} key={o.value} />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Brand: 2-column chips */}
            <View style={styles.filterBox}>
              <Text style={styles.filterTitle}>Brand:</Text>
              <View style={styles.brandGrid}>
                {BRANDS.map((b) => {
                  const active = selectedBrands.includes(b);
                  return (
                    <TouchableOpacity
                      key={b}
                      style={[styles.brandChip, active && styles.brandChipActive]}
                      onPress={() => toggleFromArray(selectedBrands, b, setSelectedBrands)}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.brandChipText, active && styles.brandChipTextActive]}>
                        {b}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Size: 3-column buttons with active state */}
            <View style={styles.filterBox}>
              <Text style={styles.filterTitle}>Size:</Text>
              <View style={styles.sizeGrid}>
                {SIZES.map((s) => {
                  const active = selectedSizes.includes(s);
                  return (
                    <TouchableOpacity
                      key={s}
                      style={[styles.sizeBtn, active && styles.sizeBtnActive]}
                      onPress={() => toggleFromArray(selectedSizes, s, setSelectedSizes)}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.sizeBtnText, active && styles.sizeBtnTextActive]}>
                        {s}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Occasion: 2-column boxes */}
            <View style={styles.filterBox}>
              <Text style={styles.filterTitle}>Occasion:</Text>
              <View style={styles.occasionGrid}>
                {OCCASIONS.map((o) => {
                  const active = selectedOccasions.includes(o);
                  return (
                    <TouchableOpacity
                      key={o}
                      style={[styles.occItem, active && styles.occItemActive]}
                      onPress={() => toggleFromArray(selectedOccasions, o, setSelectedOccasions)}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.occText, active && styles.occTextActive]}>{o}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Colors: swatches */}
            <View style={styles.filterBox}>
              <Text style={styles.filterTitle}>Colors:</Text>
              <View style={styles.colorRow}>
                {COLOR_SWATCHES.map((c) => {
                  const active = selectedColors.includes(c.key);
                  return (
                    <TouchableOpacity
                      key={c.key}
                      style={[
                        styles.colorBox,
                        { backgroundColor: c.hex },
                        active && styles.colorBoxActive,
                      ]}
                      onPress={() => toggleFromArray(selectedColors, c.key, setSelectedColors)}
                      activeOpacity={0.9}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View style={styles.modalFooter}>
            <TouchableOpacity onPress={onReset}>
              <Text style={styles.resetLink}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilterVisible(false)}>
              <Text style={styles.applyBtn}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BottomNav />
    </>
  );
};

export default Shop;

const GRID_GAP = 10;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Product card
  productBox: {
    width: (width - 30) / 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  imgPart: {
    position: "relative",
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
  },
  productImage: { width: "100%", height: "100%", resizeMode: "cover" },
  wishlistBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 8,
    elevation: 3,
  },
  label: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff3e6c",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  labelText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  productContent: { padding: 10 },
  ratings: { flexDirection: "row", marginBottom: 5 },
  productName: { fontSize: 14, fontWeight: "600", marginBottom: 5 },
  price: { fontSize: 14, fontWeight: "700", color: "#333" },
  oldPrice: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "line-through",
    marginLeft: 5,
    color: "#999",
  },
  discount: { fontSize: 12, fontWeight: "700", color: "#ff3e6c", marginLeft: 5 },

  // Search panel
  searchPanel: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchBarWrapper: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    height: 45,
    paddingHorizontal: 50,
  },
  searchInput: { flex: 1, fontSize: 14, color: "#333", height: "100%" },
  searchIconWrapper: { position: "absolute", left: 15, justifyContent: "center", alignItems: "center" },
  searchIcon: { fontSize: 18, color: "#999" },
  cameraIconWrapper: { position: "absolute", right: 15, justifyContent: "center", alignItems: "center" },
  cameraIcon: { fontSize: 18, color: "#999" },
  filterBtn: {
    marginLeft: 10,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Modal
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fafafa",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  modalBody: {
    padding: 15,
  },
  filterBox: {
    marginBottom: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  filterTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fafafa",
  },
  resetLink: {
    color: "#777",
    fontWeight: "700",
    fontSize: 14,
  },
  applyBtn: {
    backgroundColor: "#ff3e6c",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    fontWeight: "700",
    fontSize: 14,
  },

  // Picker (dropdown)
  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 44,
  },

  // Brand grid (2 columns)
  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
  },
  brandChip: {
    width: (width - 15 * 2 - GRID_GAP) / 2 - GRID_GAP, // two columns inside padded box
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    backgroundColor: "#fff",
  },
  brandChipActive: {
    borderColor: "#ff3e6c",
    backgroundColor: "#ffe9f0",
  },
  brandChipText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
    fontSize: 13,
  },
  brandChipTextActive: {
    color: "#ff3e6c",
  },

  // Size grid (3 columns)
  sizeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
  },
  sizeBtn: {
    width: (width - 15 * 2 - GRID_GAP * 2) / 3 - GRID_GAP / 3,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    alignItems: "center",
  },
  sizeBtnActive: {
    borderColor: "#ff3e6c",
    backgroundColor: "#ffe9f0",
  },
  sizeBtnText: {
    fontWeight: "600",
    color: "#333",
    fontSize: 13,
  },
  sizeBtnTextActive: {
    color: "#ff3e6c",
  },

  // Occasion grid (2 columns)
  occasionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
  },
  occItem: {
    width: (width - 15 * 2 - GRID_GAP) / 2 - GRID_GAP,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    alignItems: "center",
  },
  occItemActive: {
    borderColor: "#ff3e6c",
    backgroundColor: "#ffe9f0",
  },
  occText: {
    fontWeight: "600",
    color: "#333",
    fontSize: 13,
    textTransform: "capitalize",
  },
  occTextActive: {
    color: "#ff3e6c",
  },

  // Colors
  colorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
  colorBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "transparent",
  },
  colorBoxActive: {
    borderColor: "#ff3e6c",
  },
});
