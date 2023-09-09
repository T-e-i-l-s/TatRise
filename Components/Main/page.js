// Импотрируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'react-native'
import styles from './styles'
import * as Progress from 'react-native-progress'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'


const achiv = ['Новичек', 'Продолжающий', 'Про'] // Уровни прокачки


// Все изображения растений
const plants = [
  require('../../assets/icons/plant3.png'),
  require('../../assets/icons/plant2.png'),
  require('../../assets/icons/plant1.png'),
]


// допПеременные
let count = 0
let last = 0


export default function App({ route, navigation }) {

  const param = route.params // Данные, переданные с другой страницы

  const [progress,setProgress] = useState(param['num'])
  const [plantImage,setPlantImage] = useState(plants[0])
  const [lvl,setLevel] = useState(achiv[0])
  

  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', async () => {

      // Загружаем и обрабатываем уровень продвижения для верхнего блока
      const lvl = await AsyncStorage.getItem('level')
      await setLevel(achiv[Math.floor(lvl/1)])
      await setProgress(parseFloat(lvl%1))


      if ( last != parseFloat(lvl%1) ) { // Был переход после прохождения урока или нет

        // Обновляем растения

        if ( count == 0) {
          count = 1
        }

        setPlantImage(plants[count])

        if ( count < 2 ){
          count++
        }

      }


      last = parseFloat(lvl%1)


      // Проверяем переполнение прогресс бара
      if ( parseFloat(lvl) % 1 == 0 ) {

        setProgress(0)
        AsyncStorage.setItem('level',0)
        
      }

    });

    return focusHandler;

  }, [navigation]);


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.topBlock}>

        <View style={styles.progressBlock}>

          <View style={styles.infoBlock}>

            <Text style={styles.progressText}>{lvl}</Text>

            <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />

          </View>

          <View style={styles.plantBlock}>
            <Image
            source={plantImage}
            style={styles.plant}/>
          </View>

        </View>


        <View style={styles.beginLesson} onStartShouldSetResponder={() => navigation.navigate('lesson',route.params)}>
          <Text style={styles.beginLessonText}>Пройти урок</Text>
        </View>



        <View style={styles.row}>

          <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('anki',route.params)}>

            <Image
            source={require('../../assets/icons/anki.png')}
            style={styles.blockImage}/>

            <Text style={styles.blockTitle}>Карточки</Text>
            
          </View>

          <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('culture',route.params)}>

            <Image
            source={require('../../assets/icons/history.png')}
            style={styles.blockImage}/>

            <Text style={styles.blockTitle}>Культура</Text>

          </View>

        </View>



        <View style={styles.row}>

          <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('facts',route.params)}>

            <Image
            source={require('../../assets/icons/book.png')}
            style={styles.blockImage}/>

            <Text style={styles.blockTitle}>Лайфхаки</Text>

          </View>


          <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('developers',route.params)}>

            <Image
            source={require('../../assets/icons/dev.png')}
            style={[styles.blockImage]}/>

            <Text style={styles.blockTitle}>Разработчики</Text>

          </View>

        </View>
        
      </View>


      <View style={styles.tabBar}>


        <View style={styles.tab}>
          <Image
          source={require('../../assets/icons/home.png')}
          style={styles.tabImage}/>
        </View>


        <View style={styles.tab} onStartShouldSetResponder={() => navigation.navigate('culture',route.params)}>
          <Image
          source={require('../../assets/icons/history2.png')}
          style={styles.tabImage}/>
        </View>


      </View>

    </SafeAreaView>

  );

}