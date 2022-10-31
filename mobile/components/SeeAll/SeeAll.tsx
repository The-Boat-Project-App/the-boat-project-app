import React from 'react'
import { View, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

interface SeeAllProps {
  target: string
}

const SeeAll: React.FunctionComponent<SeeAllProps> = ({ target }) => {
  const navigation = useNavigation()

  return (
    <Pressable>
      <ChevronRightIcon
        size='30'
        color='#272E67'
        onPress={() => {
          navigation.navigate(target)
          console.log('hello')
        }}
      />
    </Pressable>
  )
}

export default SeeAll
