// Импотрируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native'
import styles from './styles'
import * as Progress from 'react-native-progress'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import {граматика, фонетика, слЗапас} from './lessons' // Импортируем метадические материалы


let inds = [0,0,0] // Массив уровней(граматика, фонетика, сл.запас)
let i = 0 // Прогресс прохождения урока
let count = 0.2


export default function App({ route, navigation }) {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [buttons,setButtons] = useState([])
  const [progress,setProgress] = useState(0)
  const [array,setArray] = useState(0)


  const param = route.params // Данные, переданные с другой страницы


  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', () => {

      inds = []
      i = 0
      begin()

    });

    return focusHandler;

  }, [navigation]);


  // Функция начала урока (Открытие первого задания и тп)
  async function begin () {

    const lvl = param['levels']

    inds = [Math.floor(lvl[1]),
    Math.floor(lvl[2]),
    Math.floor(lvl[3])]

    const ind = inds[0]
    const data = граматика[ind]
    setArray(data)
    setTitle(data[0])
    setDescription(data[1])
    setButtons(data[2])

    i++

    setProgress(i/6)

  }


  // Функция завершения урока (Открытие первого задания и тп)
  async function end () {

    setProgress(1)
  
    const res = [0,
    inds[0],
    inds[1],
    inds[2]]
  
    AsyncStorage.setItem('level', param['num'] + count)
    AsyncStorage.setItem('part1', res[1])
    AsyncStorage.setItem('part2', res[2])
    AsyncStorage.setItem('part3', res[3])
  
    setTimeout(() => {
      navigation.navigate('lessonFinish',{'levels':res, 'num': param['num'] + 0.2})
    },500)

  }


  // Функция смены задания
  async function nextPage (e) {


    if ( buttons.length > 1 ) {

      if ( array[3] == e  ) {

        // Сохранение прогресса
        if ( i-1 < 2 ) {
    
          inds[0] += 1
    
        } else if ( i-1 < 4 ) {
    
          inds[1] += 1
    
        } else {
    
          inds[2] += 1
          
        }
  
      } else {

        // Сохранение прогресса
        if ( i-1 < 2 ) {
    
          inds[0] -= 1
    
        } else if ( i-1 < 4 ) {
    
          inds[1] -= 1
    
        } else {
    
          inds[2] -= 1
          
        }
        count -= 0.05

      }

    }else {
      
      // Сохранение прогресса
      if ( i-1 < 2 ) {
  
        inds[0] += 1
  
      } else if ( i-1 < 4 ) {
  
        inds[1] += 1
  
      } else {
  
        inds[2] += 1
        
      }

    }




    // Завершаем урок(если надо)
    if ( i == 6 ) {

      end()

      return

    }


    let arr = []
    let ind = 0

    // Переход к другому блоку
    if ( i < 2 ) {

      arr = граматика
      ind = inds[0]

    } else if ( i < 4 ) {

      arr = фонетика
      ind = inds[1]

    } else {

      arr = слЗапас
      ind = inds[2]

    }

    // Прописываем вопрос, описание и ответы
    const data = arr[ind]
    setArray(data)
    setTitle(data[0])
    setDescription(data[1])
    setButtons(data[2])

    i++

    // Передаем значение в прогрес бар
    setProgress(i/7)

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

        <View style={styles.taskBlock}>

          <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

        </View>


        <View style={styles.listBlock}>
          <View style={{width: '100%'}}>

            <FlatList data={buttons} style={styles.list} renderItem={({ item }) => (

              <View style={styles.button} onStartShouldSetResponder={() => nextPage(item)}>

                <Text style={styles.buttonTitle}>{item}</Text>

              </View>

            )}/>

          </View>
        </View>
        

      </View>


    </SafeAreaView>

  );

}