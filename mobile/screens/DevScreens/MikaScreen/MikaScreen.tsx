import { Text, View } from 'react-native'

interface MikaScreenProps {}

const MikaScreen: React.FunctionComponent<MikaScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>MikaScreen</Text>
    </View>
  )
}

export default MikaScreen
