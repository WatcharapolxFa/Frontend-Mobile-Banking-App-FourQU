import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChevronLeftIcon, ArrowPathIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import logo from '../assets/icon/logo.png';

import Activity from './Activity';
import ReqState from './ReqState';

const Tab = createNativeStackNavigator();

const Transaction = ({navigation}) => {
  const [active, setActive] = React.useState(true);
  const [name, setName] = React.useState('test1 Test1');
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo';

  // const fetchData = async() => {
  //   await axios
  //     .post(
  //       'https://server-quplus.herokuapp.com/api/auth/signin',
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )
  //     .then(response => {
  //       console.log(response.data.AcessToken);
  //       axios
  //         .get(
  //           'https://server-quplus.herokuapp.com/api/auth/information',
  //           {},
  //           {
  //             headers: {
  //               Authorization: `Bearer ${response.data.AcessToken}`,
  //             },
  //           },
  //         )
  //         .then(res => {
  //           console.log(res.data);
  //           setName(res.data.data.firstName);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     });
  // };
  // React.useEffect(() => {
  //   fetchData()
  // }, []);

  const hashAccountNo = accountNo => {
    result = '';
    for (let i = 0; i < accountNo.length; i++) {
      if (i >= accountNo.length - 5 && i < accountNo.length - 1)
        result += accountNo.charAt(i);
      else result += 'x';
      if (i === 2 || i === 3 || i === accountNo.length - 2) result += '-';
    }
    return result;
  };

  return (
    <View className=" min-h-full h-max bg-base">
      {/* Header */}
      <View className=" h-[38%] mb-4">
        <View className="flex bg-green-sod rounded-b-2xl shadow-xl shadow-black">
          {/* Title */}
          <View className="flex-row ">
            <View className="w-1/6 items-center justify-end ">
              <Pressable onPress={() => navigation.navigate('Home')}>
                <ChevronLeftIcon color="white" size={36} />
              </Pressable>
            </View>
            <View className=" items-center justify-center w-4/6">
              <Text className="font-notobold  text-white text-3xl mt-3">
                Account/Card
              </Text>
            </View>
            <View className=" w-1/6">
              <Text></Text>
            </View>
          </View>
          {/* Title */}

          {/* Bank logo + Name */}
          <View className="flex-row mt-4 ">
            <View className="ml-2 w-4/12 items-end">
              <View className="rounded-full border-[3px] border-white p-1 ">
                <Image source={logo} className="w-20 h-20 " />
              </View>
            </View>
            <View className=" ml-2 justify-center">
              <Text className=" font-notobold text-yellowonn text-lg ">
                {name}
              </Text>
              <Text className="font-noto text-xs text-white ">
                xxx-x-x1924-x
              </Text>
            </View>
          </View>
          {/* Bank logo + Name */}

          {/* Money Data */}
          <View className=" flex-row mx-5 my-2  ">
            <View className="w-1/2 ">
              <Text className="font-noto text-sm text-white ">
                Available Bal.
              </Text>
              <Text className="font-noto text-sm text-white">
                Outstanding Bal.
              </Text>
            </View>
            <View className="w-1/2 items-end">
              <Text className="font-noto text-sm text-white">100.49</Text>
              <Text className="font-noto text-sm text-white">100.49</Text>
              <View className="flex-row items-center">
                <ArrowPathIcon color="#F6D8A9" size={13} />
                <Text className="ml-1 font-noto text-xs text-yellowonn">
                  Updated at 2.32 PM
                </Text>
              </View>
            </View>
          </View>
          {/* Money Data */}
        </View>
        {/* Nav */}
        <View>
          <View className="relative z-10">
            <View className="flex flex-row mx-3 mt-4 border-b-[0.5px]">
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(true);
                    // navigation.navigate('Activity');
                  }}>
                  <View className=" h-7 items-center justify-start ">
                    <Text
                      className={
                        (active ? 'border-b-4 border-red-onn' : 'border-0') +
                        ' font-notoMedium text-black'
                      }>
                      Activity
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(false);
                    // navigation.navigate('ReqState');
                  }}>
                  <View className=" h-7 items-center justify-start">
                    <Text
                      className={
                        (active ? 'border-0' : 'border-b-4 border-red-onn') +
                        ' font-notoMedium text-black'
                      }>
                      Request Statement
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {/* Nav */}
      </View>
      {/* Header */}

      {/* Child Component */}
      {/* {((active) => {
        if (active){
          return <Activity/>
        }
        else {
          return <ReqState/>
        }
      })} */}

      {active ? <Activity /> : <ReqState />}

      {/* <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Activity">
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="ReqState" component={ReqState} />
      </Tab.Navigator> */}
      {/* Child Component */}
    </View>
  );
};

export default Transaction;
