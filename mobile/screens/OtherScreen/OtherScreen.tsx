import { Text, View } from 'react-native'
import { Counter } from '../../features/counter/Counter'

interface OtherScreenProps {}

const OtherScreen: React.FunctionComponent<OtherScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>OtherScreen</Text>
      <Counter />
    </View>
  )
}

export default OtherScreen
