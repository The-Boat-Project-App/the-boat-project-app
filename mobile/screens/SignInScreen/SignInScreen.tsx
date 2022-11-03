import { useState } from 'react'
import { View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '@components/CustomButton/CustomButton'
import { useLoginMutation } from '../../graphql/graphql'
import { setAccessToken } from '../../accessToken'
import { accessTokenVar } from '../../variables/accessToken'
import { userDataVar } from '../../variables/userData'

interface SignInScreenProps {}

const SignInScreen: React.FunctionComponent<SignInScreenProps> = ({}) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [login] = useLoginMutation()

  const navigation = useNavigation()

  const signIn = async () => {
    const response = await login({
      variables: {
        UsersLoginInput: {
          email,
          password,
        },
      },
    })
    console.log('response', response)
    if (response && response.data) {
      setAccessToken(response.data.loginUsers.accessToken, response.data.loginUsers.refreshToken)
      accessTokenVar(response.data.loginUsers.accessToken)
      userDataVar({
        firstName: response.data.loginUsers.firstName,
        lastName: response.data.loginUsers.lastName,
        avatar: response.data.loginUsers.avatar,
        status: response.data.loginUsers.status,
      })
      navigation.navigate('BottomTabs', { screen: 'Home' })
    }
  }

  const goSignUp = () => navigation.navigate('SignUp')

  return (
    <View className='flex-1 items-center justify-center bg-blue-100'>
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

        <CustomButton buttonTitle='Se connecter' onPress={signIn} />

        <CustomButton buttonTitle='Se créer un compte' onPress={goSignUp} />
      </View>
    </View>
  )
}

export default SignInScreen
