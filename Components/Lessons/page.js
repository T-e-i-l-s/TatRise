// Импортируем библиотеки и  модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList, ImageBackground } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const array = [
  ['Граматика'],
  ['Фонетика'],
  ['Словарный запас'],
]


let flag = false
let param = []


export default function App({ route, navigation }) {

  const param = route.params
 
  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />


      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>

        <View style={styles.header}>

          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',param)}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.back}/>
          </TouchableHighlight>

        </View>


        <View style={{width:'90%'}}>
          <FlatList
            scrollEnabled={true} 
            style={styles.developersList} 
            data={array} 
            renderItem={({ item }) => (

              <View style={styles.devBlock} onStartShouldSetResponder={() => {navigation.navigate('list',{'title': item[0], 'num': param['num'], 'levels': param['levels']});}}>
                <Text style={styles.title}>{item[0]}</Text>
              </View>

          )}/>
        </View>  

      </ImageBackground>


    </SafeAreaView>

  );

}