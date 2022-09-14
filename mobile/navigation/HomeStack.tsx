import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from './types'

import LoginScreen from '@screens/LoginScreen/LoginScreen'
import BottomTabs from './Tabs'
const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Login' component={LoginScreen} />
      <HomeStack.Screen name='BottomTabs' component={BottomTabs} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
