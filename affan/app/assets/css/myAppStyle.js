import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backBtn: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginTop:50,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#000",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 14,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
  },
  signInBtn: {
    backgroundColor: "#0d6efd",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotText: {
    color: "#0d6efd",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
  },
  registerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#777",
  },
  registerLink: {
    color: "#0d6efd",
    fontWeight: "bold",
  },
  forgetpasswordbtn:
  {
    fontSize:14,
    fontWeight:600,
    color: 'black',
     textAlign: "center",
  },
  registerddiv: {
    alignItems: "center", // center align karega
    marginTop: 10,
  },
  registerbtn: {
    fontSize: 14,
    color: "black",
  },
  subtitle:
  {
    marginBottom:15,
    textAlign: 'center',
    fontSize:17,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
    color: "#6c757d", // muted color
    fontSize: 14,
  },



  ///home page
container: { 
  padding: 15, 
  backgroundColor: "#F8F9FB" 
},

header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 15,
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

name: { fontSize: 20, fontWeight: "bold", color: "#222" },
role: { fontSize: 14, color: "gray", marginTop: 2 },

punchBtn: {
  backgroundColor: "#FFD600",
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 20,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 4,
},
punchBtnText: { fontWeight: "bold", color: "#000" },

greeting: { fontSize: 18, fontWeight: "600", marginBottom: 4, color: "#333" },
date: { fontSize: 14, color: "gray", marginBottom: 15 },

card: {
  backgroundColor: "#E6F0FF",
  padding: 15,
  borderRadius: 12,
  marginBottom: 15,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 2,
},
sectionTitle: { fontWeight: "bold", marginBottom: 8, fontSize: 16, color: "#222" },
checkIn: { color: "green", fontSize: 15, marginBottom: 4 },
checkOut: { color: "red", fontSize: 15 },

actions: { 
  flexDirection: "row", 
  justifyContent: "space-between", 
  marginBottom: 15 
},

actionBtn: {
  flex: 1,
  backgroundColor: "#F0F4FF",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
  marginHorizontal: 6,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 2,
},
actionBtnText: { fontWeight: "600", color: "#333" },

summary: {
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 12,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 2,
},
summary: {
  backgroundColor: "#fff",
  padding: 15,
  marginVertical: 10,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

sectionTitle: {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
  color: "#333",
},

statRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#eee",
},

statIcon: {
  fontSize: 18,
  marginRight: 8,
},

statLabel: {
  flex: 1,
  fontSize: 14,
  color: "#333",
},

statValue: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#0057ff",
},





});
