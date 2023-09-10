import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ccfcf2',
    
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  
  background: {

    width: '100%',
    height: '100%',
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


  block: {

    alignItems: 'center',
    justifyContent: 'center',
    height: '83%',
    width: '100%'

  },


  anki: {

    alignItems: 'center',
    justifyContent: 'center',

    height: '60%',
    width: '80%',

    padding: 20,

    borderRadius: 20,

    shadowColor: "#224d44",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 25


  },


  word: {

    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',

  },


  bottomBar: {

    alignItems: 'center',
    justifyContent: 'flex-end',

    height: '10%',
    width: '100%'

  },


  button1: {

    alignItems: 'center',
    justifyContent: 'center',
    
    width: '50%',

    backgroundColor: '#3b7a6d',

    padding: 20,

    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',

  },


  button2: {

    alignItems: 'center',
    justifyContent: 'center',
    
    width: '50%',

    backgroundColor: '#224d44',

    padding: 20,

    borderTopLeftRadius: 30,

    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',

  },


  but: {

    alignItems: 'center',
    justifyContent: 'center',

    height: '100%',
    width: '100%'


  },


  butDescrip: {

    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',

  },


  thumb: {

    height: 30,
    width: 30,

  },

});