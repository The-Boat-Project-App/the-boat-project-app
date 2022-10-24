import React, { useState } from 'react'
import { ImageBackground, useWindowDimensions, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Pressable, Badge, Box } from 'native-base'

interface ThemesCard2Props {
  themeName: string
}

const ThemesCard2: React.FunctionComponent<ThemesCard2Props> = ({ themeName }) => {
  const { width, height } = useWindowDimensions()
  const displayName = (themeReference: string) => {
    switch (themeReference) {
      case 'Écologie':
        return require('../../assets/drawings/voilier.jpg')
      case 'La place des femmes':
        return require('../../assets/drawings/women.jpg')
      case 'Éducation':
        return require('../../assets/drawings/dive.png')
      default:
        return 'voilier.jpg'
    }
  }
  const imageSource = '../../assets/drawings/' + displayName(themeName)
  return (
    <Pressable
      onPress={() => console.log("I'm Pressed")}
      rounded='12'
      overflow='hidden'
      borderWidth='0'
      borderColor='coolGray.300'
      maxW='96'
      shadow='5'
      bg='white'
      p='1'
      mr={0}
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            bg={isPressed ? 'white' : isHovered ? 'white' : 'white'}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            p='2'
            rounded='8'
            shadow={2}
            borderWidth='1'
            borderColor='coolGray.300'
            alignContent={'center'}
          >
            <ImageBackground
              className='h-32 w-32 rounded'
              source={displayName(themeName)}
              resizeMode='cover'
            ></ImageBackground>
            <Badge colorScheme='deepBlue' variant='outline' rounded='4' border>
              {themeName}
            </Badge>
          </Box>
        )
      }}
    </Pressable>
  )
}

export default ThemesCard2
