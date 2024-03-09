import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, ImageBackground, Animated } from 'react-native'
import styles from './styles'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Слова на карточках
const array = [
  ['Саумысыз!', 'Здравствуйте! (Здоровы ли вы)'],
  ['Ни хәл?', 'Как дела?'],
  ['Хуш!', 'Пока! (Прощай)'],
  ['Исәнлектә! Саулыкта!', 'Пожелание здоровья'],
  ['Кил монда', 'Иди сюда'],
  ['Сау булыгыз! Исән булыгыз!', 'До свидания!'],
  ['Сәлам әйт!', 'Передавай привет!'],
  ['Уңышлар', 'Удачи'],
  ['Рәхмәт!', 'Спасибо!'],
  ['Бик зур рәхмәт! Рәхмәт яусын!', 'Большое спасибо!'],
  ['Исән бул! Сау-сәламәт бул!', 'Пожалуйста!(в ответ на спасибо)'],
  ['Зинһар', 'Пожалуйста(просьба)'],
  ['Рәхим ит', 'Пожалуйста(ответ на просьбу)'],
  ['Гафу итегез!', 'Извините!'],
  ['Гафу үтенәм', '	Прошу прощения'],
  ['Ярдәм итә аласыңмы?', 'Можешь помочь?'],
  ['Борчылмагыз', 'Не беспокойтесь'],
  ['Хәлләр ничек?', '	Как дела?'],
  ['Яхшы, рәхмәт!', 'Хорошо, спасибо!'],
  ['Үзең ничек?', 'Как сам?'],
  ['Мин дә ярыйсы', 'И у меня неплохо'],
  ['Барысы да яхшымы?', 'Всё хорошо?'],
  ['Әйе, барысы да шәп!', 'Да, всё супер!'],
  ['Миңа ярдәм кирәк.', 'Мне нужна помощь.'],
  ['Сорыйсы килә иде', 'Всё хотел(а) спросить'],
  ['Танышырга шатмын!', 'Рад(а) знакомству!'],
  ['Тагын килегез!', 'Приходите ещё!'],
]

let words = array
let nums = {}
let last = -1

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export default function App({ route, navigation }) {
  const [anki,setAnki] = useState(words[0]) // Данные о карточке
  const [word,setWord] = useState(words[0][0]) // Слово на карточке
  const [colors,setColors] = useState(['#edfffc','#224d44']) // Цвета карты
  const [count, setCount] = useState(route.params['num'])
  const f = route.params['num']

  // Положение карты по оси X
  const translateX = useRef(
    new Animated.Value(300)
  ).current
  // Положение карты по оси Y
  const translateY = useRef(
    new Animated.Value(0)
  ).current
  // Прозрачность карты
  const Opacity = useRef(
    new Animated.Value(0)
  ).current

  // Функция смены карты
  async function next () {
    let ind = getRandomInt(0, words.length)
    if ( words[ind][0] == last ) {
      if ( ind < words.length-1 ) {
        ind++
      } else {
        ind--;
      }
    }
    last = words[ind][0]
    await setAnki(words[ind])
    await setWord(words[ind][0])
    setColors(['#edfffc','#224d44'])
    translateX.setValue(300)
    Animated.timing(translateX, {
      toValue: 0
    }).start()
  }

  // Функция поворота карты
  async function turnOver () {
    if ( word == anki[0] ) {
      setWord(anki[1])
      setColors(['#e8fcf4','#224d44'])
    } else {
      setWord(anki[0])
      setColors(['#edfffc','#224d44'])
    }
  }

  // Функция сохранения прогресса перед выходом
  async function saveData () {
    await AsyncStorage.setItem('words', JSON.stringify(words));
  }

  // Функция обработки результатов
  async function ans (e) {
    if ( e == 'OK' ) {
      if ( words.length > 3 ) {
        words.splice(words.indexOf(anki),1)
      } else {
        words = array
      }
    } else {
      if ( nums[anki[0]] == undefined || nums[anki[0] == null] ) {
        words.push( anki )
        nums[ anki[0] ] = 1
      }
    }

  }

  // Хук загрузки данных при переходе на страницу
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', async () => {
      translateX.setValue(300)
      Animated.timing(Opacity,{
        toValue: 100,
        duration: 5000,
      }).start()
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
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
          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
            saveData(); 
            let plants = JSON.parse(await AsyncStorage.getItem('plants'))
            let achiv = JSON.parse(await AsyncStorage.getItem('achivs'))
            if ( plants != null && !achiv.includes('Магистр слов') && count - f > 0.05 ) {
              plants.push(require('../../assets/flowers/plant9.png'))
              achiv.push('Магистр слов')
            }
            AsyncStorage.setItem('plants',  JSON.stringify(plants))
            AsyncStorage.setItem('achivs',  JSON.stringify(achiv))
            navigation.navigate('main',{'num': count, 'levels': route.params['levels']})
          }}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>
        </Animated.View>

        <View style={styles.block}>
          <Animated.View style={[styles.anki,{backgroundColor: colors[0], transform: [{translateX: translateX},{translateY: translateY}]}]} onStartShouldSetResponder={turnOver}>
            <Text style={[styles.word, {color: colors[1]}]}>{word}</Text>
          </Animated.View>
        </View>

        <View style={styles.bottomBar}>
          <View style={{width: '100%', backgroundColor: '#3b7a6d', flexDirection: 'row'}}>
            <TouchableHighlight style={styles.button1} underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
              await ans('BAD')
              await next()
            }}>
              <View style={styles.but}>
                <Image
                  source={require('../../assets/icons/thumb2.png')}
                  style={styles.thumb}/>
                <Text style={styles.butDescrip}>Я не знаю</Text>
              </View>
            </TouchableHighlight>
  
            <TouchableHighlight style={styles.button2} underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
                await ans('OK')
                await next();
                await setCount(count+0.01)
                AsyncStorage.setItem('level', count)}}>
                <View style={styles.but}>
                  <Image
                    source={require('../../assets/icons/thumb1.png')}
                    style={styles.thumb}/>
                  <Text style={styles.butDescrip}>Я знаю</Text>
                </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}