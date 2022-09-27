import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import {
  useWindowDimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { API_URL } from 'react-native-dotenv'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomAvatar } from '@components/CustomAvatar/CustomAvatar'
import HomeHeader from '@components/HomeHeader/HomeHeader'
import NewsCard from '@components/NewsCard/NewsCard'
import { useGetAllNewQuery, useGetAllNewsQuery } from '../../graphql/graphql'

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  const { height, width } = useWindowDimensions()
  const [newList, setNewsList] = useState([])
  const navigation = useNavigation()
  const { data } = useGetAllNewsQuery()

  console.log('API_URL in .env', API_URL)

  return (
    <SafeAreaView className='flex-1'>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='justify-center bg-slate-100 '>
          <Text className='font-bold text-lg color-cyan-900 px-2'>Actualités</Text>
          <ScrollView className='' horizontal={true} showsHorizontalScrollIndicator={false}>
            {data?.NewsList.map((newsItem, index) => {
              return (
                <NewsCard
                  key={index}
                  title={newsItem.title}
                  picture={newsItem.mainPicture}
                  content={newsItem.content}
                  date={newsItem.createdAt}
                />
              )
            })}
          </ScrollView>
          <TouchableOpacity
            className='p-2  ml-2 mr-2 mt-3 rounded-xl bg-white'
            onPress={() => navigation.navigate('Map')}
          >
            <Image
              className='w-full h-20 rounded-xl'
              source={{
                uri: 'https://media.peche.com/src/images/news/articles/ima-image-31469.png',
              }}
            />
          </TouchableOpacity>
          <Text className='text-lg font-bold color-cyan-900 mt-2'>
            Les compagnons de la Méditérranée
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            />
            <CustomAvatar
              isConnected={false}
              avatarPicture='https://images.generated.photos/2mP6i-lgiMAV6cANGDvtzOUmmpxBlXmgPTDbPXpXFXI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTEwNjQwLmpwZw.jpg'
            />
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.generated.photos/2mP6i-lgiMAV6cANGDvtzOUmmpxBlXmgPTDbPXpXFXI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTEwNjQwLmpwZw.jpg'
            />
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.generated.photos/2mP6i-lgiMAV6cANGDvtzOUmmpxBlXmgPTDbPXpXFXI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTEwNjQwLmpwZw.jpg'
            />
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.generated.photos/2mP6i-lgiMAV6cANGDvtzOUmmpxBlXmgPTDbPXpXFXI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTEwNjQwLmpwZw.jpg'
            />
          </ScrollView>

          <Text className='text-lg font-bold color-cyan-900 mt-2'>Journal de bord</Text>

          <ScrollView>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3 '>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* <Text className='font-bold text-xl'>Au boulot ! ⛵</Text>
        <CustomButton buttonTitle='Fetcher le serveur' onPress={fetchData} />
        <Text>{serverSurprise}</Text>
        <StatusBar style='auto' /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  colorBlue: { color: '#0C617D' },
  colorDate: { backgroundColor: '#139db8' },
})

export default HomeScreen
