import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, ActionSheetIOS } from 'react-native'
import HomeStackNavigator from './HomeStack'
import { setAccessToken, getRefreshToken } from 'accessToken'
import LottieView from 'lottie-react-native'
import { userDataVar } from '../variables/userData'
import * as NavigationBar from 'expo-navigation-bar'

const RootNavigator = () => {
  const [loading, setLoading] = useState(true)
  NavigationBar.setBackgroundColorAsync('white')
  useEffect(() => {
    const refreshToken = async () => {
      const refreshToken = await getRefreshToken()
      console.log('token before fetch', refreshToken)
      await fetch(`${process.env.API_URL}/refresh_token_from_mobile`, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
          Authorization: `Bearer ${refreshToken}`,
        }),
      }).then(async (x) => {
        const response = await x.json()
        console.log('response', response)
        // console.log('accessToken', accessToken)
        // console.log('refreshToken', refreshToken)

        setAccessToken(response.accessToken, response.refreshToken)
        userDataVar({
          firstName: response.firstName,
          lastName: response.lastName,
          avatar: response.avatar,
          status: response.status,
        })
        setLoading(false)
      })
    }
    refreshToken()
  }, [])

  if (loading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <LottieView source={require('../assets/animations/loader.json')} autoPlay loop />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default RootNavigator
