import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Activity = () => {
  const navigation = useNavigation()
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

  // Monthlist in Period (Max 6)
  const [monthList, setmonthList] = React.useState([]);

  // SelectMonth use to fetchTransaction
  const [selectedMonth, setSelectedMonth] = React.useState(
    now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0')
  );

  // Transaction from fetchTransaction
  const [transaction, setTransaction] = React.useState([]);

  // InitDate use to compare date in transaction
  let initdate = 0;

  React.useEffect(() => {
    setmonthList(MonthShow(create, now));
    fetchTransaction();
  }, [selectedMonth]);

  // fetchTransaction from backend
  const fetchTransaction = () => {
    console.log(`https://test/get/${selectedMonth}`);
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setTransaction(
        res.data.map(tran => ({
          id: tran.id,
          user: tran.username,
          date: Number(tran.id),
          press: false,
        }))
      );
    });
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
                if (tran.date != initdate) {
                  initdate = tran.date;
                  return (
                    <View className="px-5 pb-2 pt-1">
                      <Text className="font-notobold text-black text-base">
                        {tran.date}
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
                    ' mx-2 flex-row  mb-1 '
                  }>
                  <View className="w-1/2 ">
                    <Text className="font-noto text-black text-base">
                      {tran.user}
                    </Text>
                    <Text className="font-noto text-black text-sm">
                      {tran.date}
                    </Text>
                  </View>
                  <View className="w-1/2 items-end ">
                    <Text className="font-noto text-red-600">- 70.00 Bath</Text>
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
                    <Text className="font-noto text-xs">xxx-x-x1301-x</Text>
                    <Text className="font-noto text-xs">Watcharapol</Text>
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
