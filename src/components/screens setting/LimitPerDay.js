/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const axiosUpDatedData = async obj => {
    axios
      .patch('https://server-quplus.herokuapp.com/user-payment/limit/day', 
      {
        amount : sliderValue
      },
      {
        headers: {Authorization: `Bearer ${route.params.Ftoken}`},
      })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log('error limit', error);
      });
};




const LimitPerDay = ({navigation, route}) => {
  const [sliderValue, setSliderValue] = useState(route.params.limitperday? route.params.limitperday:100000);
  const [edit, setEdit] = useState(false);
  console.log('Ftoken',route.params.Ftoken)
  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea'}}>
      <View
        style={{
          height: '12%',
          backgroundColor: '#387766',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'center',
          paddingLeft: '5%',
          marginBottom: '10%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}>
          <MeterialIcons
            name="arrow-back-ios"
            size={25}
            color="#f3f0ea"
            onPress={() => {
              axiosUpDatedData({
                amount: sliderValue,
              });
              console.log('VerifyOTP Success');
              navigation.navigate('Setting');
            }}
            backgroundColor="transparent"
            style={{
              position: 'absolute',
            }}
          />
          <Text
            style={{
              color: '#ffffff',
              fontSize: 25,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: 'bold',
            }}>
            Limit Amount
          </Text>
        </View>
      </View>

      <View style={{marginLeft: '8%', alignItems: 'center'}}>
        <View style={{marginBottom: '8%'}}>
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
            }}>
            Daily Transaction Limit on FourQU
          </Text>
          <Text
            style={{
              color: '#000000',
              fontWeight: '300',
              marginTop: '3%',
            }}>
            Limit covers transfer and payment made unsent
          </Text>
          <Text
            style={{
              color: '#000000',
              fontWeight: '300',
            }}>
            "Scan" menu on the homt page.
          </Text>
        </View>

        <Slider
          style={{width: '90%', height: 40}}
          onValueChange={sliderValue => setSliderValue(sliderValue)}
          minimumValue={0}
          maximumValue={500000}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#83a199"
          value={sliderValue}
          step={100000}
          disabled={!edit}
        />

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              fontWeight: '300',
            }}>
            0 THB
          </Text>
          <Text
            style={{
              color: '#000000',
              fontWeight: '300',
            }}>
            500000 THB
          </Text>
        </View>

        {edit ? (
          <MeterialIcons
            name="check"
            size={25}
            color="#8DD0BD"
            onPress={() => {
              setEdit(!edit);
            }}>
            <Text style={{fontFamily: 'Arial', fontSize: 12, color: '#000000'}}>
              check
            </Text>
          </MeterialIcons>
        ) : (
          <MeterialIcons
            name="edit"
            size={25}
            color="#8DD0BD"
            onPress={() => {
              setEdit(!edit);
            }}>
            <Text style={{fontFamily: 'Arial', fontSize: 12, color: '#000000'}}>
              edit
            </Text>
          </MeterialIcons>
        )}

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}>
          <Text style={{color: '#8DD0BD', fontSize: 20}}>{sliderValue}</Text>
          <Text style={{color: '#000000', fontSize: 20}}> THB</Text>
        </View>
      </View>
    </View>
  );
};


export default LimitPerDay;
