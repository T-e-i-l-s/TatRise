// Импотрируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function App({ route, navigation }) {

  const [title,setTitle] = useState('Поздравляю! Вы прошли урок!')
  const [description,setDescription] = useState('Каждый урок - это очередной шаг к своему родному языку')
  const [buttons,setButtons] = useState(['На главную'])

  
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

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

        </View>


        <View style={styles.listBlock}>
          <View style={{width: '100%'}}>

            <FlatList data={buttons} style={styles.list} renderItem={({ item }) => (

              <View style={styles.button} onStartShouldSetResponder={() => navigation.navigate('main',route.params)}>

                <Text style={styles.buttonTitle}>{item}</Text>

              </View>

            )}/>

          </View>
        </View>
        

      </View>


    </SafeAreaView>

  );

}