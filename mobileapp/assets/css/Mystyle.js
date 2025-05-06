import { StyleSheet } from "react-native";

const Mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e0dd',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subheading: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfe7f2',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  forgotText: {
    textAlign: 'right',
    color: '#000',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1a0d0d',
    borderRadius: 30,
    paddingVertical: 15,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    color: '#000',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },

  //Home

  bannerContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
 
  bannerTextContainer: {
    height: 35,
    overflow: 'hidden',
    backgroundColor: '#800000',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // for web; not required in native
  },
  


});

  
export default Mystyle;