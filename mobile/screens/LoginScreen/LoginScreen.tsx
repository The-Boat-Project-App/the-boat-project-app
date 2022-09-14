import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '@components/CustomButton/CustomButton'

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const navigation = useNavigation()
  const goHome = () => navigation.navigate('BottomTabs')
  return (
    <View className='flex-1 items-center justify-center bg-blue-100'>
      <CustomButton buttonTitle='Se connecter' onPress={goHome} />
    </View>
  )
}

export default LoginScreen
