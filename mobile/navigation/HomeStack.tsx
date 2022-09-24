import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from './types'

import LoginScreen from '@screens/LoginScreen/LoginScreen'
import BottomTabs from './Tabs'

//* DEV SCREENS
import DevScreen from '@screens/DevScreen/DevScreen'
import AllanScreen from '@screens/DevScreens/AllanScreen/AllanScreen'
import CamilleScreen from '@screens/DevScreens/CamilleScreen/CamilleScreen'
import MatthieuScreen from '@screens/DevScreens/MatthieuScreen/MatthieuScreen'
import PierreScreen from '@screens/DevScreens/PierreScreen/PierreScreen'
import AboubacarScreen from '@screens/DevScreens/AboubacarScreen/AboubacarScreen'
import MikaScreen from '@screens/DevScreens/MikaScreen/MikaScreen'
//* DEV SCREENS
const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Login' component={LoginScreen} />
      <HomeStack.Screen name='Dev' component={DevScreen} />
      <HomeStack.Screen name='Mika' component={MikaScreen} />
      <HomeStack.Screen name='Aboubacar' component={AboubacarScreen} />
      <HomeStack.Screen name='Pierre' component={PierreScreen} />
      <HomeStack.Screen name='Matthieu' component={MatthieuScreen} />
      <HomeStack.Screen name='Allan' component={AllanScreen} />
      <HomeStack.Screen name='Camille' component={CamilleScreen} />

      <HomeStack.Screen name='BottomTabs' component={BottomTabs} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
