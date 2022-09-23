import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

interface HeaderTBP2Props {
  cardNewsPicture: string
}

export const HeaderTBP2: React.FunctionComponent<HeaderTBP2Props> = ({ cardNewsPicture }) => {
  return (
    <View className='bg-white '>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='my-2 bg-white'>
          <View className='flex-1'>
            <View className='flex items-center bg-white py-10'>
              <Image className='w-10 h-12 rounded mr-14 right-20 px-24' source={cardNewsPicture} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HeaderTBP2
