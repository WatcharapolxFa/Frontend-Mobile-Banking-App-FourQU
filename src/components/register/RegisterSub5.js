import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';

import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from '../../../src/assets/icon/logo.png';

const career = [
  {
    id: '1',
    title: 'Student',
  },
  {
    id: '2',
    title: 'Teacher',
  },
  {
    id: '3',
    title: 'Doctor',
  },
];

const salary = [
  {
    id: '1',
    title: '0 - 10,000',
  },
  {
    id: '2',
    title: '10,001 - 50,000',
  },
  {
    id: '3',
    title: '50,001 - 100,000',
  },
  {
    id: '4',
    title: '100,000 ++',
  },
];
const height = Dimensions.get('window').height;

const RegisterSub5 = ({navigation}) => {
  const [selectedCareer, setSelectedCareer] = useState();
  const [selectedSalary, setSelectedSalary] = useState();

  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 8.5}}
        className="w-full rounded-b-xl  bg-green-regis flex">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="mb-10 ">
          <Image source={logo} className="w-32 h-32 mx-auto" />
          <View className="  pb-10 inset-x-4 w-11/12 flex flex-col justify-end">
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-5">
                Career
              </Text>
              <View className="w-full bg-white mt-2 rounded-lg">
                <Picker
                  selectedValue={selectedCareer}
                  onValueChange={(itemValue, itemIndex) => setSelectedCareer(itemValue)
                  }>
                  {career.map(function (career) {
                    return (
                      <Picker.Item key={career.id} label={career.title} value={career.id} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-8">
                Salary
              </Text>
              <View className="w-full bg-white mt-2 rounded-lg">
                <Picker
                  selectedValue={selectedSalary}
                  onValueChange={salaryId => setSelectedSalary(salaryId)}>
                  {salary.map(function (salary) {
                    return (
                      <Picker.Item label={salary.title} value={salary.id} />
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
              <Pressable onPress={() => navigation.navigate('RegisterSub4')}>
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
              <Pressable onPress={() => navigation.navigate('RegisterSub6')}>
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

export default RegisterSub5;
