// Импортируем библиотеки и  модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList, ImageBackground, Linking } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const developers = [
  ['Мустафин Карим' ,'Разработчик','https://t.me/KMustafin'],
  ['Пимурзин Рустам','Аналитик','https://t.me/WTGorC'],
  ['Леухин Алексей' ,'Маркетолог','https://t.me/LyutyChel'],
  ['Пимурзин Руслан','Дизайнер','https://t.me/Dropio_1966'],
]


export default function App({ route, navigation }) {

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />


      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>

        <View style={styles.header}>

          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',route.params)}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>

        </View>


        <View style={{width:'90%'}}>
          <FlatList
            scrollEnabled={true} 
            style={styles.developersList} 
            data={developers} 
            renderItem={({ item }) => (

              <View style={styles.devBlock}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item[0]}</Text>

                  <TouchableHighlight style={{width: '20%', alignItems: 'center'}} underlayColor={'rgba(255, 0, 255,0)'} onPress={() => Linking.openURL(item[2])}>
                    <Image
                      source={require('../../assets/icons/tg.png')}
                      style={styles.back}/>
                  </TouchableHighlight>

                </View>
                <Text style={styles.text}>{item[1]}</Text>
              </View>

          )}/>
        </View>  

      </ImageBackground>


    </SafeAreaView>

  );

}