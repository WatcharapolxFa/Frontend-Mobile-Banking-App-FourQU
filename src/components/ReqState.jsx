import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  CheckIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from 'react-native-heroicons/outline';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';
import axios from 'axios';

const ReqState = () => {
  const m = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const create = new Date('2021-01-03T02:00:00Z');
  const now = new Date();
  // const test = new Date('2021-08-03T02:00:00Z'); //Use to test date

  const showMonthNow = (d1, d2) => {
    var months;
    var list = [];
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 12 ? 12 : months;

    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
        list.splice(0, 0, {
          label: m[d2.getMonth() - i],
          value: false,
          params:
            d2.getFullYear() +
            '-' +
            (d2.getMonth() - i + 1).toString().padStart(2, '0'),
        });
      }
    }
    return list;
  };

  const showMonthPass = (d1, d2) => {
    var months;
    var list = [];
    var tod = 0; // if month < 0
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 12 ? 12 : months;

    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
      } else {
        list.splice(0, 0, {
          label: m[11 - tod],
          value: false,
          params:
            d2.getFullYear() - 1 + '-' + (12 - tod).toString().padStart(2, '0'),
        });
        tod++;
      }
    }
    return list;
  };

  const [monthNow, setMonthNow] = React.useState([]);
  const [monthPass, setMonthPass] = React.useState([]);
  const [disableSubmit, setdisableSubmit] = React.useState(true);

  React.useEffect(() => {
    setMonthNow(showMonthNow(create, now));
    setMonthPass(showMonthPass(create, now));
  }, []);

  const numberRequest = () => {
    let num = 0;
    monthPass.map(month => {
      if (month.value === true) {
        num += 1;
      }
    });

    monthNow.map(month => {
      if (month.value === true) {
        num += 1;
      }
    });
    return num;
  };

  //Select Month
  const handleChange = (label, newvalue, month, name) => {
    setdisableSubmit(false);
    if (numberRequest() == 1 && newvalue == false) setdisableSubmit(true);
    if (numberRequest() < 6 || newvalue == false) {
      let temp = month.map(month => {
        if (label === month.label) {
          return {...month, value: !month.value};
        }
        return month;
      });
      if (name == 'monthPass') {
        setMonthPass(temp);
      } else if (name == 'monthNow') {
        setMonthNow(temp);
      }
    } else {
      setModalMax(true);
    }
  };

  const [modalMax, setModalMax] = React.useState(false);
  const [modalSubmit, setModalSubmit] = React.useState(false);

  const submitRequest = () => {
    let selectedMonth = '';
    monthPass.map(month => {
      if (month.value === true) {
        selectedMonth != ''
          ? (selectedMonth += ',' + month.params)
          : (selectedMonth += month.params);
      }
    });

    monthNow.map(month => {
      if (month.value === true) {
        selectedMonth != ''
          ? (selectedMonth += ',' + month.params)
          : (selectedMonth += month.params);
      }
    });
    //selectedMonth
    console.log(selectedMonth);
    
    // axios
    //   .post(
    //     'https://server-quplus.herokuapp.com/userStatement',
    //     {
    //       destEmail: useremail,
    //       Date: selectedMonth,
    //     },
    //     {
    //       headers: {
    //         Authorization: 'Bearer <access token>',
    //       },
    //     },
    //   )
    //   .then(() => {
    //     setModalSubmit(true);
    //   });

    setModalSubmit(true);
  };

  return (
    <View className="h-[55%] px-5 bg-base">
      {/* Select Month */}

      <View className="mb-2">
        <Text className="font-notobold text-black">Select Month(s)</Text>
      </View>

      {/* Modal Max 6 Month */}
      <Modal isVisible={modalMax} backdropOpacity={0.7}>
        <View className="flex bg-white rounded-md h-52 px-4">
          <View className="items-center justify-between py-4  h-[70%]">
            <ExclamationCircleIcon color="black" size={50} />
            <Text className="text-black text-base">Sorry</Text>
            <Text className="text-base">You can choose max 6 months</Text>
          </View>
          <View className="border-b border-black w-full" />
          <View className="flex-row items-center justify-end  h-[30%]">
            <View>
              <Text className="text-black text-lg">OK</Text>
            </View>
            <Pressable
              onPress={() => {
                setModalMax(!modalMax);
              }}
              className={'rounded-full bg-green-oon ml-2 p-1 '}>
              <CheckIcon color="white" size={35} />
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal Max 6 Month */}

      {/* Modal Submit */}
      <Modal isVisible={modalSubmit} backdropOpacity={0.7}>
        <View className="flex bg-white rounded-md h-52 px-4">
          <View className="items-center justify-between py-4  h-[70%]">
            <CheckCircleIcon color="black" size={50} />
            <Text className="text-black text-base">Success</Text>
            <Text>Statements sent to kueakun0112@gmail.com</Text>
          </View>
          <View className="border-b border-black w-full" />
          <View className="flex-row items-center justify-end  h-[30%]">
            <View>
              <Text className="text-black text-lg">OK</Text>
            </View>
            <Pressable
              onPress={() => {
                setModalSubmit(!modalSubmit);
                setMonthNow(showMonthNow(create, now));
                setMonthPass(showMonthPass(create, now));
                setdisableSubmit(true);
              }}
              className={'rounded-full bg-green-oon ml-2 p-1 '}>
              <CheckIcon color="white" size={35} />
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal Submit */}

      <ScrollView>
        {/* Year Pass */}
        {(() => {
          if (monthPass.length > 0) {
            return (
              <View className="w-full flex-row flex-wrap mb-2">
                <View className="w-full  mb-1">
                  <Text className="font-notoMedium text-black">
                    {now.getFullYear() - 1}
                  </Text>
                </View>
                {monthPass.map((month, index) => (
                  <View key={index} className="w-1/4 flex-row  items-center">
                    <CheckBox
                      value={month.value}
                      onValueChange={newvalue => {
                        handleChange(
                          month.label,
                          newvalue,
                          monthPass,
                          'monthPass',
                        );
                      }}
                    />
                    <Text className="font-noto text-black">{month.label}</Text>
                  </View>
                ))}
              </View>
            );
          }
        })()}
        {/* Year Pass */}

        {/* Year Now */}
        <View className="w-full flex-row flex-wrap  mb-2">
          <View className="w-full  mb-1">
            <Text className="font-notoMedium text-black">
              {now.getFullYear()}
            </Text>
          </View>
          {monthNow.map((month, index) => (
            <View key={index} className="w-1/4 flex-row  items-center">
              <CheckBox
                value={month.value}
                onValueChange={newvalue => {
                  handleChange(month.label, newvalue, monthNow, 'monthNow');
                }}
              />
              <Text className="font-noto text-black">{month.label}</Text>
            </View>
          ))}
        </View>
        {/* Year Now */}
      </ScrollView>
      {/* Select Month */}

      {/* Submit Request */}
      <View className="justify-center">
        <TouchableOpacity
          onPressOut={submitRequest}
          disabled={disableSubmit}
          className={
            (disableSubmit
              ? 'bg-gray-400'
              : 'bg-green-kem shadow shadow-black') +
            ' rounded-lg items-center py-4 '
          }>
          <Text className="font-notoMedium text-xl text-white">
            Submit Request
          </Text>
        </TouchableOpacity>
      </View>
      {/* Submit Request */}
    </View>
  );
};
export default ReqState;
