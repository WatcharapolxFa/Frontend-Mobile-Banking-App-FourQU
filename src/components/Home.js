/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
// import type {Node} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleBal, toggleID, readNoti, updateNoti, resetVisState } from '../redux/actions/visibleAction';

import {
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  RefreshControl
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { setUserBal } from '../redux/actions/accountAction';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({ navigation }) => {

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

  const setAm = (amount, type) => {
    result = amount.toFixed(2).toString();
    return type === 'transfer' || type === 'withdraw'
      ? '-' + result + ' Baht'
      : '+' + result + ' Baht';
  };

  let profile_pic = '../assets/profile/Aqutan.jpg'
  // const [isRead, setIsRead] = useState(false)

  // const [visible, setVisibility] = useState(false);
  // const [balVisible, setBalVisibility] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const dispatch = useDispatch();

  const id_visible = useSelector((store) => store.visible.idVisible);
  const bal_visible = useSelector((store) => store.visible.balVisible);
  const isRead = useSelector((store) => store.visible.isRead);
  // const transaction = useSelector((store) => store.transaction.userData);
  const account = useSelector((store) => store.account);

  const [transaction, setTransaction] = useState([])
  const [Balance, setBalance] = useState([])

  let initdate = 0;

  const toggleVisibility = () => {
    // setVisibility(!visible);
    dispatch(toggleID());
  }

  const toggleBalVisibility = () => {
    dispatch(toggleBal());
  }

  const refreshPage = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    dispatch(updateNoti());
    // fetchTransaction();
    fetchUserPayBal();

  }, []);

  let time_stamp = Date()

  React.useEffect(() => {
    fetchTransaction();
    // createNoti()
    console.log('fetch')
  }, [refreshing]);

  const fetchTransaction = async () => {

    await axios.post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/payment-transaction/month', {
      userAccountNumber: "0216853053",
      date: "2022-11",
    }).then(res => {
      // console.log(res.data);
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
    });
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo';

  const fetchUserPayBal = async () => {
    await axios
      .post('https://server-quplus.herokuapp.com/api/auth/signin',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        // console.log(response.data.AcessToken)
        axios.get('https://server-quplus.herokuapp.com/api/user-payment/balanced/',
          {
            headers: {
              Authorization: `Bearer ${response.data.AcessToken}`,
            }
          }
        )
          .then(function (res) {
            const user = res.data
            // setBalance(user)
            dispatch(setUserBal(user.balanced))
            console.log('Balanced:', account.userBal)
          })
          .catch(function (error) {
            console.log(error)
          })
      });
  };

  // Create Notification

  // const createNoti = () => {
  //   // const accountID = "123e8367-e87b-12d3-a456-426614174000"
  //   axios.post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/user-notification-transaction',
  //     {
  //       "accountID": "123e8367-e87b-12d3-a456-426614174000",
  //       "transactionID": "67f59a24-657e-42a5-9e16-ea68d3542cc5"
  //     })
  //     .then(function (res) {
  //       console.log(res.data)
  //     })
  // }


  const checkNoti = () => {
    const accountID = "123e8367-e87b-12d3-a456-426614174000"
    axios.get(`https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/user-notification-transaction/${accountID}`)
      .then(function (res) {
        console.log(readNotify())
        if (readNotify() == res.data) {
          console.log("Doesn't read before.")
        }
      })
  }

  const fetchNoti = () => {
    const accountID = "123e8367-e87b-12d3-a456-426614174000"
    axios.get(`https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/user-notification-transaction/${accountID}`)
      .then(function (res) {
        saveNotify(res.data.map(noti => ({
          isRead: noti.isRead
        })))
      })
  }

  const saveNotify = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Current_Noti', jsonValue)
      console.log("save Noti complete")
    } catch (error) {
      console.log("error storeNoti")
    }
  };

  const readNotify = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Current_Noti');
      // console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (error) {
      console.log("error read Noti")
    }
  };

  return (

    <View style={{ flex: 1 }} className='bg-base'>

      <View style={{ flex: 3.5 }} className='w-full rounded-b-xl bg-green-main'>
        <View className='flex-col w-full h-full'>
          <View className='flex-row flex-[3.5] w-full h-full'>
            <View className='flex-row flex-1'>
              {/* go to Setting Screen */}
              <Pressable onPress={() => {
                dispatch(resetVisState())
                // checkNoti()
                navigation.navigate('Setting')
              }}>
                <Image source={require(profile_pic)} className='m-3 w-20 h-20 rounded-full'></Image>
              </Pressable>

              <View>
                {/* Change Username here */}
                <Text style={{ fontFamily: 'NotoSans-Bold' }} className='pt-5 text-xl text-egg'>Username</Text>
                <View className='flex-row items-center'>
                  {/* Show/Hide ID */}
                  <Text style={{ fontFamily: 'NotoSans-Regular' }} className='text-md text-white'>{id_visible ? '123-2-71924' : 'xxx-x-x1924-x'}</Text>
                  <Pressable onPress={() => toggleVisibility()}>
                    <Image style={{ tintColor: '#FFFFFF' }} source={id_visible ? require('../assets/icon/eye.png') : require('../assets/icon/hidden.png')} className='w-3 h-3 ml-2'></Image>
                  </Pressable>
                </View>
              </View>

              {/* go to Notification Screen */}
              <View className='flex-1 items-end'>
                <Pressable onPress={() => {
                  dispatch(readNoti())
                  dispatch(resetVisState())
                  fetchNoti()
                  // checkNoti()
                  navigation.navigate('Noti');
                }}>
                  <Image style={{ tintColor: '#F1EEE6' }} source={require('../assets/icon/bell.png')} className='top-5 right-4 w-8 h-8'></Image>
                </Pressable>
                <View className='right-4 bottom-3'>
                  <View className={isRead ? '' : 'w-3 h-3 rounded-full bg-red-noti'} />
                </View>
              </View>
            </View>
          </View>

          <View className='items-center flex-col flex-[5.25] w-full h-full'>
            <View className='flex-row w-full h-full justify-center'>
              <View className='w-36 h-36 rounded-full bg-base'>
                <View className='flex-col top-8'>
                  <Text style={{ fontFamily: 'NotoSans-Bold' }} className='text-green-main text-center'>Available Bal.</Text>
                  {/* Added Balance component here. */}
                  <Text style={{ fontFamily: 'NotoSans-Bold' }} className='text-green-main text-xl mt-1 mb-3 text-center'>{bal_visible ? account.userBal : 'x,xxx,xxx.xx'}</Text>
                  <View className='flex-row justify-end'>
                    <View className='items-center justify-center'
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40 / 2,
                        backgroundColor: '#C7D5B1',
                        transform: [{ scaleX: 1 }]
                      }}>
                      <Pressable onPress={() => {
                        fetchUserPayBal();
                        toggleBalVisibility()
                      }}>
                        <Image style={{ tintColor: '#387766' }} source={bal_visible ? require('../assets/icon/eye.png') : require('../assets/icon/hidden.png')} className='w-6 h-6'></Image>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className='flex-[1.25] w-full h-full flex-row justify-center items-center'>
            {/* Update time example -> 10.30 PM */}
            <Pressable onPress={() => refreshPage()}>
              <Image style={{ tintColor: '#F6D8A9' }} source={require('../assets/icon/reload.png')} className='w-4 h-4 mr-2'></Image>
            </Pressable>
            <Text style={{ fontFamily: 'NotoSans-Regular' }} className='text-egg text-xs text-center'>Updated at {formatTime(time_stamp)}</Text>
          </View>

        </View>
      </View>

      <View style={{ flex: 5.8 }}>
        <Text style={{ fontFamily: 'NotoSans-Bold' }} className='pl-4 pt-3 text-2xl text-green-font'>Recent Transaction</Text>

        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshPage}
          />
        }>
          {transaction.slice(0, 6).map((tran, index) => (
            <View key={index}>
              {/* Date */}
              {(() => {
                if (tran.date != initdate) {
                  initdate = tran.date;
                  return (
                    <View className="px-5 pb-2 pt-1">
                      <Text style={{ fontFamily: 'NotoSans-Bold' }} className='right-4 text-right mt-1 text-lg text-green-font'>
                        {formatDate(tran.date)}
                      </Text>
                    </View>
                  );
                }
              })()}
              {/* Date */}

              {/* Transaction */}
              <View key={index} className='inset-x-4 w-11/12 rounded-lg my-1 pr-1 bg-green-font'>
                <Text style={{ fontFamily: 'NotoSans-Bold' }} className='text-white pl-1 pt-1 text-base'>
                  {tran.type.charAt(0).toUpperCase() + tran.type.slice(1)}
                </Text>
                <Text style={{ fontFamily: 'NotoSans-Bold' }} className='absolute right-0 pt-3 pr-2 text-white text-base'>
                  {tran.amount} Bath.
                </Text>
                <Text style={{ fontFamily: 'NotoSans-Regular' }} className='text-white pl-1 pb-1 text-xs'>
                  {formatTime(tran.date)}
                </Text>
              </View>
              {/* Transaction */}
            </View>
          ))}
          <View className='flex-row justify-end my-2 right-4'>
            <View className='w-20 h-6 rounded-lg bg-light-green'>
              <Pressable onPress={() => {
                dispatch(resetVisState())
                navigation.navigate('Transaction')
              }}>
                <Text style={{ fontFamily: 'NotoSans-Bold' }} className='text-sm text-center underline underline-offset-auto '>See More</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>

      </View>

      <View style={{ flex: 0.7 }} className='flex-row items-center justify-center left-1% w-96% rounded-t-xl bg-green-main'>

        {/* go to Shop Screen */}
        <View className='basis-1/3 items-center'>
          <Pressable onPress={() => {
            dispatch(resetVisState())
            navigation.navigate('HomeShop')
          }}>
            <Image style={{ tintColor: '#F1EEE6' }} source={require('../assets/icon/cart.png')} className='w-10 h-10'></Image>
          </Pressable>
        </View>

        {/* go to Transfer Screen */}
        <Pressable onPress={() => {
          dispatch(resetVisState())
          navigation.navigate('Transfer',{Balance})
        }}>
          <View className='items-center bottom-14 basis-1/3 drop-shadow-2xl'>
            <View className='items-center justify-center w-20 h-20 rounded-full bg-green-font'>
              <View className='items-center justify-center w-4/5 h-4/5 rounded-full bg-light-green'>
                <Image style={{ tintColor: '#F1EEE6' }} source={require('../assets/icon/data-transfer.png')} className='w-10 h-10'></Image>
              </View>
            </View>
          </View>
        </Pressable>

        {/* go to qr-payment Screen */}
        <View className='basis-1/3 items-center'>
          <Pressable onPress={() => navigation.navigate('Navbar')}>
            <Image style={{ tintColor: '#F1EEE6' }} source={require('../assets/icon/qr-code.png')} className='w-10 h-10'></Image>
          </Pressable>
        </View>

      </View>
    </View>

  )
}

export default Home