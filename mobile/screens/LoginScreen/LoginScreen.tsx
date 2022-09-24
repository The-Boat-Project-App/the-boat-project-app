import { useState } from 'react'
import { View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '@components/CustomButton/CustomButton'

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifiedPassword, setVerifiedPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const navigation = useNavigation()
  const goHome = () => navigation.navigate('BottomTabs')
  const goDev = () => navigation.navigate('Dev')
  return (
    <View className='flex-1 items-center justify-center bg-blue-100'>
      <CustomButton buttonTitle='Se connecter' onPress={goHome} />
      <CustomButton buttonTitle='Dev' onPress={goDev} />
      <View className='mt-10 '>
        <TextInput
          className='bg-red-300'
          onChangeText={(val) => setEmail(val)}
          value={email}
          placeholder='Adresse Email'
        />
        <TextInput
          className='bg-red-300'
          onChangeText={(val) => setPassword(val)}
          value={password}
          secureTextEntry={true}
          placeholder='Mot de passe'
        />
        <TextInput
          className='bg-red-300'
          onChangeText={(val) => setVerifiedPassword(val)}
          value={verifiedPassword}
          secureTextEntry={true}
          placeholder='Mot de passe'
        />
        <TextInput
          className='bg-red-300'
          onChangeText={(val) => setFirstName(val)}
          value={firstName}
          placeholder='First Name'
        />
        <TextInput
          className='bg-red-300'
          onChangeText={(val) => setLastName(val)}
          value={lastName}
          placeholder='Last Name'
        />
      </View>
    </View>
  )
}

export default LoginScreen
