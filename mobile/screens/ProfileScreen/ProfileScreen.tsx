import { Text, TouchableOpacity, View, ScrollView, Image, StyleSheet } from 'react-native'
import {
  UserIcon,
  MicrophoneIcon,
  ListBulletIcon,
  ChevronRightIcon,
  BellAlertIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  CameraIcon,
} from 'react-native-heroicons/solid'

import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { deleteAccessToken, getAccessToken } from 'accessToken'
import SignInScreen from '@screens/SignInScreen/SignInScreen'
import { useReactiveVar, gql, useQuery } from '@apollo/client'
import { accessTokenVar } from '../../variables/accessToken'
import { useGetUserDataQuery } from '../../graphql/graphql'
import { userDataVar } from '../../variables/userData'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ProfileScreenProps {}

const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({}) => {
  const isFocused = useIsFocused()
  const [userToken, setUserToken] = useState<string | null>(null)
  const navigation = useNavigation()
  const tokeninstate = useReactiveVar(accessTokenVar)
  const userDataInApollo = useReactiveVar(userDataVar)
  console.log('userDataInApollo', userDataInApollo)

  const emptySecureStore = async () => {
    console.log('suppression de l access token et retour à SignInScreen')
    await deleteAccessToken()
    accessTokenVar('')
    userDataVar({ firstName: '', lastName: '' })
    setUserToken(null)
  }

  useEffect(() => {
    const isTokenExisting = async () => {
      const myVariable = await getAccessToken()

      setUserToken(myVariable)
    }
    isTokenExisting()
    // setIsLoggedIn(checkedToken)
  }, [isFocused])

  if (!userToken) {
    return <SignInScreen />
  } else {
    return (
      <SafeAreaView className='flex-1 items-center text-center '>
        <View className='flex-row-reverse'>
          <Image
            className='w-40 h-40 rounded-full mt-20'
            source={{
              uri: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            }}
          />
          <TouchableOpacity className='absolute mt-52'>
            <CameraIcon size={40} color={'#87BC23'} />
          </TouchableOpacity>
        </View>
        <Text className='text-center font-bold text-xl mt-5 text-gray-600'>
          {`${userDataInApollo.firstName} ${userDataInApollo.lastName}`}
        </Text>
        <Text className='text-center ' selectionColor='#0C617D'>
          Compagnon de la Méditerranée
        </Text>
        <TouchableOpacity>
          <Text style={styles.colorBlue} className='text-center font-bold text-xl mt-5 '>
            12
          </Text>
          <Text style={styles.colorBlue}>Publications</Text>
        </TouchableOpacity>
        <ScrollView>
          <View className='flex-row mt-10'>
            <TouchableOpacity className='items-center space-y-5 rounded-lg shadow-md  p-10 '>
              <UserIcon size={30} color={'#0C617D'} />
              <Text style={styles.colorBlue}>Éditez votre profil</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center space-y-5 rounded-lg shadow-md  p-10'>
              <MicrophoneIcon size={30} color={'#0C617D'} />
              <Text style={styles.colorBlue}>Dîte bonjour !</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-40 shadow-md rounded-lg  p-5'>
            <View className='flex-row items-center'>
              <ListBulletIcon size={30} color={'grey'} />
              <Text> Mes activitées</Text>
            </View>
            <ChevronRightIcon size={20} color={'grey'} style={styles.paddingLeft3} />
          </TouchableOpacity>

          <TouchableOpacity className='flex-row items-center space-x-40 mt-5 rounded-lg shadow-md  p-5'>
            <View className='flex-row items-center'>
              <BellAlertIcon size={30} color={'grey'} />
              <Text> Notifications</Text>
            </View>
            <ChevronRightIcon size={20} color={'grey'} style={styles.paddingLeft5} />
          </TouchableOpacity>

          <TouchableOpacity className='flex-row items-center space-x-40 mt-5 rounded-lg shadow-md  p-5'>
            <View className='flex-row items-center'>
              <MapPinIcon size={30} color={'grey'} />
              <Text> Ma localisation</Text>
            </View>
            <ChevronRightIcon size={20} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row items-center space-x-40 mt-5 rounded-lg shadow-md  p-5 mb-5'
            onPress={() => emptySecureStore()}
          >
            <View className='flex-row items-center'>
              <ArrowRightOnRectangleIcon size={30} color={'red'} />
              <Text className='text-red-600'> Déconnexion</Text>
            </View>
            <ChevronRightIcon size={20} color={'grey'} style={styles.paddingLeft5} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  colorBlue: { color: '#0C617D' },
  paddingLeft5: { paddingLeft: 50 },
  paddingLeft3: { paddingLeft: 30 },
})

export default ProfileScreen
