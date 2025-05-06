import React, { useRef, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Mystyle from '../css/Mystyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, Dimensions } from 'react-native';


const { width } = Dimensions.get('window'); // Screen Width


const Home = () => {
    //marquee
    const scrollX = useRef(new Animated.Value(Dimensions.get('window').width)).current;
    useEffect(() => {
    Animated.loop(
        Animated.timing(scrollX, {
        toValue: -Dimensions.get('window').width,
        duration: 8000,
        useNativeDriver: true,
        })
    ).start();
    }, []);


  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={{ uri: 'https://goaking.co.in/media/uploads/users/user-profile.png' }}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.helloText}>Hello, Ayub Aalam</Text>
          <Text style={styles.coinText}>💰 0</Text>
        </View>
        <TouchableOpacity style={styles.bellIcon}>
          <Icon name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={true} scrollEnabled={true}>
            <Image source={{ uri: 'https://goaking.co.in/media/uploads/slider/1737204554.jpg' }} style={styles.bannerImage}
            />
            <Image source={{ uri: 'https://goaking.co.in/media/uploads/slider/1737204546.jpg' }} style={styles.bannerImage}
            />
          </ScrollView>
        </View>
        

        <View style={Mystyle.bannerTextContainer}>
            <Animated.Text
                style={[
                Mystyle.bannerText,
                { transform: [{ translateX: scrollX }] },
                ]}
            >
                🚀 GOA KING - JOIN NOW & WIN DAILY! 💰
            </Animated.Text>
        </View>


        {/* Delhi Bazar */}
        <View style={styles.marketBox}>
          <Text style={styles.marketTitle}>DELHI BAZAR</Text>
          <Text style={styles.marketNumber}>🏆 46 🏆</Text>
        </View>

        {/* Note Section */}
        <View style={styles.noteBox}>
          <Text style={styles.noteText}>📌 दिवाल होकर देखो भाईयो 🔥 सबसे फास्ट पेमेंट मिलती है 💰 कोई भी गेम कभी भी लगाओ ऑटोमेटिक सिस्टम है रेट 10 के 950 मिलते हैं 🙏 जय बाबा सागरनाथ अवेश की 🙏</Text>
        </View>

        {/* Upcoming Games Button */}
        <TouchableOpacity style={styles.upcomingBtn}>
          <Text style={styles.upcomingText}>Upcoming Games</Text>
        </TouchableOpacity>
                {/* Upcoming Games Cards */}
          <View style={styles.gamesContainer}>
            {/* Example Game Card */}
            <View style={styles.gameCard}>
              <View style={styles.gameHeader}>
                <Text style={styles.gameCode}>GK</Text>
                <View style={styles.statusClose}>
                  <Text style={styles.statusText}>Close</Text>
                </View>
              </View>
              <Text style={styles.gameTitle}>GOA KING</Text>
              <Text style={styles.gameTime}>02:00 PM</Text>
              <Text style={styles.startCloseTime}>Start Time: <Text style={{color: 'lime'}}>07:00 AM</Text></Text>
              <Text style={styles.startCloseTime}>Close Time: <Text style={{color: 'lime'}}>01:30 PM</Text></Text>
            </View>

            {/* Example Game Card */}
            <View style={styles.gameCard}>
              <View style={styles.gameHeader}>
                <Text style={styles.gameCode}>CT</Text>
                <View style={styles.statusClose}>
                  <Text style={styles.statusText}>Close</Text>
                </View>
              </View>
              <Text style={styles.gameTitle}>CHOTU TAJ </Text>
              <Text style={styles.gameTime}>04:45 PM</Text>
              <Text style={styles.startCloseTime}>Start Time: <Text style={{color: 'lime'}}>07:00 AM</Text></Text>
              <Text style={styles.startCloseTime}>Close Time: <Text style={{color: 'lime'}}>02:20 PM</Text></Text>
            </View>

            
            {/* Example Game Card */}
            <View style={styles.gameCard}>
              <View style={styles.gameHeader}>
                <Text style={styles.gameCode}>DB</Text>
                <View style={styles.statusClose}>
                  <Text style={styles.statusText}>Close</Text>
                </View>
              </View>
              <Text style={styles.gameTitle}>DELHI BAZAR </Text>
              <Text style={styles.gameTime}>03:15 PM</Text>
              <Text style={styles.startCloseTime}>Start Time: <Text style={{color: 'lime'}}>07:00 AM</Text></Text>
              <Text style={styles.startCloseTime}>Close Time: <Text style={{color: 'lime'}}>02:40 PM</Text></Text>
            </View>
            
            {/* Example Game Card */}
            <View style={styles.gameCard}>
              <View style={styles.gameHeader}>
                <Text style={styles.gameCode}>SG</Text>
                <View style={styles.statusOpen}>
                  <Text style={styles.statusText}>Open</Text>
                </View>
              </View>
              <Text style={styles.gameTitle}>SHREE GANESH </Text>
              <Text style={styles.gameTime}>03:15 PM</Text>
              <Text style={styles.startCloseTime}>Start Time: <Text style={{color: 'lime'}}>07:00 AM</Text></Text>
              <Text style={styles.startCloseTime}>Close Time: <Text style={{color: 'lime'}}>02:40 PM</Text></Text>
            </View>

            
          </View>

          <TouchableOpacity style={styles.liveresultBtn}>
            <Text style={styles.liveresultText}>GOA KING Live  Result Of 28 Apr 2025</Text>
          </TouchableOpacity>

          <View style={styles.liveResultContainer}>
            <View style={styles.liveResultRow}>
              <Text style={styles.code}>GK</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>GOA KING</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- 60</Text>
              </View>
              <Text style={styles.resultNumber}>94</Text>
            </View>

            <View style={styles.liveResultRow}>
              <Text style={styles.code}>CT</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>CHOTU TAJ</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- xx</Text>
              </View>
              <Text style={styles.resultNumber}>xx</Text>
            </View>

            <View style={styles.liveResultRow}>
              <Text style={styles.code}>DB</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>DELHI BAZAR</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- 15</Text>
              </View>
              <Text style={styles.resultNumber}>xx</Text>
            </View>

            <View style={styles.liveResultRow}>
              <Text style={styles.code}>SG</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>SHREE GANESH</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- 39</Text>
              </View>
              <Text style={styles.resultNumber}>xx</Text>
            </View>

            <View style={styles.liveResultRow}>
              <Text style={styles.code}>FB</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>FARIDABAD</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- 73</Text>
              </View>
              <Text style={styles.resultNumber}>xx</Text>
            </View>

            <View style={styles.liveResultRow}>
              <Text style={styles.code}>GB</Text>
              <View style={styles.nameSection}>
                <Text style={styles.name}>GAZIABAD</Text>
                <Text style={styles.lastWinning}>Last Winning Number:- xx</Text>
              </View>
              <Text style={styles.resultNumber}>xx</Text>
            </View>
          </View>


          


      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="grid-outline" size={24} color="#fff" />
        <Icon name="book-outline" size={24} color="#fff" />
        <Icon name="home" size={24} color="#00ff00" />
        <Icon name="wallet-outline" size={24} color="#fff" />
        <Icon name="person-outline" size={24} color="#fff" />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#800000',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  helloText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  coinText: {
    color: '#fff',
  },
  bellIcon: {
    marginLeft: 'auto',
  },
  bannerContainer: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 0, // Padding 0 rakhna full cover ke liye
    overflow: 'hidden', // BorderRadius ke sath image cut nahi hogi
    width: width - 20, // margin ke hisab se kam kar diya
  },
  bannerImage: {
    width: width - 20, // container ke width ke barabar
    height: 180, // height thoda bada rakha (jaise chaho change kar sakte ho)
    resizeMode: 'cover',
  },
  bannerText: {
    fontWeight: 'bold',
    color: '#800000',
    marginTop: 5,
  },
  marketBox: {
    backgroundColor: '#000',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  marketTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  marketNumber: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  noteBox: {
    backgroundColor: '#800000',
    margin: 20,
    borderRadius: 10,
    padding: 15,
  },
  noteText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  upcomingBtn: {
    backgroundColor: '#0a0',
    marginHorizontal: 60,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  upcomingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#800000',
    paddingVertical: 10,
  },

  gamesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  gameCard: {
    backgroundColor: '#000',
    width: '48%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameCode: {
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  statusClose: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  statusOpen: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
  gameTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  gameTime: {
    backgroundColor: '#fff',
    color: '#000',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  startCloseTime: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },

  liveresultBtn: {
    backgroundColor: '#0b6623', // Dark green
    margin: 15,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  liveresultText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6a0000', // Dark red like your app
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
  },
  activeNavText: {
    color: '#4f8ef7', // Highlight active tab (Home)
    fontWeight: 'bold',
  },


  
  liveresultBtn: {
    backgroundColor: '#0b6623',
    margin: 10,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  liveresultText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveResultContainer: {
    // backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    elevation: 3,
  },
  liveResultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    marginBottom: 8,
    padding: 10,
    borderWidth: 2,
    // borderColor: '#ff6600',
  },
  code: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    width: 50,
    textAlign: 'center',
  },
  nameSection: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastWinning: {
    color: '#00ff00',
    fontSize: 14,
    marginTop: 3,
  },
  resultNumber: {
    backgroundColor: '#ff6600',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  

});

export default Home;