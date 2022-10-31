import React, { useState } from 'react'
import { ImageBackground, useWindowDimensions, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Pressable, Badge } from 'native-base'

interface ThemesCardProps {
  themeName: string
}

const ThemesCard: React.FunctionComponent<ThemesCardProps> = ({ themeName }) => {
  const { width, height } = useWindowDimensions()
  const displayName = (themeReference: string) => {
    switch (themeReference) {
      case 'Écologie':
        return require('../../assets/drawings/voilier.jpg')
      case 'Femmes':
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
      borderWidth='1'
      borderColor='coolGray.300'
      maxW='96'
      shadow='5'
      bg='white'
      p='2'
      mr={3}
    >
      <ImageBackground
        className='h-32 w-32 rounded'
        source={displayName(themeName)}
        resizeMode='cover'
      ></ImageBackground>
      <Badge
        colorScheme='deepBlue'
        _text={{
          color: 'white',
        }}
        variant='solid'
        rounded='4'
      >
        {themeName}
      </Badge>
    </Pressable>
  )
}

export default ThemesCard
