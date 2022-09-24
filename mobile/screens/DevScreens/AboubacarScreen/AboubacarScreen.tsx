import { Text, View } from 'react-native'

interface AboubacarScreenProps {}

const AboubacarScreen: React.FunctionComponent<AboubacarScreenProps> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-300'>
      <Text className='font-bold text-xl'>AboubacarScreen</Text>
    </View>
  )
}

export default AboubacarScreen
