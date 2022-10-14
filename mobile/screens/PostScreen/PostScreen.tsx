import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '@components/ScreenHeader/ScreenHeader'
interface PostScreenProps {
  picture: string
  title: string
  content: string
  likes: number
}

const PostScreen: React.FunctionComponent<PostScreenProps> = ({
  picture,
  title,
  content,
  likes,
}) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View>
        <Text>PostScreen</Text>
        <Image
          className='h-20 rounded-xl'
          source={{
            uri: picture,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default PostScreen
