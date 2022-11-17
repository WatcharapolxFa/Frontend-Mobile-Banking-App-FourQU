import {View, Text, ScrollView , Image, Pressable } from 'react-native';
import React from 'react';
import bill from '../assets/images/Bill.png'
import bitcoin from '../assets/images/bitcoin.png'

const Sucessful = ({navigation}) => {
  return (
    <View className=" h-screen bg-green-sod relative flex flex-col">
      {/* Header */}
      <View className="">
        <Text className="text-center font-notobold text-white text-xl mt-3">Transaction Successful</Text>
      </View>
      <View className="mt-10 items-center">
        <Image source={bill} className="rounded-xl w-[350] h-[350]"/>
      </View>
      <View  className="mt-4 ml-6">
        <Text className = "font-noto text-white text-sm">Available Balance: 1234.00 Baht</Text> 
      </View>
      <View className="bg-[#155745] bottom-0 z-10 absolute h-24 flex justify-center items-center w-screen">
        <View className="rounded-full bg-[#5ABB9E] p-2 logo-sd border-black border-2 shadow-logo">
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={bitcoin} className="w-10 h-10"/>
            </Pressable>
        </View>
        <Text className="font-notobold text-white">Back to Home</Text>
      </View>
      {/* Header */}
    </View>
  );
};

export default Sucessful;
