import { View } from 'react-native';
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

let flag = false
// AsyncStorage.clear()

export default function App({ navigation }) {

  async function readData () {

    const lvl = await AsyncStorage.getItem('level')
    const lvl1 = await AsyncStorage.getItem('part1')
    const lvl2 = await AsyncStorage.getItem('part2')
    const lvl3 = await AsyncStorage.getItem('part3')
    console.log(lvl1 + " " + lvl2 + " " + lvl3)

    if ( lvl == null || lvl == undefined ) {
      navigation.navigate('start')
    }else{
      navigation.navigate('main',{'num': parseFloat(lvl), 'levels': [0,lvl1,lvl2,lvl3]})
    }

  }


  if ( !flag ) {

    flag = true
    readData()

  }

  
  return (
    <View style={styles.container}>
    </View>
  );
}