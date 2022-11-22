import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,
} from 'react-native';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Checkbox} from 'react-native-paper';

const RegisterSub3 = ({navigation,route}) => {
  const [houseNo, setHouseNo] = useState();
  const [village, setVillage] = useState();
  const [lane, setLane] = useState();
  const [road, setRoad] = useState();
  const [subDistrict, setSubDistrict] = useState();
  const [district, setDistrict] = useState();
  const [province, setProvince] = useState();
  const [postalNo, setPostalNo] = useState();

  const checkValidate = () => {
    var submit = true;
    
    if (houseNo == null || houseNo == '') {
      submit = false;
      alert('Please enter your House No.');
    }
    else if (!houseNo.match(/^[0-9/]+$/)){
      submit = false;
      alert("House No. must have only 0-9, / characters.");
    }
    else if (village == null || village == '') {
      submit = false;
      alert('Please enter your Village.');
    }
    else if (!village.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("Village must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (lane == null || lane == "") {
      submit = false;
      alert('Please enter your lane.');
    }
    else if (!lane.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("Lane must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (road == null || road == '') {
      submit = false;
      alert('Please enter your road.');
    }
    else if (!road.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("Road must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (subDistrict == null || subDistrict == '') {
      submit = false;
      alert('Please enter your Sub-District.');
    }
    else if (!subDistrict.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("Sub-District must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (district == null || district == '') {
      submit = false;
      alert('Please enter your District.');
    }
    else if (!district.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("District must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (province == null || province == '') {
      submit = false;
      alert('Please enter your Province.');
    }
    else if (!province.match(/^[0-9a-zA-Z]+$/)){
      submit = false;
      alert("Province must have only a-Z , A-Z, 0-9 characters.");
    }
    else if (postalNo == null || postalNo == '') {
      submit = false;
      alert('Please enter your Postal number.');
    }
    else if (postalNo.length < 5) {
      submit = false;
      alert('Postal number must have 5 characters.');
    }
    else if (!postalNo.match(/^[0-9]+$/)){
      submit = false;
      alert("Postal number must have 0-9 characters.");
    }
    
    
    if (submit == true){
      console.log("valid");
      navigation.navigate('RegisterSub5',{
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
        'houseNo':{houseNo},
        'village':{village},
        'lane':{lane},
        'road':{road},
        'subDistrict':{subDistrict},
        'district':{district},
        'province':{province},
        'postalNo':{postalNo}

      })
    }
  };

  return (
    <View style={{flex: 1}} className="bg-base">
      <View style={{flex: 8.5}} className="w-full rounded-b-xl  bg-green-regis">
        <ScrollView className="mb-10">
          <Text
            style={{fontFamily: 'NotoSans-Bold'}}
            className="text-2xl text-white text-center mt-10 ">
            House registration address
          </Text>

          <View className="mt-7 inset-x-4 w-11/12">
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-4">
                House No.
              </Text>
              <View className=" w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setHouseNo(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-4">
                Village
              </Text>
              <View className=" w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setVillage(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>
            

            <View className="flex-row flex-1">
              <View className="justify-items-start basis-5/12">
                <Text
                  style={{fontFamily: 'NotoSans-Bold'}}
                  className="text-1xl text-white mt-3">
                  Lane
                </Text>
                <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setLane(newText)}
                  maxLength={30}></TextInput>
                </View>
              </View>
              <View className="justify-items-center basis-2/12"></View>

              <View className="justify-items-end basis-5/12">
                <Text
                  style={{fontFamily: 'NotoSans-Bold'}}
                  className="text-1xl text-white mt-3">
                  Road
                </Text>
                <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setRoad(newText)}
                  maxLength={30}></TextInput>
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-3">
                Sub-District
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setSubDistrict(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-3">
                District
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setDistrict(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-3">
                Province
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setProvince(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-5">
                Postal Number
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setPostalNo(newText)}
                  maxLength={5}></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.5}} className="bg-base">
        <View className=" flex-row flex-1">
          <View className=" justify-items-start basis-1/2">
            <View className="flex-1 flex-row">
              <Pressable onPress={() => navigation.navigate('RegisterSub2',{
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
              })}>
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
              <Pressable
                onPress={() => checkValidate()}>
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

export default RegisterSub3;
