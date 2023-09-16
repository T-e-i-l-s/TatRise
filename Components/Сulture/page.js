// Импортируем библиотеки и модули
import { StatusBar } from 'expo-status-bar';
import { Animated, Image, Text, View, FlatList, Linking, ImageBackground } from 'react-native'
import styles from './styles'
import React, {useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';


// Факты и ежедневная подборка
const facts = [
  ['Поддержка родных', 'Татары чтобы выжить в тяжелые времена, \nвремена преследований и геноцида – \nвсегда помогали родным чем могли \nи постоянно поддерживали связь.'],
  ['Образование','Всегда образование было обязательным \nдля каждого татарина. \nНеобразованные татары подвергались \nнасмешкам и всегда были изгоями \nв татарских общинах.'],
  ['Уважение к старшим','Глава семьи у татар – \nэто самый старший мужчина - Бабай\nи после него – самая старшая женщина – \nкак правило его супруга Абыстай.'],
  ['Религия','Ещё в X веке булгары узнали \nпро ислам и сделали его \nгосударственной религией. С тех пор \nтатарский народ неразрывно связан \nс этим вероисповеданием.'],
  ['Жилище','В татарском жилище есть два обязательных \nатрибута. Первый — шамаиль на стене. \nЭто любой небольшой отрывок из Корана. \nВторой атрибут жилья — \nсундуки красного и зелёного цвета.'],
  ['Одежда','Ткани насыщенных цветов, орнаменты, \nукрашения — всё это про татарский костюм.\nМужчины ходят в рубахе-тунике до колен. \nУ женщин основной элемент \nгардероба — туника, но длиннее.']
]

const links = [
  ['Татарстан',require('../../assets/links/tatarstan.png'),  'https://www.youtube.com/watch?v=M1Znixq-fvw&t=55s'],
  ['Наши артисты',require('../../assets/links/show.png'),'https://www.last.fm/ru/tag/tatar/artists'],
  ['Рецепты татарской кухни',require('../../assets/links/eat.png'),   'https://www.russianfood.com/recipes/bytype/?fid=177'],
  ['Татар.Бу Хакатон',require('../../assets/links/hakaton.png'),   'http://selet.biz/news/startuet-proekt-tatar-bu-khakaton/']
]

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(links)
shuffle(facts)

export default function App({ route, navigation }) {

  
  const translateX = useRef(
    new Animated.Value(500)
  ).current
  
  const Opacity = useRef(
    new Animated.Value(0)
  ).current


  React.useEffect(() => { // Хук загрузки данных при переходе на страницу

    const focusHandler = navigation.addListener('focus', async () => {

      Animated.timing(Opacity,{
        toValue: 100,
        duration: 12000,
      }).start()

      Animated.timing(translateX,{
        toValue: 0,
        duration: 500,
      }).start()

    });

    return focusHandler;

  }, [navigation]);

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <ImageBackground source={require('../../assets/tat.png')} 
                            style={styles.background}>
        <Animated.View style={[styles.topBlock,{transform:[{translateX: translateX}]}]}>


          <Text style={[styles.superTitle, {marginTop: 15}]}>Факты:</Text>

          <View style={{width:'100%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              scrollEnabled={true} 
              horizontal={true} 
              style={styles.factsList} 
              data={facts} 
              renderItem={({ item }) => (

                <Animated.View style={[styles.factBlock,{opacity: Opacity}]}>
                  <Text style={styles.title}>{item[0]}</Text>
                  <Text style={styles.text}>{item[1]}</Text>
                </Animated.View>

            )}/>
          </View>  


          <Text style={styles.superTitle}>Ежедневная подборка:</Text>

          <View style={{width:'100%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              scrollEnabled={true} 
              horizontal={true} 
              style={styles.factsList} 
              data={links} 
              renderItem={({ item }) => (

                <Animated.View style={[styles.linkBlock,{opacity: Opacity}]} onStartShouldSetResponder={async () => {
                  let plants = JSON.parse(await AsyncStorage.getItem('plants'))
                  let achiv = JSON.parse(await AsyncStorage.getItem('achivs'))
                  let count = await AsyncStorage.getItem('count')
                  if ( plants != null && !achiv.includes('Инет') ) {
                    plants.push(require('../../assets/flowers/plant8.png'))
                    achiv.push('Инет')
                    count++
                  }
                  
                  AsyncStorage.setItem('plants',  JSON.stringify(plants))
                  AsyncStorage.setItem('achivs',  JSON.stringify(achiv))
                  AsyncStorage.setItem('count',  count)
                }}>
                  <Image
                  source={item[1]}
                  style={styles.linkImage}/>
                  <Text style={styles.linkTitle} onPress={() => {Linking.openURL(item[2]);}}>{item[0]}</Text>
                </Animated.View>

            )}/>
          </View>

        </Animated.View>
        

        <View style={styles.tabBar}>


          <View style={styles.tab} onStartShouldSetResponder={ async () => {
            await Animated.timing(translateX,{
              toValue: 500,
              duration: 500,
            }).start()
            setTimeout(() => {
              navigation.navigate('main',route.params)
            },300)}}>
            <Image
            source={require('../../assets/icons/home2.png')}
            style={styles.tabImage}/>
          </View>


          <View style={styles.tab}>
            <Image
            source={require('../../assets/icons/history.png')}
            style={styles.tabImage}/>
          </View>


        </View>

      </ImageBackground>

    </SafeAreaView>

  );

}