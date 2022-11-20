import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChevronLeftIcon, ArrowPathIcon} from 'react-native-heroicons/outline';
// import axios from 'axios';
// import logo from '../assets/images/logo.png';
import ScanQr from './ScanQrCode';
import CameraScans from './CameraScan';

const Navbar = ({ navigation }) => {
  const [active, setActive] = React.useState(true);

  return (
    <View>
      {/* Header */}
      <View className=" h-[38%] mb-4">
        <View className="flex bg-green-sod rounded-b-2xl shadow-xl shadow-black">
          {/* Title */}
          <View className="flex-row ">
            <View className="w-1/6 items-center justify-end ">
              <Pressable onPress={() => navigation.navigate('Home')}>
              <ChevronLeftIcon color="white" size={36} />  
              </Pressable>
            </View>
            <View className=" items-center justify-center w-4/6">
              <Text className="  text-white text-3xl mt-3">
                Scan/MyQr
              </Text>
            </View>
            <View className=" w-1/6">
            </View>
          </View>
          {/* Title */}

          {/* Bank logo + Name */}
          <View className="flex-row mt-4 ">
            <View className="ml-2 w-4/12 items-end">
            </View>
          </View>
          {/* Bank logo + Name */}

          {/* Money Data */}

          {/* Money Data */}
        </View>
        {/* Nav */}
        <View>
          <View className="relative z-10">
            <View className="flex flex-row mx-3 mt-4 border-b-[0.5px]">
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(true);
                    // navigation.navigate('Activity');
                  }}>
                  <View className=" h-7 items-center justify-start ">
                    <Text
                      className={
                        (active ? 'border-b-4 border-red-onn' : 'border-0') +
                        ' Medium text-black'
                      }>
                      Scan
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(false);
                    // navigation.navigate('ReqState');
                  }}>
                  <View className=" h-7 items-center justify-start">
                    <Text
                      className={
                        (active ? 'border-0' : 'border-b-4 border-red-onn') +
                        ' Medium text-black'
                      }>
                      QR to Receive
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {/* Nav */}
      </View>
      {/* Header */}
      <View className="h-1/2 ">
        {active ? <CameraScans className=''/> : <ScanQr />}

      </View>

    </View>

  );
};
export default Navbar;