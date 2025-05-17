import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mystyle from '../css/Mystyle';

const HomeScreen = () => {
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
