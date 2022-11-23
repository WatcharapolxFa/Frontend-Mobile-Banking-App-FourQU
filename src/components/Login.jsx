import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import backArrow from '../assets/icon/backArrow.png';

import logo from '../assets/icon/logo.png';
const Login = ({navigation}) => {

  const HandleSignin = (values) => {
    console.log(values)
    

    axios.post('https://server-quplus.herokuapp.com/api/auth/signinEmail', {
      email: values.email,
      SSN: values.SSN,
    }).then( res => {
      if(res.status == 201){
        navigation.navigate('NewPin')
      }
      else{
        Alert.alert("Sign In Fail")
      }
      // navigation.navigate('NewPin') :
    })
  }
  return (
    <Formik
      initialValues={{
        SSN: '',
        email: '',
      }}
      onSubmit={values => HandleSignin(values)}
      validationSchema={yup.object().shape({
        SSN: yup.string().required(),
        email: yup.string().email().required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View className="min-h-full bg-base">
          <View className="bg-green-sod rounded-b-2xl h-[85%] shadow shadow-black">
          <Pressable 
          className="mt-5"
          style={{
                position: 'absolute',
              }} 
              onPress={() => navigation.navigate('Intro')}>
            <Image
              source={backArrow}
              className="w-8 h-8 ml-5"
              
            />
          </Pressable>
            <View className="h-1/2">
              
              <View className="items-center ">
                <Image source={logo} className="w-28 h-28" />
              </View>
            </View>

            <View className=" h-1/2 justify-center">
              <View className="mx-7 justify-center">
                <Text className="font-notobold text-white mb-2">SSN</Text>
                <TextInput
                  
                  onChangeText={handleChange('SSN')}
                  onBlur={() => setFieldTouched('SSN')}
                  value={values.SSN}
                  className=" bg-white rounded h-8 px-1 py-0 font-noto"
                />
                {touched.SSN && errors.SSN && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.SSN}
                  </Text>
                )}

                <Text className="font-notobold text-white mb-2 mt-2">
                  Email
                </Text>
                <TextInput
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  value={values.email}
                  className=" bg-white rounded h-8 px-1 py-0 font-noto"
                />
                {touched.email && errors.email && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.email}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View className="h-[15%] mx-7">
            <TouchableHighlight
              onPressOut={handleSubmit}
              disabled={!isValid}
              className="bg-green-oon rounded-lg items-center justify-center h-14 my-auto shadow shadow-black">
              <Text className="font-noto text-xl text-white py-2">SIGN IN</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
