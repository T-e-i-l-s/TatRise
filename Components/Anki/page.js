// Импортируем бибилиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, ImageBackground } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'


// Слова на карточках
let words = [
  ['Саумысыз!', 'Здравствуйте! (Здоровы ли вы)'],
  ['Ни хәл?', 'Как дела?'],
  ['Хуш!', 'Пока! (Прощай)'],
  ['Исәнлектә! Саулыкта!', 'Пожелание здоровья'],
  ['Кил монда', 'Иди сюда'],
]


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


  // Функция поворота карты
  async function saveData () {

    await AsyncStorage.setItem('words', JSON.stringify(words));

  }


  // Функция поворота карты
  async function ans (e) {

    console.log(words)

    if ( e == 'OK' ) {

      if ( words.length > 3 ) {
        words.splice(words.indexOf(anki),1)
      } else {
        words = [
          ['Саумысыз!', 'Здравствуйте! (Здоровы ли вы)'],
          ['Ни хәл?', 'Как дела?'],
          ['Хуш!', 'Пока! (Прощай)'],
          ['Исәнлектә! Саулыкта!', 'Пожелание здоровья'],
          ['Кил монда', 'Иди сюда']]
      }

    } else {

      if ( nums[anki[0]] == undefined | nums[anki[0] == null] ) {
        words.push( anki )
        nums[ anki[0] ] = 1
      }

    }

  }


  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', async () => {

      try {

        // const myArray = await AsyncStorage.getItem('words');

        // if (myArray !== null) {

        //   words = JSON.parse(myArray);

        // }

      } catch (error) {
        // Error retrieving data
      }

    });

    return focusHandler;

  }, [navigation]);


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />


      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>

        <View style={styles.header}>

          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => {
            saveData(); 
            navigation.navigate('main',{'num': count, 'levels': route.params['levels']})
          }}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>

        </View>


        <View style={styles.block}>
          

          <View style={[styles.anki,{backgroundColor: colors[0]}]} onStartShouldSetResponder={turnOver}>

            <Text style={[styles.word, {color: colors[1]}]}>{word}</Text>

          </View>


        </View>


        <View style={styles.bottomBar}>
          <View style={{width: '100%', backgroundColor: '#3b7a6d', flexDirection: 'row'}}>

            <TouchableHighlight style={styles.button1} underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
              await ans('BAD')
              await next()
            }}>
              <Image
                source={require('../../assets/icons/thumb2.png')}
                style={styles.thumb}/>
            </TouchableHighlight>
  
            <TouchableHighlight style={styles.button2} underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
                await ans('OK')
                await next();
                await setCount(count+0.01)
                AsyncStorage.setItem('level', count)}}>
              <Image
                source={require('../../assets/icons/thumb1.png')}
                style={styles.thumb}/>
            </TouchableHighlight>

          </View>
        </View>
        
      </ImageBackground>

    </SafeAreaView>

  );

}