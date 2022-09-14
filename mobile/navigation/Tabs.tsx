import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  PlusCircleIcon,
} from 'react-native-heroicons/solid'

import { BottomTabNavigatorParamList } from './types'
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import MapScreen from '@screens/MapScreen/MapScreen'
import OtherScreen from '@screens/OtherScreen/OtherScreen'
import CarteScreen from '@screens/CarteScreen/CarteScreen'
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen'
import AddPostScreen from '@screens/AddPostScreen/AddPostScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />
          } else if (route.name === 'Other') {
            return <ChatBubbleBottomCenterTextIcon size={size} color={color} />
          } else if (route.name === 'Profile') {
            return <UserIcon size={size} color={color} />
          } else if (route.name === 'AddPost') {
            return <PlusCircleIcon size={size} color={color} />
          } else if (route.name === 'Carte') {
            return <MapIcon size={size} color={color} />
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: '#87BC23',
        tabBarInactiveTintColor: '#0C617D',
        headerShown: false,
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Other' component={OtherScreen} />
      <Tab.Screen name='AddPost' component={AddPostScreen} />
      <Tab.Screen name='Carte' component={CarteScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs
