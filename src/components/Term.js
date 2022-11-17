import React from 'react'
import {View, Text, Image, Pressable, Alert, ScrollView} from 'react-native'

const Term = ({navigation}) => {
    return (
        <View style={{ flex: 1 }} className='bg-base'>
            <View style={{ flex: 1.4 }} className='flex-row w-full h-full items-center justify-center rounded-b-xl bg-green-main'>
                <View className='absolute left-3 bottom-10'>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image style={{ tintColor: '#FFFFFF' }} source={require('../assets/icon/back.png')} className=' w-12 h-12'></Image>
                    </Pressable>
                </View>
                <Text style={{ fontFamily: 'NotoSans-Bold' }} className='text-center text-4xl text-white'>Term</Text>
            </View>
            <View style={{ flex: 8.6 }}>
                <ScrollView>
                    {/* Enter Text here. */}
                </ScrollView>
            </View>
        </View>
    )
}

export default Term