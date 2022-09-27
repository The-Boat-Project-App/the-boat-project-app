import { useEffect } from 'react'
import { Text, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import CustomButton from '@components/CustomButton/CustomButton'
import { getAccessToken, deleteAccessToken } from 'accessToken'
import LottieView from 'lottie-react-native'

interface MatthieuScreenProps {}

const MatthieuScreen: React.FunctionComponent<MatthieuScreenProps> = ({}) => {
  useEffect(() => {
    const getTokenInSecureStore = async () => {
      getAccessToken()
    }
    getTokenInSecureStore().catch(console.error)
  }, [])
  const emptySecureStore = async () => {
    deleteAccessToken()
  }
  return (
    <View className='flex-1 items-center justify-center'>
      <LottieView source={require('../../../assets/animations/loader.json')} autoPlay loop />
    </View>
  )
}

export default MatthieuScreen
