import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccfcf2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  greeting: {
    width: '90%',
    color: '#224d44',
    textAlign: 'left',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 10
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#edfffc',
    padding: 20,
    marginTop: 10,
    borderRadius: 20
  },

  buttonTitle: {
    width: '90%',
    color: '#638a82',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '300'
  }
})