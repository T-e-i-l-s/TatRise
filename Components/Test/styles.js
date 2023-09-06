import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ccfcf2',
    
    alignItems: 'center',
    justifyContent: 'center',

  },


  taskBlock: {

    width: '100%',
    height: '30%',
    
    alignItems: 'center',
    justifyContent: 'flex-start',

  },


  progress:{

    width:'90%',

    backgroundColor:'#bff2e8',

    marginTop: 20,

    borderRadius:15,
    borderColor:'#bff2e8'
    
  },


  greeting: {

    width: '90%',

    color: '#224d44',
    textAlign: 'left',
    fontSize: 25,
    fontWeight: '500',

    marginTop: 20

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