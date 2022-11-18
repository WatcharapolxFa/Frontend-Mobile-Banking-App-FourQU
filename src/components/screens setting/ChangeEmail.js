/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import  AwesomeAlert from 'react-native-awesome-alerts';

const axiosUpDatedData = async obj => {
  axios
    .post('http://10.0.2.2:5000/UserTemp/updatedata', obj)
    .then(function (response) {
      if (response.data.status == 'FAILED') {
        throw Error('FAILED');
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};



const ChangeEmail = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [numberOTP, setnumberOTP] = useState('');
  const [ButtonOTP, setButtonOTP] = useState(false);
  const [SuccessverifyOTP, setSuccessverifyOTP] = useState(false);

  //chechkemail
  const [checkValidEmail,setCheckValidEmail]= useState(true);

  //timer
  const [timeLeft, setTimeLeft] = useState(null);
  const [activeResend, setActiveResend] = useState(true);

  //Alert
  const [alertShow,setAlertShow] = useState(false);
  const [titleAlertShow, settitleAlertShow] = useState('');
  const [contentAlertShow, setContentAlertShow] = useState('');
  const [buttonColorAlert,setButtonColorAlert] = useState('');
  const [buttonStatus,setButtonStatus]=useState(true);

  const triggerTimer = (targetTimeInSeconds = 30) => {
    setActiveResend(false);
    const finalTime = +new Date() + targetTimeInSeconds * 1000;
    resendTimeInterval = setInterval(() => calculateTimeLeft(finalTime), 1000);
  };

  const calculateTimeLeft = finalTime => {
    const difference = finalTime - +new Date();
    if (difference >= 0) {
      setTimeLeft(Math.round(difference / 1000));
    } else {
      clearInterval(resendTimeInterval);
      setActiveResend(true);
      setTimeLeft(null);
    }
  };

  const sendOTP = async obj => {
    console.log(obj);
    axios
      .post('http://10.0.2.2:5001/user/sendverifyOTP', obj)
      .then(function (response) {
        if (response.data.status == 'FAILED') {
          throw Error(response.data.message);
        } else {
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const resendOTP = async obj => {
    console.log(obj);
    axios
      .post('http://10.0.2.2:5001/user/resendOTPVerificationCode', obj)
      .then(function (response) {
        if (response.data.status == 'FAILED') {
          throw Error(response.data.message);
        } else {
          if (response.data.status == 'VERIFIED') {
            console.log('resendOTP Success');
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const verifyOTP = async obj => {
    console.log(obj);
    axios
      .post('http://10.0.2.2:5001/user/verifyOTP', obj)
      .then(function (response) {
        if (response.data.status == 'FAILED') {
          setContentAlertShow(response.data.message);
          settitleAlertShow('FAILED');
           setButtonColorAlert('#DD6B55');
          setButtonStatus(false);
          setAlertShow(true);
          //Alert.alert(response.data.message);
          throw Error(response.data.message);
        } else {
          if (response.data.status == 'VERIFIED') {
            setSuccessverifyOTP(true);
            axiosUpDatedData({id: '634ef2258c984f3e0bce4fb6', email: email});
            console.log('SuccessverifyOTP');
            setContentAlertShow(response.data.message);
            settitleAlertShow('VERIFIED');
             setButtonColorAlert('#5add55');
             setButtonStatus(true);
            setAlertShow(true);

           // Alert.alert('', 'Success Setup Your New Email', [
           //   {text: 'OK', onPress: () => navigation.popToTop()},
           // ]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea'}}>
      <View
        style={{
          height: '20%',
          backgroundColor: '#387766',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '5%',
          marginBottom: '10%',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Change Email
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{
            backgroundColor: '#f4f9f4',
            color: '#000000',
            width: '90%',
            height: 45,
            paddingHorizontal: 16,
            borderRadius: 6,
          }}
          placeholder="Email..."
          onChangeText={val => handleCheckEmail(val)}
          editable={!ButtonOTP}
        />
        {checkValidEmail ? (
          <Text style={{alignSelf: 'stretch', color: 'red', paddingLeft: '5%'}}>
            Wrong format email
          </Text>
        ) : (
          <Text></Text>
        )}
        {SuccessverifyOTP ? (
          <TouchableOpacity style={styles.panelButton} disabled={true}>
            <Text style={styles.panelButtonTitle}>You SuccessverifyOTP</Text>
          </TouchableOpacity>
        ) : ButtonOTP ? (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <OTPInputView
              style={{width: '50%', height: 70, color: '#ffffff'}}
              pinCount={4}
              onCodeChanged={code => {
                setnumberOTP(code);
              }}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {}}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: '10%'}}>
                <TouchableOpacity
                  style={
                    activeResend
                      ? styles.panelButton
                      : styles.panelButtondisabled
                  }
                  disabled={!activeResend}
                  // style={styles.panelButton}
                  onPress={async () => {
                    triggerTimer();
                    console.log('Resend OTP');
                    await resendOTP({
                      userID: '634ef2258c984f3e0bce4fb6',
                      email: email,
                    });
                  }}>
                  <Text style={styles.panelButtonTitle}>
                    Resend OTP {timeLeft}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                disabled={numberOTP.length != 4}
                style={
                  numberOTP.length != 4
                    ? styles.panelButtondisabled
                    : styles.panelButton
                }
                onPress={async () => {
                  console.log('VERIFY OTP SEND');
                  await verifyOTP({
                    userID: '634ef2258c984f3e0bce4fb6',
                    otp: numberOTP,
                  });
                }}>
                <Text style={styles.panelButtonTitle}>Verify OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            disabled={checkValidEmail}
            style={
              checkValidEmail ? styles.panelButtondisabled : styles.panelButton
            }
            onPress={async () => {
              console.log('OTP SEND');
              await sendOTP({
                userID: '634ef2258c984f3e0bce4fb6',
                email: email,
              });
              setButtonOTP(true);
            }}>
            <Text style={styles.panelButtonTitle}>Send OTP</Text>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MeterialIcons
          name="cancel"
          size={60}
          color="#FD6565"
          onPress={() => navigation.navigate('Setting')}
          backgroundColor="transparent"
        />
        <Text
          style={{
            fontFamily: 'Arial',
            fontSize: 16,
            color: '#000000',
            paddingLeft: '2%',
          }}>
          Cancel
        </Text>
      </View>
      <AwesomeAlert
        show={alertShow}
        showProgress={false}
        title={titleAlertShow}
        message={contentAlertShow}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={!buttonStatus}
        showConfirmButton={buttonStatus}
        cancelText="OK"
        confirmText="OK"
        confirmButtonColor={buttonColorAlert}
        cancelButtonColor={buttonColorAlert}
        onCancelPressed={() => {
          setAlertShow(false);
        }}
        onConfirmPressed={() => {
          setAlertShow(false);
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panelButton: {
    marginTop: 20,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#387766',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtondisabled: {
    marginTop: 20,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#b0abab',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
 
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 5,
    color: '#000000',
    borderColor: '#8DD0BD',
  },

  underlineStyleHighLighted: {
    borderColor: '#FD6565',
  },
});

export default ChangeEmail;
