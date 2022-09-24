import { Text, View } from 'react-native'

interface CamilleScreenProps {}

const CamilleScreen: React.FunctionComponent<CamilleScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>CamilleScreen</Text>
    </View>
  )
}

export default CamilleScreen
