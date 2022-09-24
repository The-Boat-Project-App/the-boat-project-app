import { Text, View } from 'react-native'
import FetchComponent from '@components/FetchComponent/FetchComponent'

interface MessagesScreenProps {}

const MessagesScreen: React.FunctionComponent<MessagesScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>MessagesScreen</Text>
      <FetchComponent />
    </View>
  )
}

export default MessagesScreen
