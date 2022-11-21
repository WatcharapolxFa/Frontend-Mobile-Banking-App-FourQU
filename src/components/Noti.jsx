import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {ChevronLeftIcon, ArrowPathIcon} from 'react-native-heroicons/outline';
import NotiTransaction from './NotiTransaction';
const Noti = ({navigation}) => {
  const [data, setData] = useState([
    {
      date: '2022-11-18',
      transactions: [
        {
          type: 'transfer',
          accountNo: '1234567890',
          amount: 123,
          dateTime: '2022-11-20T16:42:46+00:00',
        },
        {
          type: 'receive',
          accountNo: '1234567890',
          amount: 132,
          dateTime: '2022-11-20T16:43:46+00:00',
        },
        {
          type: 'transfer',
          accountNo: '1234567890',
          amount: 13,
          dateTime: '2022-11-20T16:44:46+00:00',
        },
      ],
    },
    {
        date: '2022-11-19',
        transactions: [
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 123,
            dateTime: '2022-11-20T16:42:46+00:00',
          },
          {
            type: 'receive',
            accountNo: '1234567890',
            amount: 132,
            dateTime: '2022-11-20T16:43:46+00:00',
          },
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 13,
            dateTime: '2022-11-20T16:44:46+00:00',
          },
        ],
      },
      {
        date: '2022-11-20',
        transactions: [
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 123,
            dateTime: '2022-11-20T16:42:46+00:00',
          },
          {
            type: 'receive',
            accountNo: '1234567890',
            amount: 132,
            dateTime: '2022-11-20T16:43:46+00:00',
          },
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 13,
            dateTime: '2022-11-20T16:44:46+00:00',
          },
        ],
      },
      {
        date: '2022-11-21',
        transactions: [
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 123,
            dateTime: '2022-11-20T16:42:46+00:00',
          },
          {
            type: 'receive',
            accountNo: '1234567890',
            amount: 132,
            dateTime: '2022-11-20T16:43:46+00:00',
          },
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 13,
            dateTime: '2022-11-20T16:44:46+00:00',
          },
        ],
      },
      {
        date: '2022-11-22',
        transactions: [
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 123,
            dateTime: '2022-11-20T16:42:46+00:00',
          },
          {
            type: 'receive',
            accountNo: '1234567890',
            amount: 132,
            dateTime: '2022-11-20T16:43:46+00:00',
          },
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 13,
            dateTime: '2022-11-20T16:44:46+00:00',
          },
        ],
      },
      {
        date: '2022-11-23',
        transactions: [
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 123,
            dateTime: '2022-11-20T16:42:46+00:00',
          },
          {
            type: 'receive',
            accountNo: '1234567890',
            amount: 132,
            dateTime: '2022-11-20T16:43:46+00:00',
          },
          {
            type: 'transfer',
            accountNo: '1234567890',
            amount: 13,
            dateTime: '2022-11-20T16:44:46+00:00',
          },
        ],
      },
  ]);

  return (
    <ScrollView className="flex flex-col h-screen bg-green-sod">
      {/* Header */}
      <View className="flex-row ">
        <View className="w-1/6 items-center justify-end ">
          <Pressable onPress={() => navigation.navigate('Home')}>
            <ChevronLeftIcon color="white" size={36} />
          </Pressable>
        </View>
        <View className=" items-center justify-center w-4/6">
          <Text className="font-notobold text-white text-3xl mt-3">
            Notifications
          </Text>
        </View>
      </View>
      {/* Header */}

        {data && data.map((val) => <NotiTransaction key={val.date} data={val} />)}
    </ScrollView>
  );
};

export default Noti;
