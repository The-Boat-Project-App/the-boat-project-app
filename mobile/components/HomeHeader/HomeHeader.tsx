import { View, Image, Text, useWindowDimensions, Platform } from 'react-native'
interface HomeHeaderProps {}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = ({}) => {
  const { width } = useWindowDimensions()

  return (
    <View className={`flex-row bg-white mr-1 ${Platform.OS === 'ios' ? 'pb-0' : 'pb-1'} pr-1 `}>
      <View className=' w-1/2'>
        <Image
          source={{
            uri: 'https://camo.githubusercontent.com/a4c2e531fddea46509f4aac9dce43d10f8592b1ef23cba021aa958d77979956c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6d617474686965756465762f696d6167652f75706c6f61642f76313636333936333237352f436170747572655f645f652543432538316372616e5f323032322d30392d32335f612543432538305f32322e30302e35375f6734717375362e706e67',
          }}
          style={{ width: width * 0.5, height: width * 0.2, resizeMode: 'contain' }}
        />
        {/* <View className='flex-row justify-center justify-evenly '>
          <TouchableOpacity className='mt-0 justify-center items-center  p-0.5 border border-cyan-700 rounded-md '>
            <Text className='color-cyan-700 font-bold text-xs'>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mt-1 justify-center items-center p-2 border border-cyan-700 rounded-lg bg-cyan-700'>
            <Text className='color-white font-bold text-xs'>FR</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mt-0 justify-center items-center  p-0.5 border border-cyan-700 rounded-md '>
            <Text className='color-cyan-700 font-bold text-xs'>ES</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mt-0 justify-center items-center  p-0.5 border border-cyan-700 rounded-md '>
            <Text className='color-cyan-700 font-bold text-xs'>AR</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View className='items-end  w-1/2  mr-2'>
        <Text className='color-deepBlue font-raleway text-xs '>Départ 1ère édition :</Text>
        <Text className='color-deepBlue text-xs font-raleway'>23 janvier 2023</Text>
        <View className='flex-row rounded-md p-2 mt-2 bg-clearBlue'>
          <Text className='color-white font-bold font-raleway'>J- 159</Text>
          <Text className='color-white font-raleway'> 18 : 30 : 22</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
