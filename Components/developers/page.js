import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native';
import styles from './styles'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const facts = [
  ['Мустафин Карим'],
  ['Пимурзин Рустам'],
  ['Леухин Алексей'],
  ['Пимурзин Руслан'],
]


export default function App({ route, navigation }) {


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


      <View style={{width:'90%'}}>
        <FlatList
          scrollEnabled={true} 
          style={styles.factsList} 
          data={facts} 
          renderItem={({ item }) => (

            <View style={styles.factBlock}>
              <Text style={styles.title}>{item[0]}</Text>
              <Text style={styles.text}>{item[1]}</Text>
            </View>

        )}/>
      </View>  


    </SafeAreaView>

  );

}