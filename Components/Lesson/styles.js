import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccfcf2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  progress:{
    width:'90%',
    backgroundColor:'#bff2e8',
    borderRadius:15,
    borderColor:'#bff2e8',
    marginTop: 10,
  },

  modal: {
    margin: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: '500',
    marginTop: 10,
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
})