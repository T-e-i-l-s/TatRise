// Импотрируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Animated, Image, Text, View, ImageBackground, Modal, TouchableHighlight, FlatList } from 'react-native'
import styles from './styles'
import * as Progress from 'react-native-progress'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const achiv = ['Новичок', 'Продолжающий', 'Про'] // Уровни прокачки


// Все изображения растений
let plants = [
  require('../../assets/flowers/plant1.png'),
]
let achivs = [
  'Цветок 1',
]


// AsyncStorage.setItem('plants',  JSON.stringify(plants))
// AsyncStorage.setItem('achivs',  JSON.stringify(achivs))


// допПеременные
let count = 1
let last = 0
let flag = false


export default function App({ route, navigation }) {

  const param = route.params // Данные, переданные с другой страницы

  const Opacity = useRef(
    new Animated.Value(0)
  ).current
  const translateX = useRef(
    new Animated.Value(0)
  ).current

  const [progress,setProgress] = useState(param['num'])
  const [plantImage,setPlantImage] = useState(plants[0])
  const [lvl,setLevel] = useState(achiv[0])
  const [resetCount,setReset] = useState(0)
  const [modal,setModal] = useState(false)
  

  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', async () => {

      if ( !flag ) {

        count = await AsyncStorage.getItem('count')
  
        if ( count == null ) {
          count = 1
        } else {
          count = count-1
        }
  
      }``

      let res = JSON.parse(await AsyncStorage.getItem('plants'))

      if ( res != null ){
        plants = res
        setPlantImage(plants[plants.length-1])
      }

      res = JSON.parse(await AsyncStorage.getItem('achivs'))

      if ( res != null ){
        achivs = res
      }

      Opacity.setValue(0)

      Animated.timing(Opacity,{
        toValue: 100,
        duration: 13000,
      }).start()
      
      Animated.timing(translateX,{
        toValue: 0,
        duration: 500,
      }).start()


      setReset(0)
      // Загружаем и обрабатываем уровень продвижения для верхнего блока
      const lvl = await AsyncStorage.getItem('level')
      await setLevel(achiv[Math.floor(lvl/1)])
      await setProgress(parseFloat(lvl%1))


      if ( parseFloat(lvl%1) - last >= 0.1 ) { // Был переход после прохождения урока или нет

        // Обновляем растения

        if ( count < 5 ){
          count++
          console.log(count)
          AsyncStorage.setItem('count',  count)

          if (flag) {
            plants.push(require('../../assets/flowers/plant' + (count) + '.png'))
            achivs.push('Цветок ' + (count))
    
            AsyncStorage.setItem('plants',  JSON.stringify(plants))
            AsyncStorage.setItem('achivs',  JSON.stringify(achivs))
          }
        }

        setPlantImage(plants[plants.length-1])

      }


      flag = true


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


      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>
        <Animated.View style={[styles.topBlock,{opacity: Opacity},{transform:[{translateX: translateX}]}]}>

          <View style={styles.progressBlock}>

            <View style={styles.infoBlock}>

              <Text style={styles.progressText}>{lvl}</Text>

              <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />

            </View>

            <View style={styles.plantBlock} onStartShouldSetResponder={() => setModal(true)}>
              <Image
              source={plantImage}
              style={styles.plant}/>
            </View>

          </View>


          <View 
          style={styles.beginLesson} onStartShouldSetResponder={async() => {
            if ( param['levels'][1] > 8 || param['levels'][2] > 8 || param['levels'][3] > 8 ) {
              await alert('Вы прошли всю методическую программу','', [])
              return
            }
            navigation.navigate('lesson',route.params)
          }}>
            <Text style={styles.beginLessonText}>Пройти урок</Text>
          </View>



          <View style={styles.row}>

            <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('anki',route.params)}>

              <Image
              source={require('../../assets/icons/anki.png')}
              style={styles.blockImage}/>

              <Text style={styles.blockTitle}>Карточки</Text>
              
            </View>

            <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('lessons',route.params)}>

              <Image
              source={require('../../assets/icons/more.png')}
              style={styles.blockImage}/>

              <Text style={styles.blockTitle}>Теория</Text>

            </View>

          </View>



          <View style={styles.row}>

            <View style={styles.block} onStartShouldSetResponder={() => navigation.navigate('facts',route.params)}>

              <Image
              source={require('../../assets/icons/book.png')}
              style={styles.blockImage}/>

              <Text style={styles.blockTitle}>Лайфхаки</Text>

            </View>


            <View style={styles.block} onStartShouldSetResponder={() => {navigation.navigate('developers',route.params)}}>

              <Image
              source={require('../../assets/icons/dev.png')}
              style={[styles.blockImage]}/>

              <Text style={styles.blockTitle}>Разработчики</Text>

            </View>

          </View>
          
        </Animated.View>


        <View style={styles.tabBar}>


          <View style={styles.tab} onStartShouldSetResponder={() => {
            setReset(resetCount + 1)
            if ( resetCount == 10 ) {
              AsyncStorage.clear()
              return
            }
          }}>
            <Image
            source={require('../../assets/icons/home.png')}
            style={styles.tabImage}/>
          </View>


          <View style={styles.tab} onStartShouldSetResponder={async () => {
            await Animated.timing(translateX,{
              toValue: -500,
              duration: 500,
            }).start()
            setTimeout(() => {
              navigation.navigate('culture',route.params)
            },300)}}>
            <Image
            source={require('../../assets/icons/history2.png')}
            style={styles.tabImage}/>
          </View>


        </View>

      </ImageBackground>

      <Modal
        animationType="slide"
        visible={modal}>

        <View style={styles.modalBackground}>

          <View style={styles.header}>
    
            <View onStartShouldSetResponder={() => setModal(false)}>
              <Image
                source={require('../../assets/icons/close.png')}
                style={styles.close}/>
            </View>
    
          </View>


          <FlatList
            data={ [plants[0], plants[1], plants[2], plants[3]] }
            renderItem={ ({ item, index }) => (
              <View style={styles.row2}>

                <View style={{flexDirection: 'column', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    source={plants[index*2]}
                    style={styles.modalPlant}/>
                    <Text style={styles.text}>{achivs[index*2]}</Text>
                </View>
                
                <View style={{flexDirection: 'column', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    source={plants[index*2+1]}
                    style={styles.modalPlant}/>
                  <Text style={styles.text}>{achivs[index*2+1]}</Text>
                </View>

              </View>
            )}
          />
          
        </View>


      </Modal>

    </SafeAreaView>

  );

}