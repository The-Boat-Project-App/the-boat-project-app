import React from 'react'
import { Image, Text, View, ScrollView } from 'react-native'

interface CustomCardNews {
  cardNewsPicture: string
  cardNewsDate: Date
  cardNewsTitle: string
  cardNewsContent: string
}

export const CustomCardNews: React.FunctionComponent<CustomCardNewsProps> = ({
  cardNewsPicture,
  cardNewsDate,
  cardNewsTitle,
  cardNewsContent,
}) => {
  return (
    <View className='flex flex-col items-center  rounded-lg md:flex-row md:max-w-xl w-60 mx-3'>
      <Image className='rounded-xl relative h-20 w-60' source={cardNewsPicture} />
      <View className='flex flex-col justify-between p-1 leading-normal  content-around'>
        <Text className='text-sm font-bold tracking-tight text-gray-900 dark:text-white'>
          {cardNewsTitle}
        </Text>
        <Text className='text-xs font-normal text-gray-700 dark:text-gray-400'>
          {cardNewsContent}
        </Text>
        <Text className='text-gray-600 text-xs font-bold'>{cardNewsDate}</Text>
      </View>
    </View>
  )
}

export default CustomCardNews
