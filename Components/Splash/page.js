import { View } from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

let flag = false

//Сбрасываем локальную бд(для отладки)
// AsyncStorage.clear()
// await AsyncStorage.setItem('level', 0)
// await AsyncStorage.setItem('part1', 0)
// await AsyncStorage.setItem('part2', 0)
// await AsyncStorage.setItem('part3', 0)

export default function App({ navigation }) {
  async function readData () { // Чтение данных
    // Загружаем данные из asyncStorage
    const lvl = await AsyncStorage.getItem('level')
    const lvl1 = await AsyncStorage.getItem('part1')
    const lvl2 = await AsyncStorage.getItem('part2')
    const lvl3 = await AsyncStorage.getItem('part3')
    // Проверяем заходит пользователь в первый раз или нет
    // Далее перенаправляем на страницу
    if ( lvl == null || lvl == undefined ) {
      navigation.navigate('start') // Перенаправляем на страницу начала
    } else {
      navigation.navigate('main',{'num': parseFloat(lvl), 'levels': [0,lvl1,lvl2,lvl3]}) // Перенаправляем на главную страницу
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