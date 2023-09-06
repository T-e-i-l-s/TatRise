import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import styles from './styles'
import * as Progress from 'react-native-progress';
import { useState } from 'react';

export default function App({ route, navigation }) {

  const param = route.params

  const [progress,setProgress] = useState(param['num'])


  async function beginLesson () {
    
    navigation.navigate('lesson',route.params)

  }


  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.topBlock}>


        <View style={styles.progressBlock}>

          <View style={styles.infoBlock}>

            <Text style={styles.progressText}>Ты на верном пути!</Text>

            <Progress.Bar progress={progress} width={null} height={15} color='#224d44' style={styles.progress} />

          </View>

        </View>


        <View style={styles.beginLesson} onStartShouldSetResponder={() => beginLesson()}>
          <Text style={styles.beginLessonText}>Пройти урок</Text>
        </View>



        <View style={styles.row}>

          <View style={styles.block}>

            <Text style={styles.blockTitle}>Карточки со словами</Text>
            <Image
            source={require('../../assets/icons/anki.png')}
            style={styles.blockImage}/>

          </View>

          <View style={styles.block}>

            <Text style={styles.blockTitle}>Погружение в культуру</Text>
            <Image
            source={require('../../assets/icons/history.png')}
            style={styles.blockImage}/>

          </View>

        </View>



        <View style={styles.row}>

          <View style={styles.block}>

            <Text style={styles.blockTitle}>Как говорить правильно?</Text>
            <Image
            source={require('../../assets/icons/spech.png')}
            style={[styles.blockImage,{
              height: 50,
              width: 50}]}/>

          </View>

          <View style={styles.block}>

            <Text style={styles.blockTitle}>Важно при изучении</Text>
            <Image
            source={require('../../assets/icons/book.png')}
            style={styles.blockImage}/>

          </View>

        </View>

        
      </View>


      <View style={styles.tabBar}>


        <View style={styles.tab}>
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


    </View>

  );

}