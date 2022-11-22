
import { 
  View, 
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,
  Alert} from 'react-native'
  
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';

import logo from "../../assets/icon/logo.png"

const RegisterSub1= ({navigation}) => {

  //const for get citizenship & contry

  const citizenship1 = [
    {
      country: 'ThaiLand',
    },
    {
      country: 'Lao',
    },
    {
      country: 'Chaina',
    },
  ];
  const country1 = [
    {
      country: 'ThaiLand',
    },
    {
      country: 'Lao',
    },
    {
      country: 'Chaina',
    },
  ];

  const [ssn, setSsn] = useState("");
  const [laserId, setLaserId] = useState("");
  const [citizenship, setCitizenship] = useState("Thailand");
  const [country, setCountry] = useState("Thailand");
  
  const backIntro = () => {
    setSsn("");
    setLaserId("");
    navigation.navigate('Intro');
  };
  

  const validate = () => {
    var letters = /^[0-9]+$/;
    var submit = true;
    if  (ssn.length < 9){
      submit = false;
      alert("SSN must be have 9 characters");
    }
    else if (!ssn.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("please enter SSN only A-Z, a-z, 0-9 chracters");
      // navigation.navigate('RegisterSub2')
    }
    else if (laserId.length < 12){
      submit = false;
      alert("Laser ID must be have 12 characters");
    }
    else if (!laserId.match(/^[0-9]+$/)){
      submit = false;
      alert("please enter Laser ID only 0-9 chracters");
    };

    if (submit == true){
      navigation.navigate('RegisterSub2',
      {
        'ssn':{ssn},
        'laserId':{laserId},
        'citizenship':{citizenship},
        'country':{country}
      });
    }
    
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8.5}} className='w-full rounded-b-xl bg-green-regis'>
      <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="mb-10 ">
          <Image source={logo} className="w-32 h-32 mx-auto" />
          <View className="inset-x-4 w-11/12">
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-5">SSN</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
                <TextInput 

                  className="ml-2 my-auto"
                  onChangeText={newText => setSsn(newText)}
                  defaultValue={ssn}
                  maxLength = {9}
                ></TextInput>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-5">Laser ID</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
                <TextInput 

                  className="ml-2 my-auto"
                  onChangeText={newText => setLaserId(newText)}
                  defaultValue={laserId}
                  maxLength = {12}
                ></TextInput>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Citizenship</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
              <Picker
                  selectedValue={citizenship}
                  onValueChange={(itemValue, itemIndex) => setCitizenship(itemValue)}>
                  {citizenship1.map(function (citizenship1,index) {
                    return (
                      <Picker.Item key={index} label={citizenship1.country} value={citizenship1.country} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Country</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
              <Picker
                  selectedValue={country}
                  onValueChange={country => setCountry(country)}>
                  {country1.map(function (country1,index) {
                    return (
                      <Picker.Item key={index} label={country1.country} value={country1.country} />
                    );
                  })}
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
              <Pressable onPress={() => backIntro()}>
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
                  <Pressable onPress={() => validate()}>
                    <View className=" my-auto mr-5 w-14 h-14 rounded-full bg-green-button justify-items-end">
                        <Image tintColor='white' className=" h-2/3 w-3/5 m-auto " source={{uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png'}}>
                        </Image>
                    </View>
                  </Pressable>
                  <Text style={{fontFamily: "NotoSans-Bold"}} className="my-auto mr-4 text-base" >
                      Next
                  </Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RegisterSub1

