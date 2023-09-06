import start from './Components/Start/page'
import splash from './Components/Splash/page'
import main from './Components/Main/page'
import lesson from './Components/Lesson/page'
import test from './Components/Test/page'

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
        name="lesson"
        component={ lesson }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
        initialParams={{'levels': [0,0,0,0]}}
      />
    </Stack.Navigator>
  </NavigationContainer>

}
