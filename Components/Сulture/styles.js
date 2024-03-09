import { StyleSheet } from 'react-native'

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

  topBlock: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  tabBar: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  superTitle: {
    width: '90%',
    color: '#224d44',
    textAlign: 'left',
    fontSize: 25,
    fontWeight: '500',
  },

  factsList: {
    padding: 15
  },


  factBlock: {
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    marginRight: 15,
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

  linkBlock: {
    width: 300,
    justifyContent: 'center',
    marginRight: 15,
  },

  linkImage: {
    height: 150,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },

  linkTitle: {
    backgroundColor: '#f5fffd',
    color: '#224d44',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingVertical: 10,
    paddingLeft: 15
  },

  tabImage: {
    height: 35,
    width: 35
  },

  tab: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabImage: {
    height: 35,
    width: 35
  },
})