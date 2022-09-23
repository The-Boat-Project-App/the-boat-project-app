import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { GlobeAltIcon, HeartIcon, ChatBubbleLeftIcon } from 'react-native-heroicons/solid'

interface CustomCardPub {
  PubPicture: string
  PubTitle: string
  PubContent: string
}

export const CustomCardPub: React.FunctionComponent<CustomCardPubProps> = ({
  PubPicture,
  PubTitle,
  PubContent,
}) => {
  return (
    <View className=' bg-white rounded-xl shadow-md my-2 mx-2 h-52'>
      <View className='md:flex'>
        <View className='flex-row'>
          <Image className='h-24 w-40 flex-row rounded-md mx-2 my-3 top-8' source={PubPicture} />
          <Pressable className=' items-center h-8 w-10 py-2 bg-white hover:bg-gray-100 text-gray-80 focus:shadow-outline border border-cyan-700 rounded shadow mx-44 right-2 top-2'>
            <Text className='font-bold text-cyan-700 text-xs '> FR </Text>
          </Pressable>
        </View>
        <View className='items-start mx-24 left-20 bottom-20'>
          <Text className='tracking-wide text-xs text-cyan-700 font-semibold '>{PubTitle}</Text>
          <Text className=' text-slate-500 text-xs'>{PubContent}</Text>
          <View className='flex-row my-5'>
            <Text className='flex-row mx-5'>
              <GlobeAltIcon size={20} color='black' />
            </Text>
            <Text className='flex-row mx-5'>
              <HeartIcon size={20} color='red' />
            </Text>
            <Text className='flex-row mx-5'>
              <ChatBubbleLeftIcon size={20} color='#0097A7' />
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CustomCardPub
