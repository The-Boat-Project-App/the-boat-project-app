import { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'react-native'
import { API_URL } from 'react-native-dotenv'

import CustomButton from '../../components/CustomButton/CustomButton'

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
  return (
    <View className='flex-1 items-center justify-center bg-red-300'>
      <Text className='font-bold text-xl'>Au boulot ! ⛵</Text>
      <CustomButton buttonTitle='Fetcher le serveur' onPress={fetchData} />
      <Text>{serverSurprise}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default HomeScreen
