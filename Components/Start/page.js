import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App({ navigation }) {
  const toMain = () => { // Для начавших с нуля
    AsyncStorage.setItem('part1',0)
    AsyncStorage.setItem('part2',0)
    AsyncStorage.setItem('part3',0)
    AsyncStorage.setItem('level',0)
    navigation.navigate('main',{'num': 0, 'levels': [0,0,0,0]})
  }

  const toTest = () => { // Для продолжающих
    navigation.navigate('test')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.greeting}>Сәлам,{'\n'}давай знакомиться!</Text>

      <View style={styles.button} onStartShouldSetResponder={toMain}>
        <Text style={styles.buttonTitle}>Хочу изучить татарский язык с нуля</Text>
      </View>

      <View style={styles.button} onStartShouldSetResponder={toTest}>
        <Text style={styles.buttonTitle}>Хочу продвинуть свои знания</Text>
      </View>
    </View>
  )
}