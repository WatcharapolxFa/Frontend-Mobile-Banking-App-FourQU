import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { err } from 'react-native-svg/lib/typescript/xml';
const Activity = () => {
  const navigation = useNavigation();

  const data = [
    {
      otherAccountNumber: '0093714533',
      nameOther: 'est',
      bankNameOther: '4QU',
      amount: 205,
      type: 'transfer',
      date: '2022-11-18T09:55:35.830Z',
      created_at: '2022-11-21T15:38:24.323Z',
    },
    {
      otherAccountNumber: '0093714533',
      nameOther: 'est',
      bankNameOther: '4QU',
      amount: 20508,
      type: 'receive',
      date: '2022-11-17T09:55:35.830Z',
      created_at: '2022-11-21T15:54:13.718Z',
    },
  ];

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const create = new Date('2021-08-03T02:00:00Z');
  const now = new Date();
  // const test = new Date('2021-03-03T02:00:00Z');  //Use to test date

  const MonthShow = (d1, d2) => {
    var months;
    var list = [];
    var tod = 0; // if month < 0
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 6 ? 6 : months;

    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
        list.push({
          label:
            month[d2.getMonth() - i] +
            ' ' +
            d2.getFullYear().toString().substr(-2),
          value:
            d2.getFullYear() +
            '-' +
            (d2.getMonth() - i + 1).toString().padStart(2, '0'),
        });
      } else {
        list.push({
          label:
            month[11 - tod] +
            ' ' +
            (d2.getFullYear() - 1).toString().substr(-2),
          value:
            d2.getFullYear() - 1 + '-' + (12 - tod).toString().padStart(2, '0'),
        });
        tod++;
      }
    }
    return list;
  };

  const formatDate = d => {
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
  };

  const formatTime = d => {
    d = new Date(d);
    let text = d.toLocaleTimeString();
    let time = '';
    time += text.substring(0, 4) + ' ' + text.substring(text.length - 2);
    return time;
  };

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

  const setAm = (amount, type) => {
    result = amount.toFixed(2).toString();
    return type === 'transfer' || type === 'withdraw'
      ? '-' + result + ' Baht'
      : '+' + result + ' Baht';
  };

  // Monthlist in Period (Max 6)
  const [monthList, setmonthList] = React.useState([]);

  // SelectMonth use to fetchTransaction
  const [selectedMonth, setSelectedMonth] = React.useState(
    now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0'),
  );

  // Transaction from fetchTransaction
  const [transaction, setTransaction] = React.useState([]);

  // InitDate use to compare date in transaction
  let initdate = 0;

  React.useEffect(() => {
    setmonthList(MonthShow(create, now));
    console.log(selectedMonth);
    fetchTransaction();
  }, [selectedMonth]);

//   const saveRefresh = async value => {
//     try {
//       await AsyncStorage.setItem('@storage_refresh_token', value);
//       console.log('save refresh_token complete');
//     } catch (error) {
//       console.log('error store refresh_token');
//     }
//   };
// //readRefresh()
//   const readRefresh = async () => {
//     try {
//       return await AsyncStorage.getItem('@storage_refresh_token');
//     } catch (error) {vaid
//       console.log("error read refresh_token")
//     }
//   };
//   const token = readRefresh()
let acountNo = ""
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJjZDY5MGU4LTMyOWQtNDc1Ny1hNDZhLTQxYjc4NDk0ZTFjNyIsImZpcnN0TmFtZSI6IlBhcm0iLCJtaWRkbGVOYW1lIjoiS3ViIiwibGFzdE5hbWUiOiJraWtpIiwidGltZV9zdGFtcCI6IjIwMjItMTEtMjNUMDM6NTM6MDMuMDg0WiIsImlhdCI6MTY2OTE3NTU4MywiZXhwIjoxNjY5NzgwMzgzfQ.E6eNsLdRGb4ypvud2SuoDRTlMd8vKzPELw_28vomGFo';

  // fetchTransaction from backend
  const fetchTransaction = async() => {
    console.log(token)
    axios
      .post(
        'https://server-quplus.herokuapp.com/api/auth/signin',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response.data.AcessToken)
        axios
          .get(
            'https://server-quplus.herokuapp.com/api/user-payment/info/',
            {
            },
            {
              headers: {
                Authorization: `Bearer ${response.data.AcessToken}`,
              },
            },
          )
          .then(res => {
            console.log(res.data);
            acountNo = res.data.userPayment.accountNumber
            
          });
      }).catch(err => {
        console.log(err)
      }).then(

    await axios.post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/payment-transaction/month',{
      userAccountNumber:acountNo,
      date:selectedMonth,
    }).then(res => {
      console.log(res.data);
      setTransaction(res.data.map(tran => ({
        otherAccountNumber: tran.otherAccountNumber,
        nameOther: tran.nameOther,
        bankNameOther: tran.bankNameOther,
        amount: tran.amount,
        type: tran.type,
        date: tran.date,
        created_at: tran.created_at,
        press: false,
      })))
    })
    )

    // setTransaction(
    //   data.map(tran => ({
    //     otherAccountNumber: tran.otherAccountNumber,
    //     nameOther: tran.nameOther,
    //     bankNameOther: tran.bankNameOther,
    //     amount: tran.amount,
    //     type: tran.type,
    //     date: tran.date,
    //     created_at: tran.created_at,
    //     press: false,
    //   })),
    // );
  };
  return (
    <View className="flex-1 bg-base">
      {/* Period + Account Summary */}
      <View className="flex flex-row px-5 mb-2">
        {/* Period Picker*/}
        <View className="w-1/2 relative z-30">
          <Text className="font-notobold text-black">Period</Text>
          <View className="border-b">
            <Picker
              prompt="Period"
              selectedValue={selectedMonth}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedMonth(itemValue);
              }}>
              {monthList.map((month, index) => (
                <Picker.Item
                  style={{fontSize: 15}}
                  key={index}
                  label={month.label}
                  value={month.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* Period Picker*/}

        {/* Account Summary */}
        <View className="w-1/2 pl-4 mt-4 justify-end">
          <Pressable onPress={() => navigation.navigate('Summary')}>
            <View className="flex rounded-xl bg-green-kem items-center justify-center py-[12px] shadow shadow-black">
              <Text className=" font-notoMedium text-white">
                Account Summary
              </Text>
            </View>
          </Pressable>
        </View>
        {/* Account Summary */}
      </View>
      {/* Period + Account Summary */}

      {/* Date + Transaction */}
      <View className="flex-1 ">
        <ScrollView>
          {transaction.map((tran, index) => (
            <View key={index}>
              {/* Date */}
              {(() => {
                if (tran.created_at.slice(8,10) != initdate) {
                  console.log(tran.created_at.slice(8,10))
                  initdate = tran.created_at.slice(8,10);
                  return (
                    <View className="px-5 pb-2 pt-1">
                      <Text className="font-notobold text-black text-base">
                        {formatDate(tran.created_at)}
                      </Text>
                    </View>
                  );
                }
              })()}
              {/* Date */}

              {/* Transaction */}
              <Pressable
                key={index}
                onPressOut={e => {
                  tran.press = !tran.press;
                  setTransaction([...transaction]);
                }}
                className="bg-tao/80 mb-2 mx-5 rounded shadow shadow-gray-600 ">
                <View
                  className={
                    (tran.press ? 'border-b border-gray-500' : '') +
                    ' mx-2 flex-row mb-1 py-1'
                  }>
                  <View className="w-1/2 ">
                    <Text className="font-noto text-black text-base">
                      {tran.type.charAt(0).toUpperCase() + tran.type.slice(1)}
                    </Text>
                    <Text className="font-noto text-black text-sm">
                      {formatTime(tran.date)}
                    </Text>
                  </View>
                  <View className="w-1/2 items-end ">
                    <Text
                      className={
                        'font-noto ' +
                        (tran.type === 'transfer'
                          ? 'text-red-600'
                          : 'text-green-600')
                      }>
                      {setAm(tran.amount, tran.type)}
                    </Text>
                    <View>
                      {tran.press ? (
                        <ChevronUpIcon color="black" size={24} />
                      ) : (
                        <ChevronDownIcon color="black" size={24} />
                      )}
                    </View>
                  </View>
                </View>
                <View className={tran.press ? 'mx-3 flex-row mb-1' : 'hidden'}>
                  <View className="w-1/2">
                    <Text className="font-noto text-xs">FourQU</Text>
                    <Text className="font-noto text-xs">To Acc No. :</Text>
                    <Text className="font-noto text-xs">To Acc Name. :</Text>
                  </View>
                  <View className="w-1/2 items-end">
                    <Text className="font-noto text-xs"></Text>
                    <Text className="font-noto text-xs">
                      {hashAccountNo(tran.otherAccountNumber)}
                    </Text>
                    <Text className="font-noto text-xs">{tran.nameOther}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
          {/* Transaction */}
        </ScrollView>
      </View>
      {/* Date + Transaction */}
    </View>
  );
};
export default Activity;
