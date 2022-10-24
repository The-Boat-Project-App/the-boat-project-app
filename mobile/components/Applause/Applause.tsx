import React from 'react'
import { Button, Icon } from 'native-base'
import { Pressable, Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useAddLikesMutation } from '../../graphql/graphql'

const Applause = () => {
  const [addLikes] = useAddLikesMutation()

  const applause = async () => {
    const response = await addLikes({
      variables: {
        id: '6334c689888fd66698325cdc',
      },
    })
    if (response && response.data) {
      console.log('REPONSE', response)
    }
  }
  return (
    <Pressable
      className='absolute bottom-12 right-8 rounded-full bg-white border border-2 p-2 border-green-300 shadow shadow-slate-500'
      onPress={applause}
    >
      <MaterialCommunityIcons name='hand-clap' color='#87BC23' size={40} />
      <Text className='self-center -mt-2 text-zinc-900 font-bold'>221</Text>
    </Pressable>
  )
}

export default Applause
