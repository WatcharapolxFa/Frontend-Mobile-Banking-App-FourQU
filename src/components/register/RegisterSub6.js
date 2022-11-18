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
import validator from 'validator';

import logo from '../../assets/icon/logo.png';
import backArrow from '../../assets/icon/backArrow.png';

const RegisterSub6 = ({navigation}) => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const checkValidate1 = () => {
    var submit = true;
    var validator = require('validator');

    if (phone == null) {
      submit = false;
      alert('Please enter your Phone number.');
    } else if (phone.length < 10) {
      submit = false;
      alert('Phone number must have at least 10 characters');
    } else if (!phone.match(/^[0-9]+$/)) {
      submit = false;
      alert('Phone number must have only 0-9 characters.');
    } else if (email == null) {
      submit = false;
      alert('Please enter your email.');
    } else if (!validator.isEmail(email)) {
      submit = false;
      alert('Please enter a valid email address.');
    }

    if (submit == true) {
      console.log('aaa');
      navigation.navigate('VerifyOTP');
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8.5}} className="w-full rounded-b-xl  bg-green-regis">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="mb-10 ">
          <Pressable 
          className="mt-5"
          style={{
                position: 'absolute',
              }} 
              onPress={() => navigation.navigate('RegisterSub5')}>
            <Image
              source={backArrow}
              className="w-8 h-8 ml-5"
              
            />
          </Pressable>
          <Image source={logo} className="w-32 h-32 mx-auto" />
          <View className="pb-10 inset-x-4 w-11/12 flex flex-col justify-end">
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-5">
                Phone
              </Text>
              <View className="w-full bg-white mt-2 rounded-lg h-12">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setPhone(newText)}
                  maxLength={10}></TextInput>
              </View>
            </View>
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-8">
                Email
              </Text>
              <View className="w-full bg-white mt-2 rounded-lg h-12">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setEmail(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{flex: 1.5}}>
        <Pressable
          className="h-1/2 w-4/5 bg-green-button m-auto rounded-md"
          onPress={() => checkValidate1()}>
          <View className="m-auto">
            <Text
              style={{fontFamily: 'NotoSans-Regular'}}
              className="text-2xl text-white m-auto">
              Submit
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterSub6;
