import { Text, View } from 'react-native'

interface MatthieuScreenProps {}

const MatthieuScreen: React.FunctionComponent<MatthieuScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>MatthieuScreen</Text>
    </View>
  )
}

export default MatthieuScreen
