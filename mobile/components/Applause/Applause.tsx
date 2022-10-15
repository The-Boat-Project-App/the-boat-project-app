import React from 'react'
import { Button, Icon } from 'native-base'
import { Pressable, Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Applause = () => {
  return (
    <Pressable className='absolute bottom-12 right-8 rounded-full bg-white border border-2 p-2 border-green-300 shadow shadow-slate-500'>
      <MaterialCommunityIcons name='hand-clap' color='#87BC23' size={40} />
      <Text className='self-center -mt-2 text-zinc-900 font-bold'>221</Text>
    </Pressable>
  )
}

export default Applause
