import { StatusBar } from 'expo-status-bar'
import { Animated, Image, Text, TouchableHighlight, View, FlatList, ImageBackground } from 'react-native'
import styles from './styles'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { граматика,фонетика,слЗапас } from '../Lesson/lessons'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function App({ route, navigation }) {  const param = route.params
  const [array, setArray] = useState([])
  const Opacity = useRef(
    []
  ).current

  // Хук загрузки данных при переходе на страницу
  React.useEffect(() => { 
    const focusHandler = navigation.addListener('focus', async () => {
      for (let i = 0; i < 5; i++) {
        await Opacity.push(new Animated.Value(i*-0.5))
        Animated.timing(Opacity[i],{
          toValue: 100,
          duration: 5000,
        }).start()
      }
      if ( param['title'] == 'Грамматика' ) {
        setArray([
          ['В татарском языке нет родов', 'местоимения он, она, оно в татарском заменяются на ул. \nНапример:\nДевочка ест. Мальчик ест. \nНа татарском - ул ашый', ['Понятно']],
          ['Форма принадлежности','Чтобы сказать что предмет кому-то пренадлежит нужно добавить к слову особое окончание.\nНапример:\nалма — яблоко\nалма-м — мое яблоко\nалма-быз — наше яблоко\nалма-ң — твое яблоко\nалма-гыз — ваше яблоко\nалма-сы — его/ее яблоко',['Понятно']],
          ['Числительные и Прилагательные','В татарском языке числительные и прилагательные, находясь перед существительными, не склоняются, не изменяются, то есть не согласуются с существительными. (Ике кыз — две девочки; матур кыз — красивая девочка)',['Понятно']],
          ['Множественное число','Множественное число имен существительных выражается аффиксами -лар/-лəр, -нар/-нəр. К словам, оканчивающимся на носовые звуки м, н, ң прибавляются последние:\n1. кеше-лəр (люди)\n2. əби-лəр (бабушки)\n3. кҮз-лəр (глаза) ',['Понятно']],
          ['Вопросительные местоимения','•  кем — кто? \n•  нəрсə — что? \n•  ни — что? \n•  кайда [къайда] — где? \n•  кайчан [къайчан] — когда? \n•  ничек — как? \n•  кҮпме — сколько? \n•  ничə — сколько? \n•  кая [къайа] — куда? \n•  нинди — какой?',['Понятно']],
        ])
      } else if ( param['title'] == 'Фонетика' ) {
        setArray([
          ['Сингармонизм', 'В татарском языке гласные звуки составляют пары по твердости и мягкости.\n а — ə, у — Ү, ы — е, о — Ө \nЕсли в первом слоге слова стоит твердая гласная(а, у, ы, о), то во всех последующих тоже будут стоять твердые. Это точно также работает и с мягкими(ә, ү, ө, е)',['Понятно']],
          ['Словесное ударение','В татарском языке словесное ударение стремится на последний слог в слове, например китАп(книга).',['Понятно']],
          ['Твердые и мягкие афиксы','В татарском языке каждый аффикс имеет твердый и мягкий варианты, что объяснимо законом сингармонизма. Например:\na) бар-а (идет), кил-ə (приходит)\nb) бар-ды (сходил), бəр-де (ударил)\nc) яз-у (писание, письмо), бел-Ү (знание).',['Понятно']],
          ['Транскрипция','1. а — огубленое а в первом слоге \n1. w — губно-губной звук (похожий на английский)\n2. къ — глубокозаднеязычный глухой звук \n3. « — глубокозаднеязычный звонкий звук \n4. — штрих для обозначения ударения \n5. [] — границы транскрипции\n6. / — маленькая пауза \n7. // — большая пауза',['Понятно']],
          ['Долгие и краткие звуки','звуки а-ə, у-Ү, и — долгие, о-ө, ы-е — краткие',['Понятно']],
        ])
      } else {
        setArray([
          ['Базовые слова и выражения', 'Чтобы уже начать общаться с татарами тебе пригодятся эти слова:\nИсәнмесез - Здравствуйте\nСәлам - Привет\nРәхмәт - Спасибо\nЗинһар - Пожалуйста',['Понятно']],
          ['Моя семья','Әни - Мама\nӘти - Папа\nАбый - Брат\nАпа - Сестра',['Понятно']],
          ['Числительные','1 - бер\n2 - ике\n3 - өч\n4 - дүрт\n5 - биш',['Понятно']],
          ['Числительные','шесть - алты\nсемь - җиде\nвосемь - сигез\nдевять - тугыз\nноль - нуль',['Понятно']],
          ['Дети','мәктәп - школа\nбалалар - дети\nбалалар бакчасы - детский сад',['Понятно']],
        ])
      }
    });
    return focusHandler
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>
        <View style={[styles.header]}>
          <TouchableHighlight underlayColor={'rgba(255, 0, 255,0)'} onPress={async () => {
            let plants = JSON.parse(await AsyncStorage.getItem('plants'))
            let achiv = JSON.parse(await AsyncStorage.getItem('achivs'))
            if ( plants != null && !achiv.includes('Теоретик') ) {
              plants.push(require('../../assets/flowers/plant10.png'))
              achiv.push('Теоретик')
            }
            AsyncStorage.setItem('plants',  JSON.stringify(plants))
            AsyncStorage.setItem('achivs',  JSON.stringify(achiv))
            navigation.navigate('lessons',route.params)
          }}>
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
            renderItem={({ item, index }) => (
              <Animated.View style={[styles.devBlock,{opacity: Opacity[index]}]}>
                <Text style={styles.title}>{item[0]}</Text>
                <Text style={styles.text}>{item[1]}</Text>
              </Animated.View>
          )}/>
        </View>  
      </ImageBackground>
    </SafeAreaView>
  )
}