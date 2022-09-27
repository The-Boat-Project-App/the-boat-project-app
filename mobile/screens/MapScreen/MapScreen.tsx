import { useWindowDimensions, Text, View, StatusBar } from 'react-native'
import MapView from 'react-native-maps'

interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  const size = useWindowDimensions()
  const { width, height } = size
  return (
    <View className='flex-1 items-center justify-center'>
      <StatusBar barStyle='light-content' backgroundColor='#0C617D' />

      <MapView className='h-screen w-screen' />
    </View>
  )
}

export default MapScreen
