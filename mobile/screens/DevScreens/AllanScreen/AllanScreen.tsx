import { Text, View } from 'react-native'

interface AllanScreenProps {}

const AllanScreen: React.FunctionComponent<AllanScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>AllanScreen</Text>
    </View>
  )
}

export default AllanScreen
