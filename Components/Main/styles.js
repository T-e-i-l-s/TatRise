import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ccfcf2',
    
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


  progressBlock: {

    alignItems: 'flex-start',
    justifyContent: 'center',

    width: '100%',

    marginTop: 20

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

});