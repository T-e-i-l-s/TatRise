// Импортируем бибилиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'


// Слова на карточках
const words = [
  ['Саумысыз!', 'Здравствуйте! (Здоровы ли вы)'],
  ['Ни хәл?', 'Как дела?'],
  ['Хуш!', 'Пока! (Прощай)'],
  ['Исәнлектә! Саулыкта!', 'Пожелание здоровья'],
  ['Кил монда', 'Иди сюда'],
]


let i = 1 // Номер открытой карточки


export default function App({ route, navigation }) {

  const [anki,setAnki] = useState(words[0]) // Данные о карточке
  const [word,setWord] = useState(words[0][0]) // Слово на карточке
  const [colors,setColors] = useState(['#edfffc','#224d44']) // Цвета карты


  // Функция смены карты
  async function next () {

    await setAnki(words[i%arr.length])
    await setWord(words[i%arr.length][0])
    setColors(['#edfffc','#224d44'])
    i++

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


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.header}>

        <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',route.params)}>
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

          <TouchableHighlight style={styles.button1} underlayColor={'rgba(255, 0, 255,0)'} onPress={() => next()}>
            <Image
              source={require('../../assets/icons/thumb2.png')}
              style={styles.thumb}/>
          </TouchableHighlight>
 
          <TouchableHighlight style={styles.button2} underlayColor={'rgba(255, 0, 255,0)'} onPress={() => {next();  AsyncStorage.setItem('level', route.params['num'] + 0.01)}}>
            <Image
              source={require('../../assets/icons/thumb1.png')}
              style={styles.thumb}/>
          </TouchableHighlight>

        </View>
      </View>


    </SafeAreaView>

  );

}