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
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-neat-date-picker';

import logo from '../../assets/icon/logo.png';

const RegisterSub2 = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [title, setTitle] = useState('Mr.');
  const [status, setStatus] = useState('Single');
  const [BoD, setBoD] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };
  const onConfirm = date => {
    // You should close the modal in here
      console.log(date.dateString)
      setBoD(date.dateString);
      setShowDatePicker(false);
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
  };

  const formatDate = d => {
    const date = new Date(d);
    const month = date.getMonth() + 1;
    if (d == null){
      return null;
    }
    else {
      return [
      date.getFullYear(),
      month < 10 ? `0${month}` : month,
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    ].join('-');}
  };

  const checkValidate = () => {
    const date = new Date();
    var submit = true;
    var number = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    
    if (firstName == null) {
      submit = false;
      alert('Please enter your first name');
    }
    else if (!firstName.match(letters)){
      submit = false;
      alert("firstname must have only A-Z or a-z characters");
    }
    
    else if (lastName == null) {
      submit = false;
      alert('Please enter your last name');
    }
    else if(!lastName.match(letters)){
      submit = false;
      alert("last name must have only A-Z or a-z characters");
    }
    else if(title == null){
      submit = false;
      alert("Please select your title");
    }
    else if(BoD == null){
      submit = false;
      alert("Please select your birth date");
    }
    else if(status == null){
      submit = false;
      alert("Please select your status");
    }
    console.log(date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate());
    if (submit == true){
      navigation.navigate('RegisterSub3')
    }
  };
  return (
    <View style={{flex: 1}}>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        colorOptions={{headerColor: '#9DD9D2'}}
        onCancel={onCancel}
        onConfirm={onConfirm}
        dateStringFormat={'yyyy-mm-dd 00:00:00'}
      />
      <View style={{flex: 8.5}} className="w-full rounded-b-xl  bg-green-regis">
        <ScrollView className="mb-10">
          <Image source={logo} className="w-32 h-32 m-auto" />
          <View className="mt-1 inset-x-4 w-11/12">
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                First name
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  defaultValue={firstName}
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setFirstName(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Middle name
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setMiddleName(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Last name
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setLastName(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7 ">
                Title
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <Text
                  className="p-0 ml-2 my-1.5 text-black"
                  style={{
                    position: 'absolute',
                  }}>
                  {title}
                </Text>
                <Picker
                  style={{opacity: 0}}
                  selectedValue={title}
                  onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}>
                  <Picker.Item label="Mr." value="Mr." />
                  <Picker.Item label="Mrs." value="Mrs." />
                  <Picker.Item label="Ms." value="Ms." />
                </Picker>
              </View>
            </View>
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white  mt-7">
                BoD (yyyy-mm-dd)
              </Text>
              <Pressable onPress={openDatePicker}>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <Text className="p-0 ml-2 my-auto text-black">{formatDate(BoD)}</Text>
              </View>
              
              </Pressable>
              
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Status
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <Text
                  className="p-0 ml-2 my-1.5 text-black"
                  style={{
                    position: 'absolute',
                  }}>
                  {status}
                </Text>
                <Picker
                  style={{opacity: 0}}
                  selectedValue={status}
                  onValueChange={(itemValue, itemIndex) =>
                    setStatus(itemValue)
                  }>
                  <Picker.Item label="Single" value="Single" />
                  <Picker.Item label="Married" value="Married" />
                  <Picker.Item label="Divorced" value="Divorced" />
                  <Picker.Item label="Widowed" value="Widowed" />
                </Picker>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.5}}>
        <View className=" flex-row flex-1">
          <View className=" justify-items-start basis-1/2">
            <View className="flex-1 flex-row">
              <Pressable onPress={() => navigation.navigate('RegisterSub1')}>
                <View className=" my-auto ml-5 w-14 h-14 rounded-full bg-red-noti">
                  <Image
                    tintColor="white"
                    style={{transform: [{rotate: '180deg'}]}}
                    className=" h-2/3 w-3/5 m-auto "
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png',
                    }}></Image>
                </View>
              </Pressable>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="my-auto ml-4 text-base">
                Back
              </Text>
            </View>
          </View>
          <View className=" justify-items-start basis-1/2">
            <View className="flex-1 flex-row-reverse">
              <Pressable onPress={() => checkValidate()}>
                <View className=" my-auto mr-5 w-14 h-14 rounded-full bg-green-button justify-items-end">
                  <Image
                    tintColor="white"
                    className=" h-2/3 w-3/5 m-auto "
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png',
                    }}></Image>
                </View>
              </Pressable>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="my-auto mr-4 text-base">
                Next
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterSub2;
