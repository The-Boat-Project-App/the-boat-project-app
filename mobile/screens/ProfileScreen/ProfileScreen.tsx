import { Text, View } from 'react-native'

interface ProfileScreenProps {}

const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-green-300'>
      <Text className='font-bold text-xl'>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen
