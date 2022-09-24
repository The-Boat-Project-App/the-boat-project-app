import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '@components/CustomButton/CustomButton'

interface DevScreenProps {}

const DevScreen: React.FunctionComponent<DevScreenProps> = ({}) => {
  const navigation = useNavigation()

  const goPierre = () => navigation.navigate('Pierre')
  const goMika = () => navigation.navigate('Mika')
  const goAboubacar = () => navigation.navigate('Aboubacar')
  const goMatthieu = () => navigation.navigate('Matthieu')
  const goCamille = () => navigation.navigate('Camille')
  const goAllan = () => navigation.navigate('Allan')

  return (
    <View className='flex-1 items-center justify-center '>
      <Text className='font-bold text-xl'>DevScreen</Text>
      <CustomButton buttonTitle='Pierre' onPress={goPierre} />
      <CustomButton buttonTitle='Mika' onPress={goMika} />
      <CustomButton buttonTitle='Aboubacar' onPress={goAboubacar} />
      <CustomButton buttonTitle='Matthieu' onPress={goMatthieu} />
      <CustomButton buttonTitle='Camille' onPress={goCamille} />
      <CustomButton buttonTitle='Allan' onPress={goAllan} />
    </View>
  )
}

export default DevScreen
