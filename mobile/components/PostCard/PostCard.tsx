import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface PostCard {
  id: string
  picture: string
  title: string
  content: string
  likes: number
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({
  id,
  picture,
  title,
  content,
  likes,
}) => {
  //* Regex to shorten text content
  const shortenedContent = content.replace(/^(.{110}[^\s]*).*/, '$1') + ' ...'
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='flex-row bg-white p-2 rounded-xl mb-2'
      onPress={() => navigation.navigate('Post', { postId: id })}
    >
      <View className='w-2/5'>
        <Image
          className='h-20 rounded-xl'
          source={{
            uri: picture,
          }}
        />
      </View>
      <View className='w-3/5 pl-3 '>
        <Text className='font-bold color-cyan-900'>{title}</Text>
        <Text className='text-xs color-cyan-900 text-justify'>{shortenedContent}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard
