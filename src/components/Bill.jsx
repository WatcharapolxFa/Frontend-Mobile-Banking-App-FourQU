import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Logo from '../assets/icon/logo.png';
import ArrowBottom from '../assets/icon/Arrow.png';

const Bill = props => {
  const billRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = Math.round(Dimensions.get('window').width * 0.9);
    console.log({width});
    setWidth(width);
  }, []);

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
    <View className="flex items-center justify-center ">
      {width > 0 && (
        <View
          ref={billRef}
          style={{width: width, height: width * 1.3}}
          className={`flex flex-col p-3 h-fit bg-green-bill rounded-md`}>
          <View className="flex flex-row gap-y-4 items-center justify-between">
            <View className="flex flex-row items-center gap-x-1">
              <View className="h-9 w-1 bg-green-green" />
              <View className="flex flex-col justify-center gap-2">
                <Text className="text-base font-notobold text-black">
                  Transfer Completed
                </Text>
                <Text className="text-sm text-black font-noto">
                  {new Date(props.timestamp).toLocaleString()}
                </Text>
              </View>
            </View>
            <View>
              <Image source={Logo} className="w-12 h-12" />
            </View>
          </View>

          <View className="flex justify-center items-center w-full h-[1px] my-3 bg-black" />

          <View className="px-2">
            <View className="flex flex-row gap-x-4 items-center">
              <View className="flex items-center justify-center bg-green-kem rounded-full w-16 h-16">
                <Image source={Logo} className="w-12 h-12" />
              </View>
              <View className="flex flex-col gap-y-1 bg-red-500">
                <Text className="text-sm font-notobold text-black">
                  MR. ASARAWOOT S
                </Text>
                <Text className="text-xs font-noto text-black">FourQU</Text>
                <Text className="text-xs font-noto text-black">
                  xxx-x-x1924-x
                </Text>
              </View>
            </View>

            <View className="my-2">
              <Image source={ArrowBottom} className="ml-6 h-8 w-4" />
            </View>

            <View className="flex flex-row gap-x-4 items-center">
              <View className="flex items-center justify-center bg-green-kem rounded-full w-16 h-16">
                <Image source={Logo} className="w-12 h-12" />
              </View>
              <View className="flex flex-col gap-y-1">
                <Text className="text-sm font-notobold text-black">
                  {props.nameOther}
                </Text>
                <Text className="text-xs font-noto text-black">FourQU</Text>
                <Text className="text-xs font-noto text-black">
                  {hashAccountNo(props.otherAccountNumber)}
                </Text>
              </View>
            </View>

            <View className="flex flex-col gap-y-2 mt-2">
              <Text className="font-notobold text-xs text-black">
                Transaction ID:
              </Text>
              <View className="flex flex-row justify-end border-b-[1px] w-64 bg-red-500">
                <Text className="font-noto text-xs text-black">
                  c1a71808-62ca-4c1b-8756-5942c11a84d0
                </Text>
              </View>

              <Text className="font-notobold text-xs text-black">Amount:</Text>
              <View className="flex flex-row justify-end border-b-[1px] w-64">
                <Text className="font-noto text-xs text-black">
                  {props.amount.toFixed(2)} Baht
                </Text>
              </View>

              <Text className="font-notobold text-xs text-black">Fee:</Text>
              <View className="flex flex-row justify-end border-b-[1px] w-64">
                <Text className="font-noto text-xs text-black">0.00 Baht</Text>
              </View>

              <View className="flex flex-row items-center gap-x-2 w-64">
                <Text className="text-xs font-notobold text-black">Memo: </Text>
                <Text className="text-xs font-noto text-black">
                  {props.memo}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Bill;
