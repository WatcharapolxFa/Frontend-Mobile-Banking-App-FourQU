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

const RegisterSub6 = ({navigation,route}) => {
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

      console.log(route.params.ssn.ssn);
      console.log(route.params.laserId.laserId);
      console.log(route.params.citizenship.citizenship);
      console.log(route.params.country.country);
      console.log(route.params.firstName.firstName);
      console.log(route.params.middleName.middleName);
      console.log(route.params.lastName.lastName);
      console.log(route.params.BoD.Bod);
      console.log(route.params.title.title);
      console.log(route.params.status.status);
      console.log(route.params.houseNo.houseNo);
      console.log(route.params.village.village);
      console.log(route.params.lane.lane);
      console.log(route.params.road.road);
      console.log(route.params.subDistrict.subDistrict);
      console.log(route.params.district.district);
      console.log(route.params.province.province);
      console.log(route.params.postalNo.postalNo);
      console.log(route.params.careerID.selectedCareer);
      console.log(route.params.salary.selectedSalary);
      console.log(email);
      console.log(phone);

//data for post to API
    // axios.post(`${baseUrl}/api/auth/signup`, {
    //   LaserID: route.params.laserId.laserId,
    //   SSN: route.params.ssn.ssn,
    //   firstName: route.params.firstName.firstName,
    //   middleName: route.params.middleName.middleName,
    //   lastName: route.params.lastName.lastName,
    //   BoD : route.params.BoD.Bod,
    //   phone: phone, 
    //   citizenship: route.params.citizenship.citizenship,
    //   email :email,
    //   title: route.params.title.title, 
    //   country : route.params.country.country,
    //   salary: route.params.salary.selectedSalary,
    //   careerID: route.params.careerID.selectedCareer,
    //   postalCode: route.params.postalNo.postalNo,
    //   province: route.params.province.province,
    //   district: route.params.district.district,
    //   subDistrict: route.params.subDistrict.subDistrict,
    //   houseNO: route.params.houseNo.houseNo,
    //   village: route.params.village.village,
    //   lane:route.params.lane.lane,
    //   road: route.params.road.road
    //   });.then( res => {
    //     console.log(res);
    //     navigation.navigate('VerifyOTP',{

    // })
    //   })

      // navigation.navigate('VerifyOTP');
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
              onPress={() => navigation.navigate('RegisterSub5',{
                
                'ssn':route.params.ssn,
                'laserId':route.params.laserId,
                'citizenship':route.params.citizenship,
                'country':route.params.country,
                'firstName':route.params.firstName,
                'middleName':route.params.middleName,
                'lastName':route.params.lastName,
                'BoD':route.params.BoD,
                'title':route.params.title,
                'status':route.params.status,
                'houseNo':route.params.houseNo,
                'village':route.params.village,
                'lane':route.params.lane,
                'road':route.params.road,
                'subDistrict':route.params.subDistrict,
                'district':route.params.district,
                'province':route.params.province,
                'postalNo':route.params.postalNo,
                'careerID': route.params.careerID,
                'salary': route.params.salary
              }
              )}>
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
