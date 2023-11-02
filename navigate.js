import start from './Components/Start/page'
import splash from './Components/Splash/page'
import main from './Components/Main/page'
import culture from './Components/Сulture/page'
import lesson from './Components/Lesson/page'
import test from './Components/Test/page'
import lessonFinish from './Components/LessonFinish/page'
import anki from './Components/Anki/page'
import facts from './Components/facts/page'
import developers from './Components/developers/page'
import list from './Components/List/page'
import lessons from './Components/Lessons/page'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate () {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={ splash }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
      />
      <Stack.Screen
        name="start"
        component={ start }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
      />
      <Stack.Screen
        name="test"
        component={ test }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
      />
      <Stack.Screen
        name="main"
        component={ main }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'num': 0, 'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="culture"
        component={ culture }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'num': 0, 'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="lesson"
        component={ lesson }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="lessons"
        component={ lessons }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'title': 'Граматика'}}
      />
      <Stack.Screen
        name="lessonFinish"
        component={ lessonFinish }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="anki"
        component={ anki }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
      />
      <Stack.Screen
        name="facts"
        component={ facts }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="developers"
        component={ developers }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'levels': [0,0,0,0]}}
      />
      <Stack.Screen
        name="list"
        component={ list }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'title': 'Граматика'}}
      />
    </Stack.Navigator>
  </NavigationContainer>

}
