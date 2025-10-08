import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ================= Login/Register Styles =================

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "red",
    marginBottom: 20,
  },
  signInBtn: {
    backgroundColor: "#05a845",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginBottom: 15,
    color: "#888",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  footerText: {
    textAlign: "center",
    color: "#555",
  },
  createNow: {
    color: "blue",
    fontWeight: "bold",
  },

  // ================= Homepage Styles =================

  homeContainer: { flex: 1, backgroundColor: "#fff" },
  categoryScroll: { paddingVertical: 10, paddingLeft: 10 },
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 60, height: 60, borderRadius: 30 },
  categoryText: { marginTop: 5, fontSize: 12, fontWeight: "600" },
 bannerContainer: {
  width: '100%',
  height: 200,
  marginBottom: 10,
  backgroundColor: '#fff',
},

bannerSlide: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

bannerImage: {
  width: '100%',
  height: 200,
  resizeMode: 'cover', // shows full image without cutting sides
},

  sectionHeader: { flexDirection: "row", justifyContent: "space-between", padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "red" },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  productImage: { width: 80, height: 80, borderRadius: 8 },
  productInfo: { flex: 1, paddingLeft: 10 },
  productTitle: { fontWeight: "bold", fontSize: 14 },
  productBrand: { color: "#666", fontSize: 12 },
  priceRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  priceNew: { fontWeight: "bold", color: "#000" },
  priceOld: { marginLeft: 5, textDecorationLine: "line-through", color: "#888" },
  priceOff: { marginLeft: 5, color: "red" },
  wishlistBtn: { padding: 10 },


  brandsection:{paddingTop:0},
  brandsectiontitle:
  {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
brandScroll: { paddingVertical: 10, paddingLeft: 10 },

   brandImage: { 
  width: 100,       
  height: 60,       
  borderRadius: 30,
  resizeMode: "contain" // agar full image dikhana hai without cropping
},






// ================= Kids Corner Section =================





});
