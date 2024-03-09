import { StatusBar } from 'expo-status-bar'
import { Animated, Image, Text, TouchableHighlight, View, FlatList } from 'react-native'
import styles from './styles'
import React, {useRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Факты
const facts = [
  ['Не торопитесь!','Пока не усвоили материал, не начинайтеновый.'],
  ['«Повторение — мать учения»','Не уставайте повторять изучаемый материал.'],
  ['Стабильность','Занимайтесь изучаемым Вами языком ежедневно.'],
  ['Связь','Слова запоминайте в тесной связи с определенной ситуацией и темой.'],
  ['Чтение','Постоянно читайте легкие и интересные тексты на изучаемом языке.'],
  ['Повторяйте','Постоянно повторяйте про себя и вслух стихи, песни, фразеологические единицы, пословицы и поговорки, предложения.'],
  ['Слушайте','Слушайте по радио татарскую речь и старайтесь найти слова, которые уже вам знакомы.'],
  ['Смотрите видео на татарском','Смотрите по телевизору передачи на татарском языке,обратите внимание на знакомые вам слова.'],
  ['Произношение','Обратите внимание, что в татарском языке многие слова произносятся не так, как пишутся, что связано с графикой на основе кириллицы и правилами правописания.'],
  ['Ходите в театры','Ходите чаще в Татарский Академический театр, где ведется перевод спектакля на русский язык. Внимательно вслушивайтесь в речь артистов, постарайтесь понять знакомые вам слова и выражения.'],
  ['Слушайте музыку','Знаете ли вы, что через песни можно изучить язык? Слушайте татарские песни, запоминайте их и пойте не только про себя, но и среди друзей-татар. Связанные с мелодией слова запоминаются легче.'],
  ['Запоминайте слова и выражения','Написанные потатарски на плакатах, объявлениях, афишах, в газетах; находите знакомые Вам слова и выражения. Повторяйте их.'],
  ['Запоминайте самые популярные слова','Запоминайте не все слова, а — самые употребительные, которых в каждом языке не так уж и много.'],
  ['Не стесняйтесь','Говорите по-татарски.'],
  ['Читайте вслух','Громко читайте тексты на татарском языке.'],
  ['Общайтесь с носителями','Постарайтесь общаться с соседями — друзьямитатарами по татарски; не стесняйтесь, ведь они прекрасно понимают, что обучение языку стоит больших трудов, и будут рады услышать от вас хоть несколько выражений. Уверена, это им будет очень приятно!'],
  ['Заведите словарик','Вы можете записывать слова, которые мы будем вводить в уроки и упражнения.']
]

export default function App({ route, navigation }) {
  const [list, setList] = useState([])
  const Opacity = useRef(
    []
  ).current

  // Хук загрузки данных при переходе на страницу
  React.useEffect(() => { 
    const focusHandler = navigation.addListener('focus', async () => {
      for (let i = 0; i < facts.length; i++) {
        await Opacity.push(new Animated.Value(i*-0.5))
        Animated.timing(Opacity[i],{
          toValue: 100,
          duration: 5000,
        }).start()
      }
      setList(facts)
    });
    return focusHandler;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={[styles.header,{opacity: Opacity[0]}]}>
        <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={() => navigation.navigate('main',route.params)}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.back}/>
        </TouchableHighlight>
      </Animated.View>

      <View style={{width:'90%'}}>
        <FlatList
          scrollEnabled={true} 
          style={styles.factsList} 
          data={list} 
          renderItem={({ item, index }) => (
            <Animated.View style={[styles.factBlock,{opacity: Opacity[index]}]}>
              <Text style={styles.title}>{item[0]}</Text>
              <Text style={styles.text}>{item[1]}</Text>
            </Animated.View>
        )}/>
      </View>  

    </SafeAreaView>
  )
}