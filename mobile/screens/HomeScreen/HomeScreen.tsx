import { useState, useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import localization from 'moment/locale/fr'

import {
  useWindowDimensions,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { API_URL } from 'react-native-dotenv'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomAvatar } from '@components/CustomAvatar/CustomAvatar'
import HomeHeader from '@components/HomeHeader/HomeHeader'
import SeeAll from '@components/SeeAll/SeeAll'
import NewsCard from '@components/NewsCard/NewsCard'
import PostCard from '@components/PostCard/PostCard'
import ThemesDisplay from '@components/ThemesDisplay/ThemesDisplay'
import { useGetAllNewsQuery, useGetAllPostsQuery } from '../../graphql/graphql'

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const { height, width } = useWindowDimensions()
  const [newList, setNewsList] = useState([])
  const navigation = useNavigation()
  const { data, refetch } = useGetAllNewsQuery()
  const { data: postsData, refetch: refetchPostsData } = useGetAllPostsQuery()

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    console.log('postsData', postsData)
    wait(2000).then(() => {
      refetch(), refetchPostsData(), setRefreshing(false)
    })
  }, [])

  console.log('API_URL in .env', API_URL)
  // ! Changement locale Momentjs en global en même temps que la langue ?
  moment.updateLocale('fr', localization)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='#87BC23'
            colors={['#87BC23', '#139DB8']}
          />
        }
      >
        <View className='justify-center bg-white '>
          <View className='flex flex-row space-x-10 w-screen  justify-between'>
            <View className='w-1/2 '>
              <Text className='text-xl  color-deepBlue font-ralewayBold mt-2 ml-3 my-2'>
                Actualités
              </Text>
            </View>
            <View className=' flex-row items-center mr-1'>
              <SeeAll target='AllNews' />
            </View>
          </View>
          {data && (
            <FlatList
              horizontal={true}
              inverted={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={data.NewsList}
              renderItem={({ item, index }) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  picture={item.mainPicture}
                  content={item.content}
                  date={
                    moment().diff(item.createdAt, 'days') <= 2
                      ? moment(item.createdAt).fromNow()
                      : moment(item.createdAt).format('LL')
                  }
                />
              )}
            />
          )}
          {/* <ScrollView className='' horizontal={true} showsHorizontalScrollIndicator={false}>
            {data?.NewsList.map((newsItem, index) => {
              const formattedDate =
                moment().diff(newsItem.createdAt, 'days') <= 2
                  ? moment(newsItem.createdAt).fromNow()
                  : moment(newsItem.createdAt).format('LL')

              return (
                <NewsCard
                  key={index}
                  title={newsItem.title}
                  picture={newsItem.mainPicture}
                  content={newsItem.content}
                  date={formattedDate}
                />
              )
            }).reverse()}
          </ScrollView> */}
          {/* <TouchableOpacity
            className='p-2  ml-2 mr-2 mt-3 rounded-xl bg-white'
            onPress={() => navigation.navigate('Map')}
          >
            <Image
              className='w-full h-20 rounded-xl'
              source={{
                uri: 'https://media.peche.com/src/images/news/articles/ima-image-31469.png',
              }}
            />
          </TouchableOpacity> */}
          <Text className='text-xl  color-deepBlue font-ralewayBold mt-2 ml-3 my-2'>
            Les compagnons de la Méditérranée
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            />
            <CustomAvatar
              isConnected={false}
              avatarPicture='https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all'
            />
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg'
            />
            <CustomAvatar
              isConnected={true}
              avatarPicture='https://www.kcl.ac.uk/ImportedImages/Schools/Business/news-images/Elisa-Russo500x499.xe1f2b6fd.jpg?w=376&h=375&crop=368,208,8,35'
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
          <View className='flex flex-row space-x-10 w-screen  justify-between'>
            <View className='w-1/2 '>
              <Text className='text-xl  color-deepBlue font-ralewayBold mt-2 ml-3 my-2'>
                Journal de bord
              </Text>
            </View>
            <View className=' flex-row items-center mr-1'>
              <SeeAll target='AllPosts' />
            </View>
          </View>
          <ScrollView className='mx-3'>
            {postsData?.PostsList.map((postItem, index) => {
              if (postItem.validated == 'validated') {
                return (
                  <PostCard
                    key={index}
                    id={postItem.id}
                    title={postItem.title}
                    picture={postItem.mainPicture}
                    likes={postItem.likes}
                    comments={postItem.comments}
                    intro={postItem.intro}
                  />
                )
              }
            })}
          </ScrollView>
          <ThemesDisplay />
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
