import { View, Image, TouchableOpacity, Text } from 'react-native'

interface PostCard {
  picture: string
  title: string
  content: string
  likes: number
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({
  picture,
  title,
  content,
  likes,
}) => {
  return (
    <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
      <View>
        <Image
          className='h-20 w-40 rounded-xl'
          source={{
            uri: picture,
          }}
        />
      </View>
      <View className='w-2/4 pl-3'>
        <Text className='font-bold color-cyan-900'>{title}</Text>
        <Text className='text-xs color-cyan-900'>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard
