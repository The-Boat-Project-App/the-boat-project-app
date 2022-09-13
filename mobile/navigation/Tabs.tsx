import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeIcon, MapIcon } from 'react-native-heroicons/solid'
import { BottomTabNavigatorParamList } from './types'
import HomeStackNavigator from './HomeStack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import MapScreen from '../screens/MapScreen/MapScreen'
import OtherScreen from '../screens/OtherScreen/OtherScreen'
import CarteScreen from '../screens/CarteScreen/CarteScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Other' component={OtherScreen} />
      <Tab.Screen name='Carte' component={CarteScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs
