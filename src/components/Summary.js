import {View, Text, Image, Pressable, Button} from 'react-native';
import React from 'react';

import Chart from 'chart.js';
import {useState, useEffect} from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryStack,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
} from 'victory-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-neat-date-picker';
import {Dimensions} from 'react-native';

import setting from '../../src/assets/icon/settng.png';
import logo from '../../src/assets/icon/logo.png';
import backArrow from '../../src/assets/icon/backArrow.png';

import axios from 'axios';

const Summary = ({navigation}) => {
  
  // const data = {
  //   name: 'Watcharapol Yotadee',
  //   photo: logo,
  //   accountNo: 'xxx-x-x1924-x',
  //   year: 2022,
  //   incomeTransaction: 100,
  //   expensesTransaction: 221,
  //   sumIncome: '80,000',
  //   sumExpenses: '80,000',
  //   totalIncome: '21,000',
  //   time: '2:32 PM',
  //   // income: [
  //   //   {x: 'Jan', y: 50},
  //   //   {x: 'Feb', y: 123},
  //   //   {x: 'Mar', y: 124},
  //   //   {x: 'Apl', y: 98},
  //   //   {x: 'Jun', y: 56},
  //   //   {x: 'Jul', y: 57},
  //   //   {x: 'Aug', y: 78},
  //   //   // {x: 'Sep', y: 125},
  //   //   // {x: 'Oct', y: 220},
  //   //   // {x: 'Nov', y: 912},
  //   //   // {x: 'Dec', y: 780},
  //   // ],
  //   // outcome: [
  //   //   {x: 'Jan', y: 50},
  //   //   {x: 'Feb', y: 123},
  //   //   {x: 'Mar', y: 124},
  //   //   {x: 'Apl', y: 98},
  //   //   {x: 'Jun', y: 56},
  //   //   {x: 'Jul', y: 57},
  //   //   {x: 'Aug', y: 78},
  //   //   // {x: 'Sep', y: 125},
  //   //   // {x: 'Oct', y: 220},
  //   //   // {x: 'Nov', y: 950},
  //   //   // {x: 'Dec', y: 780},
  //   // ],
    
  // };

  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [monthly, setMonthly] = useState('Monthly');
  const [transactionType, setTransactionType] = useState('Income - Expenses');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [modePicker, setModePicker] = useState('range');
  const [isBusy, setBusy] = useState(true)
  const [account, setAccount] = useState({})
  const [sumIncome, setSumIncome] = useState(0)
  const [sumOutcome, setSumOutcome] = useState(0)
  const [income, setIncome] = useState([])
  const [outcome, setOutcome] = useState([])
  const [data2,setData2] = useState({})

  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };
  const onConfirm = date => {
    // You should close the modal in here
      setStartDate(date.startDate);
      setEndDate(date.endDate);
      console.log(
        formatDate2(startDate)+","+formatDate2(endDate));
      setShowDatePicker(false);
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(111);
  };

  

  const formatDate = d => {
    const date = new Date(d);
    const month = date.getMonth() + 1;
    return [
      date.getFullYear(),
      month < 10 ? `0${month}` : month,
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    ].join('-');
  };

  const formatDate2 = d => {
    const date = new Date(d);
    const month = date.getMonth() + 1;
    return [
      date.getFullYear(),
      month < 10 ? `0${month}` : month,
    ].join('-');
  };



const refToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo';
  useEffect(() => {
    console.log(22222)


    
  //   axios.
  // post('https://server-quplus.herokuapp.com/api/auth/signin', {},{
  //     headers:{Authorization: `Bearer ${refToken}`},
  //   })
  //   .then(res => {
  //     console.log(res.data)
  //         axios.
  //         get('https://server-quplus.herokuapp.com/api/auth/information',{
  //           headers:{Authorization: `Bearer ${res.data.AcessToken}`},
            
  //       }) .then(res =>{
            
  //           console.log("acccccccc: ",res.data);
  //           setAccount(res.data);


  //       }).catch(err => {
  //         console.log('catch222', err.response.data);
  
  //       })
  // })
  //   .catch(err => {
  //     console.log('catchqqq', err.response.data);

  //   });

    // axios.
    //   post('https://server-quplus.herokuapp.com/api/auth/information', {
    //       id: route.params.id,
    //       OtpNumber: pin,
    //     })
    //     .then(res => {
    //       console.log('then', res.data);
    //       saveRefresh(res.data.token);

    //       console.log('vaid PIN!!');
    //       navigation.navigate('NewPin');
    //     })
    //     .catch(err => {
    //       console.log('catch', err.response.data);
    //       setPin(val => val.slice(0, -6));
    //       console.log('Invaid PIN!!');
    //     });
    
    if(monthly === "Monthly") {
      axios.
      post('https://server-quplus.herokuapp.com/api/auth/signin', {},{
          headers:{Authorization: `Bearer ${refToken}`},
        })
        .then(res => {
          console.log(res.data)
              axios.
              get('https://server-quplus.herokuapp.com/api/auth/information',{
                headers:{Authorization: `Bearer ${res.data.AcessToken}`},
                
            }) .then(res =>{
                
                console.log("acccccccc: ",res.data);
                setAccount(res.data);
                console.log('dateee  ', startDate+","+endDate);
                //post month in  date: "2022-01,2022-11",
                axios
                .post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/payment-transaction/summary-month', {
                  userAccountNumber: "0093714533",
                  date: formatDate2(startDate)+","+formatDate2(endDate),
                })
                .then(res => {
                  console.log("summary month data: ",res.data);
                  setData2(res.data);

                  mapIncome(data2);
                  mapOutcome(data2);
                  plusIncome(data2);
                  plusOutcome(data2);
                })
                .catch(err => {
                  console.log('err sum month', err.response.data);
                });


            }).catch(err => {
              console.log('catch222', err.response.data);
      
            })
      })
        .catch(err => {
          console.log('catchqqq', err.response.data);
    
        });
    };
    if(monthly === "Daily") {
      axios.
      post('https://server-quplus.herokuapp.com/api/auth/signin', {},{
          headers:{Authorization: `Bearer ${refToken}`},
        })
        .then(res => {
          console.log(res.data)
              axios.
              get('https://server-quplus.herokuapp.com/api/auth/information',{
                headers:{Authorization: `Bearer ${res.data.AcessToken}`},
                
            }) .then(res =>{
                
                console.log("acccccccc: ",res.data);
                setAccount(res.data);

                //post day 
  
                axios
                .post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/payment-transaction/summary-date', {
                  userAccountNumber: "0093714533",
                  date: formatDate(startDate)+","+formatDate(endDate),
                })
                .then(res => {
                  console.log("summary date data: ",res.data);
                  setData2(res.data);

                  mapIncome(data2);
                  mapOutcome(data2);
                  plusIncome(data2);
                  plusOutcome(data2);
                })
                .catch(err => {
                  console.log('err sum date', err.response.data);
                });


            }).catch(err => {
              console.log('catch222', err.response.data);
      
            })
      })
        .catch(err => {
          console.log('catchqqq', err.response.data);
    
        });
    };

    
    
  },[monthly]);

  // const data2 = 
  //   [
  //     {
  //         "date": "17/11/22",
  //         "income": 3245,
  //         "outcome": 1014
  //     },
  //     {
  //         "date": "18/11/22",
  //         "income": 1253,
  //         "outcome": 1503
  //     },
  //     {
  //         "date": "19/11/22",
  //         "income": 654,
  //         "outcome": 150
  //     },
  //     {
  //         "date": "20/11/22",
  //         "income": 526,
  //         "outcome": 555
  //     },
  //     {
  //         "date": "21/11/22",
  //         "income": 526,
  //         "outcome": 555
  //     },
  //     {
  //         "date": "22/11/22",
  //         "income": 1236,
  //         "outcome": 555
  //     },
  //     {
  //         "date": "23/11/22",
  //         "income": 1236,
  //         "outcome": 555
  //     }

  //   ];
    
    //------------- function for calulate -------------
    const mapIncome = data => {
      const a1=[];
      data.map((x)=>{
        if(monthly=="Daily"){
          a1.push({x:x.date, y:x.income});
        }
        else{
          a1.push({x:x.month, y:x.income});
        };
       
      })
      setIncome(a1);
    };
  
    const mapOutcome = data => {
      const a2=[];
      data.map((x)=>{
        if(monthly=="Daily"){
        a2.push({x:x.date, y:x.outcome});
        }
        else{
          a2.push({x:x.month, y:x.outcome});
          };
      })
      setOutcome(a2);
    };
    
    const plusIncome = data => {
      sum = 0;
      data.map((x)=>{
        sum += x.income;
      })
      setSumIncome(sum);
    };

    const plusOutcome = data => {
      sum = 0;
      data.map((x)=>{
        sum += x.outcome;
      })
      setSumOutcome(sum);
    };

    // console.log("II : ", sumIncome(data2));
    // console.log("OO : ", sumOutcome(data2));
    

    return (
    
    <View style={{flex: 1}}>
      
        <View>
          <Text>is loading</Text>
        </View>
      
      <DatePicker
        isVisible={showDatePicker}
        mode={modePicker}
        colorOptions={{headerColor: '#9DD9D2'}}
        onCancel={onCancel}
        onConfirm={onConfirm}
        dateStringFormat={'yyyy-mm-dd'}
      />
      
      <View style={{flex: 7.5}} className=" bg-green-regis rounded-b-xl">
        <View className="flex-row mt-5">
          <Pressable onPress={() => navigation.navigate('Transaction')}>
            <Image source={backArrow} className="w-8 h-8 ml-5" />
          </Pressable>
          <Text
            style={{fontFamily: 'NotoSans-Bold'}}
            className="text-white text-3xl text-center ">
            Account Summary
          </Text>
        </View>

        <View style={{flex: 1}} className="">
          <View className=" mt-6 w-fit h-1/2 " style={{flex: 0.35}}>
            <View className="flex flex-row w-11/12 mx-5">
              <View className="w-20 h-20 my-auto mx-2 rounded-full ">
                <Image
                  source={logo}
                  className="my-auto mx-auto w-full h-full"
                />
              </View>
              <View className="my-auto">
                <Text className="text-egg text-xl">{account?.data?.firstName ?? ""}</Text>
                <Text className=" text-white text-sm">{account?.data?.accountNumber ?? ""}</Text>
              </View>
            </View>
            <View className="w-11/12 h-[1] bg-base mx-auto"></View>
            <View
              style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
              className="w-10/12 h-2/5 mt-3 mx-auto rounded-md opacity-100 hover:opacity-10">
              <View className="flex-1 mx-2 my-1 ">
                <View className="flex-1 flex-row justify-between ">
                  <Text className="text-white font-bold ">
                    Statement Summary of {startDate &&
                      `${formatDate(startDate)} : ${formatDate(endDate)}`}
                  </Text>
                </View>

                <View className="flex-1 flex-row justify-between ">
                  <Text className="justify-start text-white text-sm">
                    Income :
                  </Text>
                  <Text className="justify-end text-white text-sm">
                    {' '}
                    {sumIncome} Bath
                  </Text>
                </View>
                <View className="flex-1 flex-row justify-between">
                  <Text className="justify-start text-white text-sm">
                    Expenses :
                  </Text>
                  <Text className="justify-end text-white text-sm ">
                    {' '}
                    {sumOutcome} Bath
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className=" m-w-fit ml-5" style={{flex: 0.6}}>
            <VictoryChart
              domainPadding={{x: 20, y: 0}}
              width={screenWidth - 10 }
              height={screenHeight * 0.4}>
               
               <VictoryLegend x={screenWidth/4} y={5}
               gutter={35}
              orientation="horizontal"
              style={{title: {fontSize: 20 , fill:"FFF" } }}
              data={[
                { name: "Income", symbol: { fill: "#8DD0BD" }, labels: { fill: "#FFFFFF" } },
                { name: "Expenses", symbol: { fill: "#FD6565" }, labels: { fill: "#FFFFFF" } }
              ]}
            />
              <VictoryAxis
                tickLabelComponent={<VictoryLabel dy={0} dx={0} />}
                tickFormat={data2.X}
                style={{
                  axis: {
                    stroke: 'white', //CHANGE COLOR OF X-AXIS
                  },
                  tickLabels: {
                    fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                    fontSize: 10,
                    angle: 20
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickLabelComponent={<VictoryLabel dy={0} dx={-5} />}
                tickFormat={data2.y}
                style={{
                  axis: {
                    stroke: 'transparent', //CHANGE COLOR OF X-AXIS
                  },
                  tickLabels: {
                    fill: '#F6D8A9', //CHANGE COLOR OF X-AXIS LABELS
                    fontSize: 11,
                    angle: 0,
                    padding: -3
                  },
                  grid: {stroke: '#F6D8A9'},
                }}
              />
              <VictoryGroup offset={5} style={{data: {width: 5}}}>
                <VictoryBar
                  data={transactionType == "Total Expenses" ? null : income}
                  style={{
                    data: {
                      fill: '#8DD0BD',
                    },
                  }}
                />

                <VictoryBar
                  data={transactionType == "Total Income" ? null : outcome}
                  style={{
                    data: {
                      fill: '#FD6565',
                    },
                  }}
                />
              </VictoryGroup>
            </VictoryChart>
          </View>
          <View className=" " style={{flex: 0.1}}>
            <Text className=" text-egg m-auto">Update at {account.time_stamp}</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 2.5}} className=" bg-base items-center">
        <View className="w-11/12 items-center h-full justify-between">
          <View>
            <View className="w-full h-fit flex-row mt-3 ">
              <View className="basis-1/3"></View>
              <View className="basis-1/3 ">
                <Text className=" m-auto text-xl text-black decoration-green-total ">
                  Overview
                </Text>
                <View className="h-[3] w-8/12 mx-auto bg-red-button"></View>
              </View>

              <View className="basis-1/3  flex-row-reverse">
                <View className=" h-5 w-6/12 rounded-md bg-light-green my-auto">
                
                  <View className=" flex flex-row justify-between p-1" style={{position: 'absolute'}}>
                    <View className="">
                      <Text className=" text-[10px] text-bold mx-1 ">{monthly}</Text>
                    </View>
                    <View className="">
                    <Image
                      source={setting}
                      className="w-[10px] h-[10px] my-auto"
                    />
                    </View>
                  </View>
                  <Picker
                  isVisible={false}
                  style={{opacity: 0}}
                  selectedValue={monthly}
                  onValueChange={(itemValue, itemIndex) =>
                    setMonthly(itemValue)
                  }>
                  <Picker.Item label="Daily" value="Daily" />
                  <Picker.Item label="Monthly" value="Monthly" />
                </Picker>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row">
            <View className="basis-5/12">
              <Text className="text-black">Transaction Type</Text>
              <Text
                className=" ml-2 my-1.5 text-black mt-7"
                style={{
                  position: 'absolute',
                }}>
                {transactionType}
              </Text>
              <View className=" h-8">
                <Picker
                  style={{opacity: 0}}
                  selectedValue={transactionType}
                  onValueChange={(itemValue, itemIndex) =>
                    setTransactionType(itemValue)
                  }>
                  <Picker.Item
                    label="Income - Expenses"
                    value="Income - Expenses"
                  />
                  <Picker.Item label="Total Income" value="Total Income" />
                  <Picker.Item label="Total Expenses" value="Total Expenses" />
                </Picker>
              </View>
              <View className="h-[1] w-full mx-auto bg-black"></View>
            </View>

            <View className="basis-1/12"></View>
            <View className=" basis-5/12">
              <Text className="text-black">Period</Text>
              <Pressable onPress={openDatePicker}>
                <View className="h-8">
                  <Text className="text-xs my-auto text-black ml-2">
                    {startDate &&
                      `${formatDate(startDate)} : ${formatDate(endDate)}`}
                  </Text>
                </View>
              </Pressable>

              <View className="h-[1] w-full mx-auto bg-black"></View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'rgba(225,216,216,0.4)'}}
            className=" h-1/5 w-full mb-8 shadow-xl">
            <View className="w-full h-full flex-row flex-1">
              <View className=" basis-1/2 ">
                <Text className=" my-auto mx-3">Total Income:</Text>
              </View>

              <View className=" basis-1/2 flex-row-reverse">
                <Text className={` my-auto mx-5 ${sumIncome-sumOutcome < 0 ? "text-red-noti":"text-green-total"}`}>
                  {sumIncome-sumOutcome} Bath
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Summary;
