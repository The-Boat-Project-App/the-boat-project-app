import React, { useState } from 'react'
import { Button, Icon, Pressable } from 'native-base'
import { Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useAddLikesMutation } from '../../graphql/graphql'

const Applause = ({ likes, postId }) => {
  const [addLikes] = useAddLikesMutation()
  const [likesDisplay, setLikesDisplay] = useState(likes)
  const applause = async () => {
    const response = await addLikes({
      variables: {
        id: postId,
      },
    })
    console.log('RESPONSEEEEEE', response)
    if (response && response.data) {
      console.log('REPONSE', response)
      setLikesDisplay(Number(response.data.addLikes))
    }
  }
  return (
    <Pressable
      className='flex-column justify-center align-center absolute bottom-12 right-8 rounded-full bg-white border border-2 p-2 border-green shadow shadow-deepBlue'
      onPress={applause}
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <>
            <MaterialCommunityIcons
              name='hand-clap'
              color={isPressed ? '#74a318' : '#87BC23'}
              size={40}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.92 : 1,
                  },
                  { rotate: isPressed ? '10deg' : '0deg' },
                ],
              }}
            />
            <Text
              className='self-center text-zinc-900 font-bold'
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.92 : 1,
                  },
                ],
              }}
            >
              {likesDisplay}
            </Text>
          </>
        )
      }}
    </Pressable>
  )
}

export default Applause
