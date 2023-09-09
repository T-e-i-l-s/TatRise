// Импортируем библиотеки и модули
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, FlatList, Linking } from 'react-native'
import styles from './styles'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


// Факты и ежедневная подборка
const facts = [
  ['Поддержка родных', 'Татары чтобы выжить в тяжелые времена, \nвремена преследований и геноцида – \nвсегда помогали родным чем могли \nи постоянно поддерживали связь.'],
  ['Эмэ','Древний татарский обычай взаимопомощи \nво время начала крупных работ по \nстроительству и ремонту.\n Совместная работа завершается общей \nтрапезой с угощениями и гуляниями.'],
  ['Образование','Всегда образование было обязательным \nдля каждого татарина. \nНеобразованные татары подвергались \nнасмешкам и всегда были изгоями \nв татарских общинах.'],
  ['Уважение к старшим','Глава семьи у татар – \nэто самый старший мужчина -Бабай и после него – \nсамая старшая женщина – как правило его \nсупруга Абыстай.'],
]

const links = [
  ['Гугл',require('../../assets/links/video.png'),  'https://google.com'],
  ['Яндекс',require('../../assets/links/video.png'),'https://ya.ru'],
  ['Ли7',require('../../assets/links/video.png'),   'https://litsey7.com'],
  ['Ли2',require('../../assets/links/video.png'),   'https://litsey2.ru']
]


export default function App({ route, navigation }) {

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.topBlock}>


        <Text style={[styles.superTitle, {marginTop: 15}]}>Факты:</Text>

        <View style={{width:'100%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true} 
            horizontal={true} 
            style={styles.factsList} 
            data={facts} 
            renderItem={({ item }) => (

              <View style={styles.factBlock}>
                <Text style={styles.title}>{item[0]}</Text>
                <Text style={styles.text}>{item[1]}</Text>
              </View>

          )}/>
        </View>  


        <Text style={styles.superTitle}>Ежедневная подборка:</Text>

        <View style={{width:'100%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true} 
            horizontal={true} 
            style={styles.factsList} 
            data={links} 
            renderItem={({ item }) => (

              <View style={styles.linkBlock}>
                <Image
                source={item[1]}
                style={styles.linkImage}/>
                <Text style={styles.linkTitle} onPress={() => {Linking.openURL(item[2]);}}>{item[0]}</Text>
              </View>

          )}/>
        </View>

      </View>
      

      <View style={styles.tabBar}>


        <View style={styles.tab} onStartShouldSetResponder={() => navigation.navigate('main',route.params)}>
          <Image
          source={require('../../assets/icons/home.png')}
          style={styles.tabImage}/>
        </View>


        <View style={styles.tab}>
          <Image
          source={require('../../assets/icons/history2.png')}
          style={styles.tabImage}/>
        </View>


      </View>

    </SafeAreaView>

  );

}