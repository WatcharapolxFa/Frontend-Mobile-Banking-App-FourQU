import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';

import logo from '../assets/icon/logo.png';
const Login = ({navigation}) => {

  const HandleSignin = (values) => {
    console.log(values)
    navigation.navigate('NewPin')

    // axios.post('https://test/post', {
    //   phone: values.phone,
    //   email: values.email,
    // }).then( res => {
    //   res ? navigation.navigate('NewPin') : Alert.alert("Sign In Fail")
    // })
  }
  return (
    <Formik
      initialValues={{
        phone: '',
        email: '',
      }}
      onSubmit={values => HandleSignin(values)}
      validationSchema={yup.object().shape({
        phone: yup.number().integer().required(),
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
            <View className="h-1/2">
              <View className="items-center ">
                <Image source={logo} className="w-28 h-28" />
              </View>
            </View>

            <View className=" h-1/2 justify-center">
              <View className="mx-7 justify-center">
                <Text className="font-notobold text-white mb-2">Phone</Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                  value={values.phone}
                  className=" bg-white rounded h-8 px-1 py-0 font-noto"
                />
                {touched.phone && errors.phone && (
                  <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.phone}
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
