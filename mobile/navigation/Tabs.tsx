import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
} from 'react-native-heroicons/solid'
import { PlusCircleIcon as PlusCircleIconOutline } from 'react-native-heroicons/outline'
import { Text } from 'react-native'
import { BottomTabNavigatorParamList } from './types'
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import MapScreen from '@screens/MapScreen/MapScreen'
import MessagesScreen from '@screens/MessagesScreen/MessagesScreen'
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
          } else if (route.name === 'Messages') {
            return <ChatBubbleBottomCenterTextIcon size={size} color={color} />
          } else if (route.name === 'Profile') {
            return <UserIcon size={size} color={color} />
          } else if (route.name === 'AddPost') {
            return <PlusCircleIconOutline size={size * 1.5} color={color} />
          } else if (route.name === 'Map') {
            return <MapIcon size={size} color={color} />
          }

          // You can return any component that you like here!
        },
        // tabBarLabel: () => {
        //   if (route.name === 'Home') {
        //     return <Text>Accueil</Text>
        //   } else if (route.name === 'Messages') {
        //     return <Text>Accueil</Text>
        //   } else if (route.name === 'Profile') {
        //     return <Text>Accueil</Text>
        //   } else if (route.name === 'AddPost') {
        //     return <Text>Accueil</Text>
        //   } else if (route.name === 'Map') {
        //     return <></>
        //   }

        //   // You can return any component that you like here!
        // },
        tabBarActiveTintColor: '#87BC23',
        tabBarInactiveTintColor: '#0C617D',
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name='Map'
        component={MapScreen}
        options={{
          tabBarLabel: 'Carte',
        }}
      />
      <Tab.Screen
        name='AddPost'
        component={AddPostScreen}
        options={{
          tabBarLabel: 'Publier',
        }}
      />
      <Tab.Screen
        name='Messages'
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
