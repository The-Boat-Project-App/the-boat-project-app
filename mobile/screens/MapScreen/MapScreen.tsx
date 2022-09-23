import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import CustomCardNews from '../../components/CustomCardNews/CustomCardNews'
import { CustomAvatar } from '../../components/CustomAvatar/CustomAvatar'
import {
  BriefcaseIcon,
  BellIcon,
  ChevronRightIcon,
  UserIcon,
  MicrophoneIcon,
} from 'react-native-heroicons/solid'

type Props = {}

const MapScreen = (props: Props) => {
  return (
    <View className='flex my-2 bg-white'>
      <View className='flex-1'>
        <View className='flex items-center'>
          <Image
            className='w-10 h-12 rounded mr-14 right-20 px-24 top-10'
            source={require('../../assets/logoTBP.png')}
          />
        </View>
        <Text className='text-sm font-bold leading-7 text-black ml-64'>Départ 1ère édition:</Text>
        <Text className='text-sm font-bold leading-7 text-black ml-72 '>23 janvier 2023</Text>
        <View className='ymt-1 flex flex-row sm:flex-wrap sm:space-x-6'>
          <Pressable className=' items-center h-8 w-10 py-2 bg-white hover:bg-gray-100 text-gray-80 focus:shadow-outline border border-cyan-700 rounded shadow mx-1'>
            <Text className='font-bold text-cyan-700 text-xs '> EN </Text>
          </Pressable>

          <Pressable className=' items-center h-8 w-10 py-2 text-indigo-100 transition-colors duration-150 bg-cyan-700 rounded shadow hover:bg-indigo-800 mx-1'>
            <Text className='font-bold text-white text-xs '> FR </Text>
          </Pressable>

          <Pressable className=' items-center h-8 w-10 py-2 bg-white hover:bg-gray-100 text-gray-80 focus:shadow-outline border border-cyan-700 rounded shadow mx-1'>
            <Text className='font-bold text-cyan-700 text-xs '> ES </Text>
          </Pressable>

          <Pressable className=' items-center h-8 w-10 py-2 text-indigo-100 transition-colors duration-150 bg-cyan-700 rounded shadow hover:bg-indigo-800 mx-1'>
            <Text className='font-bold text-white text-xs '> AR </Text>
          </Pressable>

          <Pressable className=' items-center h-8 w-44 py-1 text-indigo-100 transition-colors duration-150 bg-cyan-700 rounded-xl shadow hover:bg-indigo-800 mx-10'>
            <Text className='font-bold text-white text-sm items-center '> J-159 18:30:22 </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default MapScreen
