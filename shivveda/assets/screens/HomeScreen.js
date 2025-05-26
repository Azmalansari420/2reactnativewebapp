import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mystyle from '../css/Mystyle';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Mystyle.container}>
      {/* Header */}
      <View style={Mystyle.header}>
        
        <Image source={require('../../assets/images/logohome.webp')} // Save your yellow icon as shop-icon.png
              style={Mystyle.logoImage1}
              resizeMode="contain"
            />
      
        <View style={Mystyle.headerIcons}>
          <Icon name="person-circle-outline" size={28} color="#000" />
          <Icon name="cart-outline" size={28} color="#000" />
          <Icon name="menu" size={28} color="#000" />
        </View>
      </View>

      {/* Search */}
      <View style={Mystyle.searchBox}>
        <TextInput
          placeholder="Search for Products.."
          style={Mystyle.searchInput}
        />
      </View>

      <ScrollView>
        {/* Today's Offer */}
        <View style={Mystyle.section}>
          <View style={Mystyle.sectionHeader}>
            <Text style={Mystyle.sectionTitle}>Today Offer's</Text>
            <TouchableOpacity>
              <Text style={Mystyle.seeAll}>SEE ALL →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Mystyle.horizontalScroll}>
            {[
              { name: 'Hair Care', image: require('../../assets/images/of1.png') },
              { name: 'Shilajit', image: require('../../assets/images/of2.png') },
              { name: 'Skin Care', image: require('../../assets/images/of3.png') },
              { name: 'Weight Gain', image: require('../../assets/images/of4.png') },
              { name: 'Diabetes', image: require('../../assets/images/of5.png') },
              { name: 'Chyawanprash', image: require('../../assets/images/of6.png') },
            ].map((item, i) => (
              <View key={i} style={Mystyle.offerItem}>
                <Image source={item.image} style={Mystyle.offerImage} resizeMode="contain" />                
                <Text style={Mystyle.offerLabel}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>

        </View>

        {/* Shop by Category */}
        <View style={Mystyle.section}>
          <View style={Mystyle.sectionHeader}>
            <Text style={Mystyle.sectionTitle}>New Launches</Text>
            <TouchableOpacity>
              <Text style={Mystyle.seeAll}>SEE ALL →</Text>
            </TouchableOpacity>
          </View>

          <View style={Mystyle.grid}>
            {[
              {
                name: '15% Vitamin C Face Serum',
                image: require('../../assets/images/categ/ci1.png'),
              },
              {
                name: 'Aar-Par Energy Booster 20 Capsules',
                image: require('../../assets/images/categ/ci2.png'),
              },
              {
                name: 'Chyawanprash',
                image: require('../../assets/images/categ/ci3.png'),
              },
              {
                name: 'Heart Mantra',
                image: require('../../assets/images/categ/ci4.png'),
              },
              {
                name: 'KAYA GAIN RAS',
                image: require('../../assets/images/categ/ci5.png'),
              },
              {
                name: 'Ayurvedic Capsules for Diabetes Care',
                image: require('../../assets/images/categ/ci6.png'),
              },              
              {
                name: 'KAYA Capsules',
                image: require('../../assets/images/categ/ci7.png'),
              },
            ].map((cat, i) => (
              <View key={i} style={Mystyle.categoryCard}>
                <Image
                  source={cat.image}
                  style={Mystyle.categoryImage}
                  resizeMode="contain"
                />
                <Text style={Mystyle.categoryText}>{cat.name}</Text>
              </View>
            ))}
          </View>

        </View>

          {/* //bottom product */}

          <View style={Mystyle.bottomgrid}>
          {[
            {
              name: 'kissan Jam - Mixed Fruit',
              image: require('../../assets/images/aarpar_energy_booster-1.png'),
              price: 80,
              originalPrice: 100,
              weight: '500g',
              discount: '20%',
            },
            {
              name: ' Mantra Capsules',
              image: {uri: 'https://www.shivveda.com/cdn/shop/files/DSC00042.image-jpg.jpg?v=1747478841&width=600',},
              price: 999,
              originalPrice: 2210,
              weight: '800g',
              discount: '10%',
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={Mystyle.bottomcard}
              onPress={() => navigation.navigate('Productdetails', { product: item })}
            >
              <View style={Mystyle.bottomdiscountBadge}>
                <Text style={Mystyle.bottomdiscountText}>{item.discount} OFF</Text>
              </View>

              <Image source={item.image} style={Mystyle.bottomimage} resizeMode="contain" />

              <Text style={Mystyle.bottomname} numberOfLines={2}>{item.name}</Text>

              <View style={Mystyle.bottompriceRow}>
                <Text style={Mystyle.bottomprice}>₹{item.price}.00</Text>
                <Text style={Mystyle.bottomoriginalPrice}>₹{item.originalPrice}.00</Text>
              </View>

              <View style={Mystyle.bottomrow}>
                <View style={Mystyle.bottomvariantBox}>
                  <Text style={Mystyle.bottomvariantText}>{item.weight} ▼</Text>
                </View>
                <TouchableOpacity style={Mystyle.bottomaddBtn}>
                  <Text style={Mystyle.bottomaddBtnText}>+ ADD</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>






      </ScrollView>

      {/* Bottom Nav */}
      <View style={Mystyle.bottomNav}>
        <TouchableOpacity style={Mystyle.navItem}>
          <Icon name="home" size={24} color="#FFD700" />
          <Text style={Mystyle.navTextActive}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Mystyle.navItem}>
          <Icon name="cart-outline" size={24} color="#fff" />
          <Text style={Mystyle.navText}>BAG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Mystyle.navItem}>
          <Icon name="gift-outline" size={24} color="#fff" />
          <Text style={Mystyle.navText}>OFFERS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Mystyle.navItem}>
          <Icon name="person-outline" size={24} color="#fff" />
          <Text style={Mystyle.navText}>ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
