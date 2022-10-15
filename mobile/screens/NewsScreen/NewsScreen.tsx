import React, { useState, useCallback } from 'react'
import { View, Text, Image, useWindowDimensions, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ScreenHeader from '@components/ScreenHeader/ScreenHeader'
import CustomAvatar from '@components/CustomAvatar/CustomAvatar'
import Toggle from '@components/Toggle/Toggle'
import Applause from '@components/Applause/Applause'
import { BookmarkIcon } from 'react-native-heroicons/solid'
import { BookmarkIcon as BookmarkIconOutline } from 'react-native-heroicons/outline'

interface NewsScreenProps {}

const NewsScreen: React.FunctionComponent<NewsScreenProps> = ({}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const { height, width } = useWindowDimensions()
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => {
      refetch(), refetchPostsData(), setRefreshing(false)
    })
  }, [])

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
          <Text className='font-bold text-lg color-cyan-900 ml-3 mb-4 text-center'>
            On part bientôt !
          </Text>
          <Image
            className='h-40 rounded-md '
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Vents_du_Sud_-_Le_Grau-du-Roi_03.jpg/1600px-Vents_du_Sud_-_Le_Grau-du-Roi_03.jpg',
            }}
          />
          <View className='flex-row justify-between mt-2 '>
            <View className='-mt-12'>
              <CustomAvatar
                isConnected={true}
                avatarPicture='https://cache.desktopnexus.com/thumbseg/2487/2487414-bigthumbnail.jpg'
              />
            </View>
            <View className='flex-row justify-center'>
              <Toggle isEnabled={false} />
            </View>
          </View>
          <Text className='font-bold text-md color-cyan-900 '>Publié par Antoine</Text>
          <Text className='font-bold text-xs color-cyan-900  mb-4'>Aujourd'hui, 14h02</Text>
          <Text className=' text-xs color-cyan-900  mb-4 text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            l'augmentation du nombre de plaisanciers en France, le mouillage des navires est un
            enjeu économique, mais aussi environnemental,Face à l'augmentation du nombre de
            plaisanciers en France, le mouillage des navires est un enjeu économique, mais aussi
            environnemental,Face à l'augmentation du nombre de plaisanciers en France, le mouillage
            des navires est un enjeu économique, mais aussi environnemental,Face à l'augmentation du
            nombre de plaisanciers en France, le mouillage des navires est un enjeu économique, mais
            aussi environnemental,Face à l'augmentation du nombre de plaisanciers en France, le
            mouillage des navires est un enjeu économique, mais aussi environnemental,Face à
            l'augmentation du nombre de plaisanciers en France, le mouillage des navires est un
            enjeu économique, mais aussi environnemental,Face à l'augmentation du nombre de
            plaisanciers en France, le mouillage des navires est un enjeu économique, mais aussi
            environnemental,Face à l'augmentation du nombre de plaisanciers en France, le mouillage
            des navires est un enjeu économique, mais aussi environnemental,Face à l'augmentation du
            nombre de plaisanciers en France, le mouillage des navires est un enjeu économique, mais
            aussi environnemental,Face à l'augmentation du nombre de plaisanciers en France, le
            mouillage des navires est un enjeu économique, mais aussi environnemental,Face à
            l'augmentation du nombre de plaisanciers en France, le mouillage des navires est un
            enjeu économique, mais aussi environnemental,
          </Text>
        </View>
      </ScrollView>
      <Applause />
    </SafeAreaView>
  )
}

export default NewsScreen
