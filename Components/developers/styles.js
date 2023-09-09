import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ccfcf2',
    
    alignItems: 'center',
    justifyContent: 'flex-start',

  },


  header: {

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'flex-start',

    padding: '5%',

    width: '100%',
    height: '7%'

  },


  back: {

    height: 30,
    width: 30,

  },


  developersBlock: {

    padding: 15,

    width: '100%',

  },


  devBlock: {

    justifyContent: 'center',

    width: '100%',

    marginBottom: 10,
    padding: 20,

    borderRadius: 20,

    backgroundColor: '#f5fffd'

  },


  title: {

    color: '#224d44',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',

  },


  text: {

    color: '#224d44',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',

  },

});