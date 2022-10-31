import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface NewsCard {
  id: string
  picture: string
  date: string
  title: string
  content: string
}

export const NewsCard: React.FunctionComponent<NewsCardProps> = ({
  id,
  picture,
  date,
  title,
  content,
}) => {
  //* Regex to shorten text content
  const shortenedContent = content.replace(/^(.{60}[^\s]*).*/, '$1') + ' ...'
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='w-40 p-0 ml-3 '
      onPress={() => navigation.navigate('News', { newsId: id })}
    >
      <Image
        className='rounded-md w-full h-16'
        source={{
          uri: picture,
        }}
      />
      <Text className='font-bold  text-xstext-xl  color-deepBlue font-raleway'>{date}</Text>
      <Text className='text-md  color-deepBlue font-ralewayBold'>{title}</Text>
      <Text className='text-xs  color-deepBlue font-raleway'>{shortenedContent}</Text>
    </TouchableOpacity>
  )
}

export default NewsCard
