import React, { useState, useCallback } from 'react'
import { View, Text, Image, useWindowDimensions, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html'
import ScreenHeader from '@components/ScreenHeader/ScreenHeader'
import CustomAvatar from '@components/CustomAvatar/CustomAvatar'
import Toggle from '@components/Toggle/Toggle'
import Applause from '@components/Applause/Applause'
import { BookmarkIcon } from 'react-native-heroicons/solid'
import { BookmarkIcon as BookmarkIconOutline } from 'react-native-heroicons/outline'
import { useGetPostsByIdQuery } from '../../graphql/graphql'
import moment from 'moment'
import localization from 'moment/locale/fr'

interface PostScreenProps {}

const PostScreen: React.FunctionComponent<PostScreenProps> = (props) => {
  const { data, refetch } = useGetPostsByIdQuery({
    variables: { id: props.route.params.postId },
  })
  console.log('data dans postscreen', data)

  console.log(props.route.params.postId)
  const [likes, setLikes] = useState<number>(data?.Posts.likes)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  const { height, width } = useWindowDimensions()
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }
  console.log('rerender data dans postscreen', data)
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    console.log('data dans onrefresh sur PostScreen', data)

    wait(2000).then(() => {
      refetch(), setRefreshing(false)
    })
  }, [])

  const source = {
    html: data?.Posts.content,
  }
  // Modification du style du rendu HTML
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#272E67',
    },
    a: {
      color: '#87BC23',
    },
  }
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScreenHeader />
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
        <View className='justify-center bg-white px-3 '>
          {data?.Posts.title && (
            <Text className='text-xl color-deepBlue font-ralewayBold  ml-3 mb-4 text-center'>
              {data?.Posts.title}
            </Text>
          )}
          <View className='self-end mr-2 -mb-4 z-40'>
            {isBookmarked ? (
              <BookmarkIcon
                size={30}
                onPress={() => setIsBookmarked(!isBookmarked)}
                color='#0C617D'
              />
            ) : (
              <BookmarkIconOutline
                size={30}
                fill='white'
                onPress={() => setIsBookmarked(!isBookmarked)}
                color='#0C617D'
              />
            )}
          </View>
          <Image
            className='h-40 rounded-md '
            source={{
              uri: data?.Posts.mainPicture,
            }}
          />
          <View className='flex-row justify-between mt-2 '>
            <View className='-mt-12'>
              <CustomAvatar isConnected={true} avatarPicture={data?.Posts.author.avatar} />
            </View>
            <View className='flex-row justify-center'>
              <Toggle isEnabled={false} />
            </View>
          </View>
          <Text className='text-md color-deepBlue font-ralewayBold  '>
            {data?.Posts.author.firstName}
          </Text>
          <Text className='text-xs color-deepBlue font-raleway  mb-4'>
            {moment().diff(data?.Posts.createdAt, 'days') <= 2
              ? moment(data?.Posts.createdAt).fromNow()
              : moment(data?.Posts.createdAt).format('LL')}
          </Text>
          {data?.Posts.content && (
            <RenderHtml contentWidth={width} tagsStyles={tagsStyles} source={source} />
          )}
        </View>
      </ScrollView>
      {data?.Posts.likes && <Applause likes={data?.Posts.likes} postId={data?.Posts.id} />}
    </SafeAreaView>
  )
}

export default PostScreen
