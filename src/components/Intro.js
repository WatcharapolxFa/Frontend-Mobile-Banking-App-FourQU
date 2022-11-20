import {
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Image,
    Alert,
  } from 'react-native';
  
  import React, {useState} from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  
  import logo from '../assets/icon/logo.png';
  import backArrow from '../assets/icon/backArrow.png';
  
  const Intro = ({navigation}) => {
    
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 7.2}} className="w-full rounded-b-xl  bg-green-regis">
          <View className="my-auto">
            <View>
            <Image source={logo} className="w-52 h-52 mx-auto my-auto" />
            </View>
            <View>
            <Text className='text-4xl mx-auto text-white my-2 font-bold'>Four QU</Text>
            </View>
            </View>
            
            
              
        </View>
  
        <View style={{flex: 2.8}}>
        <View className="mt-10">
            <View><Pressable
            className="h-16 w-4/5 bg-green-sod m-auto rounded-md"
            onPress={() => navigation.navigate('Login')}>
            <View className="m-auto ">
              <Text
                style={{fontFamily: 'NotoSans-Regular'}}
                className="text-2xl text-white m-auto">
                SIGN IN
              </Text>
            </View>
          </Pressable>
          </View>

            <View className='mt-5'>
            <Pressable
            className="h-16 w-4/5 bg-green-button m-auto rounded-md"
            onPress={() => navigation.navigate('RegisterSub1')}>
            <View className="m-auto">
              <Text
                style={{fontFamily: 'NotoSans-Regular'}}
                className="text-2xl text-white m-auto">
                SIGN UP
              </Text>
            </View>
          </Pressable>

            </View>
          
          </View>
        </View>
      </View>
    );
  };
  
  export default Intro;
  