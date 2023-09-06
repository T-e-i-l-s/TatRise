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


  block: {

    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '93%',
    width: '100%'

  },


  back: {

    height: 30,
    width: 30,

  },  


  taskBlock: {

    width: '100%',
    height: '30%',
    
    alignItems: 'center',
    justifyContent: 'flex-start',

  },


  title: {

    width: '90%',

    color: '#224d44',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '500'

  },


  description: {

    width: '90%',

    color: '#224d44',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '400'

  },
  
  
  listBlock: {

    width: '90%',
    height: '70%',
    
    alignItems: 'center',
    justifyContent: 'flex-end',

  },


  list: {

    width: '100%'

  },


  button: {
    
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',

    backgroundColor: '#edfffc',

    padding: 20,
    marginBottom: 10,

    borderRadius: 20

  },

  buttonTitle: {

    width: '90%',

    color: '#638a82',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '300'

  },

});