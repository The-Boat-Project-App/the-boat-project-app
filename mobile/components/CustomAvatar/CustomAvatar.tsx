import { View, Image } from 'react-native'

interface CustomAvatar {
  avatarPicture: string
  isConnected: boolean
}

export const CustomAvatar: React.FunctionComponent<CustomAvatarProps> = ({
  avatarPicture,
  isConnected,
}) => {
  return (
    <View className='w-20 h-20 items-center justify-center'>
      <Image
        source={{
          uri: avatarPicture,
        }}
        className={`w-16 h-16 rounded-full border-2 ${
          isConnected ? 'border-white' : 'border-white'
        }`}
      />
      {isConnected && (
        <View
          className='top-1 left-12 absolute  w-4 h-4 border-2 
           bg-green
         border-white dark:border-gray-800 rounded-full'
        ></View>
      )}
    </View>
  )
}

export default CustomAvatar
