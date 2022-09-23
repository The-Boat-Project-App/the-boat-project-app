import { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'react-native'
import { API_URL } from 'react-native-dotenv'
import HeaderTBP2 from '@components/HeaderTBP2/HeaderTBP2'

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  console.log('API_URL', API_URL)
  const [serverSurprise, setServerSurprise] = useState('...')
  const fetchData = () => {
    console.log('fetching data from server...')
    fetch(`${API_URL}/test`)
      .then((res) => res.json())
      .then((data) => setServerSurprise(data.surprise))
  }
  return <View className='flex-1 items-center justify-center bg-red-300'></View>
}

export default HomeScreen
