import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import logo from '../assets/icon/logo.png';
const NotiTransaction = ({ data }) => {
  // const [data, setData] = useState({
  //   date: '2022-11-20',
  //   transactions: [
  //     {
  //       type: 'transfer',
  //       accountNo: '1234567890',
  //       amount: 123,
  //       dateTime: '2022-11-20T16:42:46+00:00',
  //     },
  //     {
  //       type: 'receive',
  //       accountNo: '1234567890',
  //       amount: 132,
  //       dateTime: '2022-11-20T16:43:46+00:00',
  //     },
  //     {
  //       type: 'transfer',
  //       accountNo: '1234567890',
  //       amount: 13,
  //       dateTime: '2022-11-20T16:44:46+00:00',
  //     },
  //   ],
  // });

  // const [type, setType] = useState('receive');
  // const [accountNo,setAccountNo] = useState('1234567890');
  // const [date,setDate] = useState(new Date('2015-03-25'));
  // const [amount,setAmount] = useState(100);

  function formatDate(d) {
    d = new Date(d);
    let text = d.toDateString();
    let date = '';
    date +=
      text.substring(8, 10) +
      ' ' +
      text.substring(4, 7) +
      ' ' +
      text.substring(text.length - 2, text.length);
    return date;
  }

  function formatTime(d) {
    d = new Date(d);
    let text = d.toLocaleTimeString();
    let time = '';
    time += text.substring(0, 5) + ' ' + text.substring(text.length - 2);
    return time;
  }

  function hashAccountNo(accountNo) {
    result = '';
    for (let i = 0; i < accountNo.length; i++) {
      if (i >= accountNo.length - 5 && i < accountNo.length - 1)
        result += accountNo.charAt(i);
      else result += 'x';
      if (i === 2 || i === 3 || i === accountNo.length - 2) result += '-';
    }
    return result;
  }

  function setAm(amount,type) {
    result = amount.toFixed(2).toString();
    return type === 'transfer' || type === 'withdraw'
      ? '-' + result + ' Baht'
      : '+' + result + ' Baht';
  }

  return (
    <View className="h-fit w-screen bg-green-sod px-3 my-3">
      {/* Date */}
      <View>
        <Text className=" text-base font-notobold text-white">
          {formatDate(data?.date)}
        </Text>
      </View>
      {/* Date */}
      {/* Transaction */}
      <View className="flex flex-col w-full bg-green-trans rounded-md">
        {data && data?.transactions?.map((tran, index) => (
          <View key={index}>
            <View className="flex flex-row w-full items-center p-1">
              {/* Logo */}
              <View className="p-2">
                <Image source={logo} className="w-12 h-12" />
              </View>
              {/* Details */}
              <View className="flex flex-col w-[80%]">
                <View className="flex flex-row justify-between">
                  <View className="">
                    <Text className="font-noto text-black text-sm">
                      {tran.type.substring(0, 1).toUpperCase() + tran.type.substring(1)}
                    </Text>
                  </View>
                  <View className="">
                    <Text className="font-noto text-black text-xs">
                      {formatTime(tran.dateTime)}
                    </Text>
                  </View>
                </View>
                <Text className="font-noto text-black text-xs">
                  Account No. {hashAccountNo(tran.accountNo)}
                </Text>
                <Text
                  className={`${
                    tran.type === 'transfer'
                      ? 'font-noto text-red-900 text-xs'
                      : 'font-noto text-green-700 text-xs'
                  }`}>
                  {setAm(tran.amount,tran.type)}
                </Text>
              </View>
              {/* Details */}
              
            </View>
            {index < data.transactions.length - 1 && <View className="w-[90%] h-[1px] bg-black m-auto"></View>}
          </View>
        ))}
        
      </View>
      {/* Transaction */}
    </View>
  );
};

export default NotiTransaction;
