import { StyleSheet } from "react-native";

const Mystyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#b71c1c', // Red background
        padding: 40,
      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: "#fff", // White text
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#fff',
      },
      button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
      },
      buttontext: {
        color: '#b71c1c', // Red text
        fontSize: 18,
        fontWeight: 'bold',
      },
      forgotPassword: {
        alignSelf: 'flex-end',
        color: '#fff',
        fontSize: 14,
        marginBottom: 20,
        marginTop:15
      },
      signUpText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
      },
});

export default Mystyle;