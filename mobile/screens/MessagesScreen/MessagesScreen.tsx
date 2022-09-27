import { Text, View } from 'react-native'

interface MessagesScreenProps {}

const MessagesScreen: React.FunctionComponent<MessagesScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='font-bold text-xl'>MessagesScreen</Text>
    </View>
  )
}

export default MessagesScreen
