import { Text, View } from 'react-native'

interface AddPostScreenProps {}

const AddPostScreen: React.FunctionComponent<AddPostScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-red-100'>
      <Text className='font-bold text-xl'>AddPostScreen</Text>
    </View>
  )
}

export default AddPostScreen
