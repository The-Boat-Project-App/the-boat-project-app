import { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from './types'
import { getAccessToken } from '../accessToken'

import SignUpScreen from '@screens/SignUpScreen/SignUpScreen'
import SignInScreen from '@screens/SignInScreen/SignInScreen'
import PostScreen from '@screens/PostScreen/PostScreen'
import PreviewPostScreen from '@screens/PreviewPostScreen/PreviewPostScreen'
import NewsScreen from '@screens/NewsScreen/NewsScreen'
import AllPostsScreen from '@screens/AllPostsScreen/AllPostsScreen'
import BottomTabs from './Tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

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
    <SafeAreaProvider>
      <StatusBar style='dark' backgroundColor='white' />

      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name='BottomTabs' component={BottomTabs} />
        <HomeStack.Screen name='SignIn' component={SignInScreen} />
        <HomeStack.Screen name='SignUp' component={SignUpScreen} />
        <HomeStack.Screen name='Post' component={PostScreen} />
        <HomeStack.Screen name='AllPosts' component={AllPostsScreen} />

        <HomeStack.Screen name='PreviewPost' component={PreviewPostScreen} />

        <HomeStack.Screen name='News' component={NewsScreen} />

        <HomeStack.Screen name='Dev' component={DevScreen} />
        <HomeStack.Screen name='Mika' component={MikaScreen} />
        <HomeStack.Screen name='Aboubacar' component={AboubacarScreen} />
        <HomeStack.Screen name='Pierre' component={PierreScreen} />
        <HomeStack.Screen name='Matthieu' component={MatthieuScreen} />
        <HomeStack.Screen name='Allan' component={AllanScreen} />
        <HomeStack.Screen name='Camille' component={CamilleScreen} />
      </HomeStack.Navigator>
    </SafeAreaProvider>
  )
}

export default HomeStackNavigator
