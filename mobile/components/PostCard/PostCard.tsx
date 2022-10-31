import { View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

interface PostCardProps {
  id: string
  picture: string
  title: string
  content: string
  likes: number
  intro: string
  comments: [
    {
      author: string
      content: string
      date: Date
    },
  ]
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({
  id,
  picture,
  title,
  content,
  likes,
  comments,
  intro,
}) => {
  //* Regex to shorten text content
  console.log('intro dans postcard', intro)
  const shortenedContent = intro.replace(/^(.{110}[^\s]*).*/, '$1') + ' ...'
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='flex-row bg-white p-0  rounded-xl mb-2'
      onPress={() => navigation.navigate('Post', { postId: id })}
    >
      <View className='w-2/5'>
        <Image
          className='h-24 flex-row justify-end rounded-lg'
          // imageStyle={{ borderRadius: '10%' }}
          source={{
            uri: picture,
          }}
          resizeMode='cover'
        ></Image>
      </View>
      <View className='w-3/5 pl-3 flex-col '>
        <Text className='color-deepBlue font-ralewayBold'>{title}</Text>
        <Text className='text-xs  color-deepBlue font-raleway text-justify'>
          {shortenedContent}
        </Text>
        <View className='flex-row mt-2  self-end'>
          {likes > 0 && (
            <>
              <MaterialCommunityIcons name='hand-clap' color='#87BC23' size={16} />
              <Text className='text-xs  color-deepBlue font-ralewayBold bg-white mr-2'>
                {likes}
              </Text>
            </>
          )}
          {comments.length > 0 && (
            <>
              <MaterialCommunityIcons name='chat' color='#87BC23' size={18} />
              <Text className='text-xs  color-deepBlue font-ralewayBold bg-white mr-1'>
                {comments.length}
              </Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard
