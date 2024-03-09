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

  modalBackground: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f5fffd',
  },
  
  modalPlant: {
    height: 100,
    width: 100
  },

  close: {
    height: 30,
    width: 30
  },

  row2: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },

  text: {
    width: '90%',
    color: '#224d44',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5%',
    width: '100%',
    height: '7%'
  },

  topBlock: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  tabBar: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5fffd',
    marginTop: 20,
    width: '100%'
  },

  infoBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#f5fffd',
    padding: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  progressText: {
    width: '90%',
    color: '#224d44',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },

  progress:{
    width:'90%',
    backgroundColor:'#ebf5f2',
    borderRadius:15,
    borderColor:'#ebf5f2',
    marginTop: 10
  },

  progressLevel: {
    width: '90%',
    color: '#224d44',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10
  },

  plantBlock: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },

  plant: {
    height: 45,
    width: 45,
  },

  beginLesson: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#224d44',
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: "#224d44",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 25
  },

  beginLessonText: {
    width: '90%',
    color: '#f5fffd',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  block: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '100%',
    marginHorizontal: 10,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#f5fffd',
    borderRadius: 20,
    shadowColor: "#224d44",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 25
  },

  blockTitle: {
    width: '90%',
    color: '#224d44',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5
  },

  blockImage: {
    height: 55,
    width: 55,
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