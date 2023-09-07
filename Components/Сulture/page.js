import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, FlatList } from 'react-native';
import styles from './styles'
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const facts = [
  ['Поддержка родных', 'Татары чтобы выжить в тяжелые времена, \nвремена преследований и геноцида – \nвсегда помогали родным чем могли \nи постоянно поддерживали связь.'],
  ['Эмэ','Древний татарский обычай взаимопомощи \nво время начала крупных работ по \nстроительству и ремонту.\n Совместная работа завершается общей \nтрапезой с угощениями и гуляниями.'],
  ['Образование','Всегда образование было обязательным \nдля каждого татарина. \nНеобразованные татары подвергались \nнасмешкам и всегда были изгоями \nв татарских общинах.'],
  ['Уважение к старшим','Глава семьи у татар – \nэто самый старший мужчина -Бабай и после него – \nсамая старшая женщина – как правило его \nсупруга Абыстай.'],
]

const links = [
  ['Тут ссылка', 'google.com', require('../../assets/links/video.png')],
  ['Тут ссылка', 'google.com', require('../../assets/links/video.png')],
  ['Тут ссылка', 'google.com', require('../../assets/links/video.png')],
  ['Тут ссылка', 'google.com', require('../../assets/links/video.png')],
]

export default function App({ route, navigation }) {

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.topBlock}>

        <View style={{width:'100%'}}>
          <FlatList
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


        <View style={{width:'100%'}}>
          <FlatList
            scrollEnabled={true} 
            horizontal={true} 
            style={styles.factsList} 
            data={facts} 
            renderItem={({ item }) => (

              <View style={styles.linkBlock}>
                <Image
                source={item[2]}
                style={styles.linkImage}/>
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