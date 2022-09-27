import { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from './types'
import { getAccessToken } from '../accessToken'

import SignUpScreen from '@screens/SignUpScreen/SignUpScreen'
import SignInScreen from '@screens/SignInScreen/SignInScreen'
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
      <HomeStack.Screen name='BottomTabs' component={BottomTabs} />
      <HomeStack.Screen name='SignIn' component={SignInScreen} />
      <HomeStack.Screen name='SignUp' component={SignUpScreen} />
      <HomeStack.Screen name='Dev' component={DevScreen} />
      <HomeStack.Screen name='Mika' component={MikaScreen} />
      <HomeStack.Screen name='Aboubacar' component={AboubacarScreen} />
      <HomeStack.Screen name='Pierre' component={PierreScreen} />
      <HomeStack.Screen name='Matthieu' component={MatthieuScreen} />
      <HomeStack.Screen name='Allan' component={AllanScreen} />
      <HomeStack.Screen name='Camille' component={CamilleScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
