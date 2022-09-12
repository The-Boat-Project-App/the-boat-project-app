import React from 'react'

import { Pressable, Text } from 'react-native'
import { SparklesIcon } from 'react-native-heroicons/solid'

interface CustomButtonProps {
  buttonTitle: string
  onPress(params: type): void
}

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  buttonTitle,
  onPress,
}) => {
  return (
    <Pressable className='bg-yellow-500 p-3 rounded-xl flex-row items-center' onPress={onPress}>
      <SparklesIcon size={20} color='red' />
      <Text className='font-bold'>{buttonTitle}</Text>
    </Pressable>
  )
}

export default CustomButton
