import React, { useState, useCallback } from 'react'
import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { newPostVar } from '../../variables/newPost'
import RenderHtml from 'react-native-render-html'
import { useReactiveVar } from '@apollo/client'
import ScreenHeader from '@components/ScreenHeader/ScreenHeader'
import CustomAvatar from '@components/CustomAvatar/CustomAvatar'
import Toggle from '@components/Toggle/Toggle'
import { useCreateNewPostMutation } from '../../graphql/graphql'
import { userDataVar } from 'variables/userData'
import { Button } from 'native-base'

interface PreviewPostScreenProps {}

const PreviewPostScreen: React.FunctionComponent<PreviewPostScreenProps> = ({}) => {
  const newPostData = useReactiveVar(newPostVar)
  const userData = useReactiveVar(userDataVar)

  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingSave, setIsLoadingSave] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(newPostData.title)
  const [intro, setIntro] = useState<string>(newPostData.intro)
  const [content, setContent] = useState<string>(newPostData.content)
  const [mainPicture, setMainPicture] = useState<string>(newPostData.image)
  const [author, setAuthor] = useState<string>('Matthieu')
  const [likes, setLikes] = useState<number>(111)
  const [submitted, setSubmitted] = useState<boolean>(true)
  const [validated, setValidated] = useState<string>('pending')
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>('')

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  const [createNewPost] = useCreateNewPostMutation()

  const { height, width } = useWindowDimensions()
  const source = {
    html: newPostData.content,
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

  const createPost = async () => {
    setIsLoading(true)
    const data = new FormData()
    const source = {
      uri: newPostData.image,
      type: 'image/jpeg',
      name: 'newPic',
    }
    data.append('file', source)
    data.append('upload_preset', 'bk8ems2f')
    data.append('cloud_name', 'matthieudev')
    fetch('https://api.cloudinary.com/v1_1/matthieudev/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        const response = await createNewPost({
          variables: {
            newPostsInput: {
              title,
              intro,
              content,
              mainPicture: data.secure_url,
              likes,
              submitted,
              validated,
              author: '',
            },
          },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const savePost = async () => {
    setIsLoadingSave(true)
    const data = new FormData()
    const source = {
      uri: newPostData.image,
      type: 'image/jpeg',
      name: 'newPic',
    }
    data.append('file', source)
    data.append('upload_preset', 'bk8ems2f')
    data.append('cloud_name', 'matthieudev')
    fetch('https://api.cloudinary.com/v1_1/matthieudev/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        const response = await createNewPost({
          variables: {
            newPostsInput: {
              title,
              intro,
              content,
              author,
              mainPicture: data.secure_url,
              likes,
              submitted: false,
              validated,
            },
          },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScreenHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='justify-center bg-white px-3 '>
          <Text className='text-xl color-deepBlue font-ralewayBold  ml-3 mb-4 text-center'>
            {newPostData.title}
          </Text>
          <Image
            className='h-40 rounded-md '
            source={{
              uri: newPostData.image,
            }}
          />
          <View className='flex-row justify-between mt-2 '>
            <View className='-mt-12'>
              <CustomAvatar isConnected={true} avatarPicture={userData.avatar} />
            </View>
          </View>
          <Text className=' text-md color-deepBlue font-ralewayBold '>
            Publié par {userData.firstName}
          </Text>
          <Text className='text-xs color-deepBlue font-raleway  mb-4'>Aujourd'hui</Text>
          <View className='color-deepBlue'>
            <RenderHtml tagsStyles={tagsStyles} contentWidth={width} source={source} />
          </View>
        </View>

        <View className='flex flex-row justify-end px-4'>
          <Button onPress={savePost} variant='outline' className='mr-3'>
            <Text className='color-clearBlue font-ralewayBold'>Sauvegarder</Text>
          </Button>
          {isLoading ? (
            <Button isLoading isLoadingText='Chargement...' onPress={createPost}>
              <Text className='color-white font-ralewayBold'>Publier</Text>
            </Button>
          ) : (
            <Button isLoadingText='Chargement...' onPress={createPost}>
              <Text className='color-white font-ralewayBold'>Publier</Text>
            </Button>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreviewPostScreen
