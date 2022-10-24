import React, { useState, useCallback } from 'react'
import { View, Text, Image, useWindowDimensions, ScrollView, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { newPostVar } from '../../variables/newPost'
import RenderHtml from 'react-native-render-html'
import { useReactiveVar } from '@apollo/client'
import ScreenHeader from '@components/ScreenHeader/ScreenHeader'
import CustomAvatar from '@components/CustomAvatar/CustomAvatar'
import Toggle from '@components/Toggle/Toggle'
import { useCreateNewPostMutation } from '../../graphql/graphql'
import { userDataVar } from 'variables/userData'

interface PreviewPostScreenProps {}

const PreviewPostScreen: React.FunctionComponent<PreviewPostScreenProps> = ({}) => {
  const newPostData = useReactiveVar(newPostVar)
  const userData = useReactiveVar(userDataVar)

  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(newPostData.title)
  const [intro, setIntro] = useState<string>('intro de larticle')
  const [content, setContent] = useState<string>(newPostData.content)
  const [mainPicture, setMainPicture] = useState<string>(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/MI_84_%E2%80%94_RER_B.1.jpg/300px-MI_84_%E2%80%94_RER_B.1.jpg',
  )
  const [author, setAuthor] = useState<string>('Matthieu')
  const [likes, setLikes] = useState<number>(111)
  const [submitted, setSubmitted] = useState<boolean>(true)
  const [validated, setValidated] = useState<string>('pending')

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  const [createNewPost] = useCreateNewPostMutation()

  const { height, width } = useWindowDimensions()
  const source = {
    html: newPostData.content,
  }
  console.log('source', source)

  const createPost = async () => {
    const response = await createNewPost({
      variables: {
        newPostsInput: {
          title,
          intro,
          content,
          author,
          mainPicture,
          likes,
          submitted,
          validated,
        },
      },
    })
    if (response && response.data) {
      console.log('REPONSE', response)
    }
  }

  const savePost = async () => {
    const response = await createNewPost({
      variables: {
        newPostsInput: {
          title,
          intro,
          content,
          author,
          mainPicture,
          likes,
          submitted: false,
          validated,
        },
      },
    })
    if (response && response.data) {
      console.log('REPONSE', response)
    }
  }

  console.log('newPostData.image in PreviewPostScreen', newPostData.image)
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
            <RenderHtml contentWidth={width} source={source} />
          </View>
        </View>
        <Button title='Publier!' onPress={createPost} />
        <Button title='Sauvegarder' onPress={savePost} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreviewPostScreen
