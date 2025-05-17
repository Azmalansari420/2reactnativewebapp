import { StyleSheet } from "react-native";

const Mystyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f8f9fa',
        },
        // header: 
        // {
        //     backgroundColor: '#ffc107',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     padding: 0,
        //     justifyContent: 'center',
        //     shadowColor: '#000',
        //     elevation: 4,
        // },
        headerTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: '#000',
        },
        form: {
            padding: 16,
        },
        label: {
            color: '#6c757d',
            fontSize: 12,
            marginBottom: 4,
            marginTop: 16,
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 8,
            paddingLeft: 10,
            shadowColor: '#000',
            elevation: 2,
            marginBottom: 8,
        },
        icon: {
            marginRight: 8,
        },
        input: {
            flex: 1,
            height: 50,
            fontSize: 16,
        },
        footer: {
            padding: 16,
            alignItems: 'center',
        },
        termsText: {
            fontSize: 14,
            marginBottom: 4,
        },
        termsLink: {
            fontSize: 14,
            color: '#198754',
            marginBottom: 16,
        },
        signInBtn: {
            backgroundColor: '#198754',
            padding: 16,
            borderRadius: 10,
            width: '100%',
            alignItems: 'center',
            marginBottom: 12,
        },
        signInText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
        },
        signUpBtn: {
            borderColor: '#198754',
            borderWidth: 2,
            padding: 16,
            borderRadius: 10,
            width: '100%',
            alignItems: 'center',
        },
        signUpText: {
            color: '#198754',
            fontWeight: 'bold',
            fontSize: 16,
        },
        bg: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          logoWrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 150,
          },
          logoBox: {
            backgroundColor: '#fff',
            borderRadius: 24,
            padding: 24,
            elevation: 6,
          },
          logoImage: {
            width: 100,
            height: 100,
          },
          
          logoWrapperlogin: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          },

          buttonWrapper: {
            width: '100%',
            padding: 20,
            paddingBottom: 40,
          },
          getStartedBtn: {
            backgroundColor: '#198754',
            padding: 16,
            borderRadius: 10,
            alignItems: 'center',
          },
          getStartedText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
          },

        //   Home screen

        header: {
            // backgroundColor: '#FFC107',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 0,
            paddingHorizontal:10
          },
          logoText: { fontSize: 24, fontWeight: 'bold', color: '#000' },
          logoTextGreen: { color: '#00B386' },
          headerIcons: { flexDirection: 'row', gap: 10 },
        
          searchBox: { padding: 10, backgroundColor: '#FFC107' },
          searchInput: {
            backgroundColor: '#fff',
            borderRadius: 8,
            paddingHorizontal: 15,
            fontSize: 16,
          },
        
          section: { padding: 10 },
          sectionHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          },
          sectionTitle: { fontSize: 18, fontWeight: 'bold' },
          seeAll: { color: '#00B386', fontWeight: '600' },
        
          horizontalScroll: { flexDirection: 'row' },
          offerItem: { alignItems: 'center', marginRight: 15 },
          offerImage: {
            width: 92,
            height: 92,
            // backgroundColor: '#ddd',
            borderRadius: 30,
          },
          offerBadge: {
            position: 'absolute',
            top: 45,
            backgroundColor: '#FF7A00',
            paddingHorizontal: 5,
            borderRadius: 5,
          },
          offerText: { fontSize: 10, color: '#fff' },
          offerLabel: { marginTop: 5, fontSize: 12 },
        
          grid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          },
          categoryCard: {
            width: '32%',
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            padding: 8,
            alignItems: 'center',
            marginBottom: 10,
          },
          categoryImage: {
            width: 100,
            height: 100,
            borderRadius: 10,
            marginBottom: 5,
          },          
          categoryText: { textAlign: 'center', fontSize: 12 },
        
          bottomNav: {
            flexDirection: 'row',
            backgroundColor: '#000',
            paddingVertical: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          },
          navItem: { alignItems: 'center' },
          navText: { fontSize: 10, color: '#fff', marginTop: 2 },
          navTextActive: { fontSize: 10, color: '#FFD700', marginTop: 2 },
          logoImage1: {
            width: 200,
            height: 100,
          },
        //   mainlogo: 
        //   {
            
        //   }















        
        'home-productc': {
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 10
        },
        'osahan-index': { backgroundSize: 270 },
        'gift-code': {
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'dotted',
          paddingTop: 10,
          paddingRight: 11,
          paddingBottom: 10,
          paddingLeft: 11,
          borderRadius: 5,
          display: 'table',
          letterSpacing: 1
        },
        'bag-item-left': { width: 130 },
        'quantity-btn': { width: 68 },
        btn: {
          fontSize: 13,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          letterSpacing: 0.5
        },
        'btn-lg': {
          fontSize: 14,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          borderRadius: 6,
          textTransform: 'uppercase',
          letterSpacing: 1
        },
        'btn-sm': {
          paddingTop: 5,
          paddingRight: 10,
          paddingBottom: 5,
          paddingLeft: 10
        },
        'text-theme': { color: 'var(--theme)' },
        'back-color': { backgroundColor: 'rgb(166, 255, 166)' },
        'back-color-card': { backgroundColor: 'rgb(158, 176, 255)' },
        'h-50': { height: 50 },
        'w-55': { width: 55 },
        'bg-light2': { backgroundColor: '#fff3cd' },
        'slick-dotted.slick-slider': { marginBottom: 19 },
        'home-cate': { display: 'none' },
        'single-item': { display: 'none' },
        'slider-for': { display: 'none' },
        'slider-nav': { display: 'none' },
        'slick-initialized': { display: 'block' }
      }

);

  
export default Mystyle;