import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import RootNavigator from './navigation'
import { View } from 'react-native'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { HomeIcon } from 'react-native-heroicons/solid'

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style='auto' />
    </>
  )
}
