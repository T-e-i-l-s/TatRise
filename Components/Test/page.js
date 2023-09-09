// Импортируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'
import * as Progress from 'react-native-progress'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'


let flag = false
let result = 0
let num = 0
let arr = []


export default function App({ navigation }) {

  const [task,setTask] = useState('')
  const [variants,setVariants] = useState([])
  const [ans,setAns] = useState('')
  const [page,setPage] = useState(0)
  const [progress,setProgress] = useState(0)

  
  // Задания для распределительного теста
  const tasks = [
      
      {'task': 'Для начала пройдем тест', 'variants': ['Хорошо'], 'ans': 'Хорошо'},

      {'task': 'Граматика1', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Граматика2', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Граматика3', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      
      {'task': 'Фонетика1', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Фонетика2', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Фонетика3', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      
      {'task': 'Словарный запас1', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Словарный запас2', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},
      {'task': 'Словарный запас3', 'variants': ['Верно','Не верно'], 'ans': 'Верно'},

  ]


  // Проверка ответа
  async function checkAns (e) {

    if ( e === ans && variants.length > 1 ) {
      result++
    }

    nextTask()

  }


  // Сменяем текущее задание
  async function nextTask () {

    setProgress(page/tasks.length) // Устанавливаем значение прогресс бара

    
    if ( page >= tasks.length ) { // Завершаем тест

      setTimeout(() => {
        AsyncStorage.setItem('part' + num, Math.floor(result/3*12))
        AsyncStorage.setItem('level', '0')
        arr.push(Math.floor(result/3*12))
        navigation.navigate('main', {'num': 0, 'levels': arr})
      },500)
      return

    }

    // Меняем задание
    setPage(page+1)
    const data = tasks[page]

    if ( page % 3 == 1 ) {

      arr.push(result/3)
      AsyncStorage.setItem('part' + num, Math.floor(result/3*12))
      num++
      result = 0

    }
    
    setTask(data.task)
    setVariants(data.variants)
    setAns(data.ans)

  }

  
  if ( !flag ) {

    flag = true
    nextTask()

  }


  return (

    <SafeAreaView  style={styles.container}>

      <StatusBar style="auto" />


      <View style={styles.taskBlock}>

        <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />

        <Text style={styles.greeting}>{task}</Text>

      </View>


      <View style={styles.listBlock}>
        <View style={{width: '100%'}}>

          <FlatList data={variants} style={styles.list} renderItem={({ item }) => (

            <View style={styles.button} onStartShouldSetResponder={() => checkAns(item)}>

              <Text style={styles.buttonTitle}>{item}</Text>

            </View>

          )}/>

        </View>
      </View>

    </SafeAreaView>

  );

}