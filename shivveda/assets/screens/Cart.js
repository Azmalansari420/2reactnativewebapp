import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ← Import navigation hook

const cartItems = [
  {
    name: 'Aar-Par Energy Booster 20 Capsules',   
    qty: 2,
    price: 1599,
    image: require('../../assets/images/aarpar_energy_booster-1.png'),
  },
];

const Cart = () => {
     const navigation = useNavigation(); // ← Hook to access navigation
  const totalAmount = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Order Details</Text>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.weight}>{item.weight}</Text>
            <Text style={styles.qty}>Qty: {item.qty}</Text>
          </View>
          <Text style={styles.price}>₹{item.price * item.qty}</Text>
        </View>
      ))}

      {/* Price Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Price Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Subtotal</Text>
          <Text>₹{totalAmount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Shipping Charges</Text>
          <Text style={{ color: 'green' }}>FREE</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>₹{totalAmount}</Text>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <Text style={styles.addressText}>John Doe</Text>
        <Text style={styles.addressText}>123, Kalyani Nagar, Pune, MH - 411014</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.placeOrderBtn} onPress={() => navigation.navigate('OrderSuccess')}>
        <Text style={styles.placeOrderText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  weight: {
    color: '#777',
  },
  qty: {
    marginTop: 5,
    color: '#555',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'green',
  },
  addressText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  placeOrderBtn: {
    backgroundColor: '#2e7d32',
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
