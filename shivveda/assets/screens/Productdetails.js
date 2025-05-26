import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ← Import navigation hook

const Productdetails = () => {
     const navigation = useNavigation(); // ← Hook to access navigation
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Large');

  const images = [
    require('../../assets/images/aarpar_energy_booster-1.png'),
    require('../../assets/images/aarpar2.png'),
    require('../../assets/images/aarpr5.png'),
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const pricePerItem = 1299;
  const totalPrice = quantity * pricePerItem;

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Bag</Text>

      {/* Product Section */}
      <View style={styles.productContainerVertical}>
        {/* Main Image */}
        <Image source={selectedImage} style={styles.mainImage} />

        {/* Thumbnail Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageScroller}>
          {images.map((imageSource, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedImage(imageSource)}>
              <Image
                source={imageSource}
                style={[
                  styles.thumbnailImage,
                  selectedImage === imageSource && styles.activeThumbnail,
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.details}>
          <Text style={styles.discount}>20% OFF</Text>
          <Text style={styles.productName}>Aar-Par Energy Booster 20 Capsules</Text>
          <Text style={styles.seller}>Collections: Aarpar, Shivveda Collections</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{pricePerItem}.00</Text>
            <Text style={styles.originalPrice}>₹1700.00</Text>
          </View>
          <View style={styles.controls}>
            <Picker
              selectedValue={size}
              style={styles.picker}
              onValueChange={(itemValue) => setSize(itemValue)}>
              <Picker.Item label="Large" value="Large" />
              <Picker.Item label="Medium" value="Medium" />
            </Picker>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={decrement}>
                <Text style={styles.qtyButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={increment}>
                <Text style={styles.qtyButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Price Summary */}
      <View style={styles.summary}>
        <Text style={styles.sectionTitle}>Price Summary</Text>
        <Text style={styles.summaryText}>Product Charges: ₹{totalPrice}</Text>
        <Text style={styles.summaryText}>Shipping Charges: FREE</Text>
        <Text style={styles.totalText}>Order Total: ₹{totalPrice}</Text>
      </View>

      {/* Address */}
      <View style={styles.addressSection}>
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.addressBox}>
          <Text style={styles.addressText}>Aar-Par Energy Booster Capsules by Shivveda Ayurveda is a powerful 
            Ayurvedic supplement for energy and stamina. Crafted with 100% natural ingredients, it helps
             improve endurance, vitality, and muscle strength naturally. Undoubtedly, it is ideal for both
              men and women, this natural ayurvedic energy supplement works from within to promote a healthy,
               active, and stress-free lifestyle. Maintaining high energy levels is a constant struggle in today's demanding world. 
               Whether it's physical fatigue, mental stress, or poor performance, the root cause often lies in a lack of proper
                nutrition and balance. Actually, Aar-Par Energy Booster provides a natural, Ayurvedic solution to these common 
                problems, without any side effects.

</Text>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.confirmText}>CONFIRM & PLACE ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Productdetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productContainerVertical: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
  },
  mainImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  imageScroller: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeThumbnail: {
    borderColor: '#2e7d32',
  },
  details: {
    marginTop: 10,
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  seller: {
    fontSize: 12,
    color: '#777',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    marginLeft: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: 120,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#007bff',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  summary: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 2,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
  addressSection: {
    marginTop: 20,
  },
  addressBox: {
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    color: '#555',
  },
  confirmButton: {
    backgroundColor: '#2e7d32',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 30,
    marginBottom:30,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
