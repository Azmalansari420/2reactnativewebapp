import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const offers = [
  { id: 1, title: "Under $50.00" },
  { id: 2, title: "Flat $20 OFF" },
  { id: 3, title: "Buy 1 Get 1" },
  { id: 4, title: "Upto 50% OFF" },
];

const OfferCornerSection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offer Corner</Text>
      <View style={styles.grid}>
        {offers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={styles.offerBox}
            onPress={() => navigation.navigate("Shop")}
          >
            <Text style={styles.offerText}>{offer.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OfferCornerSection;
const styles = StyleSheet.create({ 

 container: { padding: 15 },
    // ================= Offer Corner Section =================
offerContainer: {
  marginVertical: 15,
  paddingHorizontal: 15,
},
title: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#000",
  marginBottom: 10,
},
grid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},
offerBox: {
  width: "48%",
  backgroundColor: "#FF4D4D",
  paddingVertical: 25,
  marginBottom: 10,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
},
offerText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
},

});