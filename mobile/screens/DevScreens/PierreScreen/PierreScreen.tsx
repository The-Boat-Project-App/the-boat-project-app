import { Text, View } from 'react-native'

interface PierreScreenProps {}

const PierreScreen: React.FunctionComponent<PierreScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>PierreScreen</Text>
    </View>
  )
}

export default PierreScreen
