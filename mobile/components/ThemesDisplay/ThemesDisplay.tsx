import React from 'react'
import { View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ThemeCard from '@components/ThemeCard/ThemeCard'
import ThemesCard2 from '@components/ThemeCard/ThemesCard2'

import { ScrollView } from 'native-base'

interface ThemesDisplayProps {}

const ThemesDisplay: React.FunctionComponent<ThemesDisplayProps> = ({}) => {
  return (
    <View className='ml-2.5'>
      <Text className='text-xl color-cyan-900 my-2   color-deepBlue font-ralewayBold'>Thèmes</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ThemesCard2 themeName='Éducation' />
        <ThemesCard2 themeName='Écologie' />
        <ThemesCard2 themeName='Éducation' />
        <ThemesCard2 themeName='La place des femmes' />
      </ScrollView>
    </View>
  )
}

export default ThemesDisplay
