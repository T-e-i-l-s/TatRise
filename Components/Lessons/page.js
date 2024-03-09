import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList, ImageBackground, Animated } from 'react-native'
import styles from './styles'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Блоки курса
const array = [
  ['Грамматика'],
  ['Фонетика'],
  ['Словарный запас'],
]

let flag = false
let param = []

export default function App({ route, navigation }) {
  // Положение view по оси x
  const translateX = useRef(
    [
    new Animated.Value(300),
    new Animated.Value(450),
    new Animated.Value(600),
    ]
  ).current
  // Прозрачность экрана
  const Opacity = useRef(
    new Animated.Value(0)
  ).current

  const param = route.params
  
  // Хук загрузки данных при переходе на страницу
  React.useEffect(() => { 
    const focusHandler = navigation.addListener('focus', async () => {
      Animated.timing(translateX[0], {
        toValue: 0,
        duration: 400,
      }).start()
      Animated.timing(translateX[1], {
        toValue: 0,
        duration: 400,
      }).start()
      Animated.timing(translateX[2], {
        toValue: 0,
        duration: 400,
      }).start()
      Animated.timing(Opacity,{
        toValue: 100,
        duration: 5000,
      }).start()
    })
    return focusHandler
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>
        <Animated.View style={[styles.header,{opacity: Opacity}]}>
          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',param)}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>
        </Animated.View>

        <View style={{width:'90%'}}>
          <FlatList
            scrollEnabled={true} 
            style={styles.developersList} 
            data={array} 
            renderItem={({ item, index }) => (
              <Animated.View style={[styles.devBlock,{transform: [{translateX: translateX[index]}]}]} onStartShouldSetResponder={() => {navigation.navigate('list',{'title': item[0], 'num': param['num'], 'levels': param['levels']});}}>
                <Text style={styles.title}>{item[0]}</Text>
              </Animated.View>
          )}/>
        </View>  
      </ImageBackground>
    </SafeAreaView>
  )
}