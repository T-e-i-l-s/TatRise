import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native';
import styles from './styles'
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

let inds = [0,0,0]

const граматика = [
  ['Граматика лвл1', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Граматика лвл2', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Граматика лвл3', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Граматика лвл4', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Граматика лвл5', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Граматика лвл6', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
]

const фонетика = [
  ['Фонетика лвл1', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Фонетика лвл2', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Фонетика лвл3', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Фонетика лвл4', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Фонетика лвл5', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['Фонетика лвл6', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
]

const слЗапас = [
  ['СлЗапас лвл1', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['СлЗапас лвл2', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['СлЗапас лвл3', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['СлЗапас лвл4', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['СлЗапас лвл5', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
  ['СлЗапас лвл5', 'Тут инфа', ['Понятно']],
  ['Вопрос', '', ['Верно', 'Неверно']],
]

let i = 0

export default function App({ route, navigation }) {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [buttons,setButtons] = useState([])
  const [progress,setProgress] = useState(0)

  const param = route.params


  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', () => {

      inds = []
      i = 0
      begin()

    });

    return focusHandler;

  }, [navigation]);


  async function begin () {

    const lvl = param['levels']
    console.log(lvl)

    inds = [Math.floor(lvl[1]),
    Math.floor(lvl[2]),
    Math.floor(lvl[3])]
    console.log(inds)

    const ind = inds[0]
    const data = граматика[ind]
    setTitle(data[0])
    setDescription(data[1])
    setButtons(data[2])

    i++

    setProgress(i/6)

  }


  async function nextPage () {

    if ( i-1 < 2 ) {
      inds[0] += 1
    }else if ( i-1 < 4 ) {
      inds[1] += 1
    }else{
      inds[2] += 1
    }

    if ( i == 6 ) {
      setProgress(1)
      const res = [0,
      inds[0],
      inds[1],
      inds[2]]
      AsyncStorage.setItem('part1', res[1])
      AsyncStorage.setItem('part2', res[2])
      AsyncStorage.setItem('part3', res[3])
      setTimeout(() => {
        navigation.navigate('lessonFinish',{'levels':res, 'num': 0})
      },500)
      return
    }


    let arr = []
    let ind = 0

    if ( i < 2 ) {
      arr = граматика
      ind = inds[0]
    }else if ( i < 4 ) {
      arr = фонетика
      ind = inds[1]
    } else {
      arr = слЗапас
      ind = inds[2]
    }

    const data = arr[ind]
    setTitle(data[0])
    setDescription(data[1])
    setButtons(data[2])

    i++

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

              <View style={styles.button} onStartShouldSetResponder={nextPage}>

                <Text style={styles.buttonTitle}>{item}</Text>

              </View>

            )}/>

          </View>
        </View>
        

      </View>


    </SafeAreaView>

  );

}