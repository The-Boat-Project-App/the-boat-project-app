import { useWindowDimensions, Text, View } from 'react-native'
import MapView from 'react-native-maps'

interface CarteScreenProps {}

const CarteScreen: React.FunctionComponent<CarteScreenProps> = ({}) => {
  const size = useWindowDimensions()
  const { width, height } = size
  return (
    <View className='flex-1 items-center justify-center bg-orange-300'>
      <MapView className='h-screen w-screen' />
    </View>
  )
}

export default CarteScreen