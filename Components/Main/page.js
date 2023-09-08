import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import styles from './styles'
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ route, navigation }) {

  const param = route.params

  const [progress,setProgress] = useState(param['num'])


  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', async () => {

      const lvl = await AsyncStorage.getItem('level')
      setProgress(parseFloat(lvl))

    });

    return focusHandler;

  }, [navigation]);


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.topBlock}>

        <View style={styles.progressBlock}>

          <View style={styles.infoBlock}>

            <Text style={styles.progressText}>Ты на верном пути!</Text>

            <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />

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