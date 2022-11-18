import { View, Text } from 'react-native'
import React from 'react'

const HiddlePin = ({isSuccess}) => {
  return (
    <View className={`w-6 h-6 rounded-full ${isSuccess ? " bg-gray-pin" : " bg-white"}`} ></View>
    
  )
}

export default HiddlePin