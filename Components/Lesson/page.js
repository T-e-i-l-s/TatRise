import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View, FlatList } from 'react-native';
import styles from './styles'
import * as Progress from 'react-native-progress';
import { useState } from 'react';

let buttons = ['ds']

export default function App({ route, navigation }) {

  const [title,setTitle] = useState('Заголовок')
  const [description,setDescription] = useState('Описание')
  const [buttons,setButtons] = useState(['Далее'])


  const param = route.params

  const levels = useState(param['levels'])


  return (

    <View style={styles.container}>

      <StatusBar style="auto" />


      <View style={styles.header}>

        <TouchableHighlight onPress={() => navigation.navigate('main',route.params)}>
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

              <View style={styles.button}>

                <Text style={styles.buttonTitle}>{item}</Text>

              </View>

            )}/>

          </View>
        </View>
        

      </View>


    </View>

  );

}