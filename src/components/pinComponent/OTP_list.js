import { View, Text ,TouchableHighlight} from 'react-native'
import React from 'react'

const OTP_list = ({num,onPress}) => {
  return (
    <TouchableHighlight onPress={()=>onPress(num)} className='rounded-full'>
        <View className="flex bg-pin-button h-20 w-20 justify-center items-center flex-row rounded-full">
          <Text className="p-0 text-3xl font-bold">{num}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default OTP_list