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
  //* Regex to shorten text content
  const shortenedContent = content.replace(/^(.{60}[^\s]*).*/, '$1') + ' ...'
  return (
    <TouchableOpacity className='w-40 p-0 ml-3 '>
      <Image
        className='rounded-md w-full h-16'
        source={{
          uri: picture,
        }}
      />
      <Text className='font-bold color-cyan-900 text-xs'>{date}</Text>
      <Text className='font-bold color-cyan-900'>{title}</Text>
      <Text className='color-cyan-900 '>{shortenedContent}</Text>
    </TouchableOpacity>
  )
}

export default NewsCard
