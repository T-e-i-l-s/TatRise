// Импортируем библиотеки и  модули
import { StatusBar } from 'expo-status-bar'
import { Animated, Image, Text, TouchableHighlight, View, FlatList, ImageBackground, Linking } from 'react-native'
import styles from './styles'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Culture from '../Сulture/page'


const developers = [
  ['Мустафин Карим' ,'Разработчик','https://t.me/KMustafin'],
  ['Пимурзин Рустам','Аналитик','https://t.me/WTGorC'],
  ['Леухин Алексей' ,'Маркетолог','https://t.me/LyutyChel'],
  ['Пимурзин Руслан','Дизайнер','https://t.me/Dropio_1966'],
]

let flag = false


export default function App({ route, navigation }) {

  const [open, setOpen] = useState(false)  
  const [f, setF] = useState(false)  
  
  const translateX = useRef(
    [
    new Animated.Value(300),
    new Animated.Value(450),
    new Animated.Value(600),
    new Animated.Value(750),
    ]
  ).current
  
  const Opacity = useRef(
    new Animated.Value(0)
  ).current
  
  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    
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

      Animated.timing(translateX[3], {
        toValue: 0,
        duration: 400,
      }).start()

      Animated.timing(Opacity,{
        toValue: 100,
        duration: 5000,
      }).start()


    });

    return focusHandler;

  }, [navigation]);


  if ( !flag ) {

    flag = true
    setTimeout(() => {
      setOpen(true)
    },200)

  }


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />


      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>

        <Animated.View style={[styles.header,{opacity: Opacity}]}>

          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',route.params)}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>

        </Animated.View>


        <View style={{width:'90%'}}>
          <FlatList
            scrollEnabled={true} 
            style={styles.developersList} 
            data={developers} 
            renderItem={({ item, index }) => (

              <Animated.View style={[styles.devBlock,{transform: [{translateX: translateX[index]}]}]}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item[0]}</Text>

                  <TouchableHighlight style={{width: '20%', alignItems: 'center'}} underlayColor={'rgba(255, 0, 255,0)'} onPress={() => {if(open){Linking.openURL(item[2])}}}>
                    <Image
                      source={require('../../assets/icons/tg.png')}
                      style={styles.back}/>
                  </TouchableHighlight>

                </View>
                <Text style={styles.text}>{item[1]}</Text>
              </Animated.View>

          )}/>
        </View>  

      </ImageBackground>


    </SafeAreaView>

  );

}