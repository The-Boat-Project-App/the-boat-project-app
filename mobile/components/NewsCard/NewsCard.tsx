import { View, Image, TouchableOpacity, Text } from 'react-native'

interface NewsCard {
  picture: string
  date: string
  title: string
  content: string
}

export const NewsCard: React.FunctionComponent<NewsCardProps> = ({
  picture,
  date,
  title,
  content,
}) => {
  return (
    <TouchableOpacity className='w-40 p-1'>
      <Image
        className='rounded-md w-full h-16'
        source={{
          uri: picture,
        }}
      />
      <Text className='font-bold color-cyan-900 text-xs'>{date}</Text>
      <Text className='font-bold color-cyan-900'>{title}</Text>
      <Text className='color-cyan-900'>{content}</Text>
    </TouchableOpacity>
  )
}

export default NewsCard
