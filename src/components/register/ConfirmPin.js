import {
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Image,
    Alert,
    StyleSheet,
  } from 'react-native';
  
  import React from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import PinView from 'react-native-pin-view';
  import {useState, useEffect} from 'react';
  import {TouchableHighlight} from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  import OTP_list from '../pinComponent/OTP_list.js';
  import HiddlePin from '../pinComponent/HiddlePin.js';

  import logo from '../../../src/assets/icon/logo.png';
  import back from '../../../src/assets/icon/backGreen.png';

  const ConfirmPin = ({navigation}) => {
    
    const [pin, setPin] = useState('');
    const [checkPin, setCheckPin] = useState('');
    const onPress = value => {
      if (/^([0-9]){0,5}$/.test(pin) && /^([0-9])$/.test(value)) {
        setPin(val => val + value);
        console.log(pin);
      }
    };
    const delClick = () => {
      if (pin.length == 0) return;
      setPin(val => val.slice(0, -1));
    };
    useEffect(() => {
      readPin()
      if (pin.length === 6) {
        // readPin()
        console.log(checkPin)
        if (pin == checkPin){
          console.log("vaid PIN!")
          navigation.navigate("Home")
  
        }
        else{
          setPin(val=>val.slice(0,-6))
          console.log("Invaid PIN!!")
      }
  
      }
    }, [pin]);

    const readPin = async () => {
      try {
        const sPin = await AsyncStorage.getItem('@storage_Key');
        setCheckPin(sPin);
      } catch (error) {
        console.log("error read Pin")
      }
    };
  
    return (
      //update confirm pin
      <View style={{flex: 1}} className="bg-green-regis">
        <View
          style={{flex: 4}}
          className=" object-center w-full rounded-b-xl  bg-green-regis container">
          <View className=" w-full h-full  justify-between items-center ">
            <Image source={logo} className="w-32 h-32" />
            <Text
              style={{fontFamily: 'NotoSans-Bold'}}
              className="text-3xl text-egg">
              Confirm Pin
            </Text>
  
            <View className=" w-2/3 h-10 flex-1 flex-row justify-between items-center">
              <HiddlePin isSuccess={pin.length >= 1 ? false:true} />
              <HiddlePin isSuccess={pin.length >= 2 ? false:true} />
              <HiddlePin isSuccess={pin.length >= 3 ? false:true} />
              <HiddlePin isSuccess={pin.length >= 4 ? false:true} />
              <HiddlePin isSuccess={pin.length >= 5 ? false:true} />
              <HiddlePin isSuccess={pin.length >= 6 ? false:true} />
            </View>
          </View>
        </View>
  
        <View
          style={{flex: 6}}
          className="flex flex-col h-fit justify-between px-7 py-7">
          <View className="flex justify-between flex-row w-full">
            <OTP_list num={'1'} onPress={onPress} />
            <OTP_list num={'2'} onPress={onPress} />
            <OTP_list num={'3'} onPress={onPress} />
          </View>
  
          <View className="flex justify-between flex-row w-full">
            <OTP_list num={'4'} onPress={onPress} />
            <OTP_list num={'5'} onPress={onPress} />
            <OTP_list num={'6'} onPress={onPress} />
          </View>
  
          <View className="flex justify-between flex-row w-full">
            <OTP_list num={'7'} onPress={onPress} />
            <OTP_list num={'8'} onPress={onPress} />
            <OTP_list num={'9'} onPress={onPress} />
          </View>
  
          <View className="flex justify-between flex-row w-full">
            <View className="flex  h-20 w-20 justify-center items-center flex-row rounded-full"></View>
            <OTP_list num={'0'} onPress={onPress} />
  
            <TouchableHighlight
              className="rounded-full"
              onPress={delClick}>
              <View className="flex h-20 w-20 justify-center items-center flex-row rounded-full">
                <Image source={back} className="w-16 h-16 items-center" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };
  
  export default ConfirmPin;
  