import { Text, View } from 'react-native'

interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-green-300'>
      <Text className='font-bold text-xl'>MapScreen</Text>
    </View>
  )
}

export default MapScreen
