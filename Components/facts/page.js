// Импотрируем библиотеки и модули
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native'
import styles from './styles'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


// Факты
const facts = [
  ['Поддержка родных', 'Татары чтобы выжить в тяжелые времена, \nвремена преследований и геноцида – \nвсегда помогали родным чем могли \nи постоянно поддерживали связь.'],
  ['Эмэ','Древний татарский обычай взаимопомощи \nво время начала крупных работ по \nстроительству и ремонту.\n Совместная работа завершается общей \nтрапезой с угощениями и гуляниями.'],
  ['Образование','Всегда образование было обязательным \nдля каждого татарина. \nНеобразованные татары подвергались \nнасмешкам и всегда были изгоями \nв татарских общинах.'],
  ['Уважение к старшим','Глава семьи у татар – \nэто самый старший мужчина -Бабай и после него – \nсамая старшая женщина – как правило его \nсупруга Абыстай.'],
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