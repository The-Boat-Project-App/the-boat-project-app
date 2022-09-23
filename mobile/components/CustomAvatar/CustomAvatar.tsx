import { View, Text, Image } from "react-native";
import React from "react";

interface CustomAvatar {
  avatarPicture: string;
  avatarIsConnected: boolean;
}

export const CustomAvatar: React.FunctionComponent<CustomAvatarProps> = ({
  avatarPicture,
  avatarIsConnected,
}) => {
  return (
    <View className="flex mx-2">
      <Image
        className="p-1 w-20 h-20 rounded-full ring-2"
        source={avatarPicture}
      />
      <View
        className={top-0 left-14 absolute  w-3.5 h-3.5 border-2 ${
          avatarIsConnected ? "bg-green-400" : " bg-red-400"
        } border-white dark:border-gray-800 rounded-full}
      ></View>
    </View>
  );
};

export default CustomAvatar;