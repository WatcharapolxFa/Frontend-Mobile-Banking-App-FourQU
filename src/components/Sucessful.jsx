import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React, {useRef, useEffect} from 'react';
import bitcoin from '../assets/icon/bitcoin.png';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import {
  Dimensions,
  TouchableHighlight,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import Bill from './Bill';

const Sucessful = ({navigation, route}) => {
  const ref = useRef();
  useEffect(() => {
    // on mount
    ref.current.capture().then(uri => {
      console.log('URI : ', uri);
      saveImage();
    });
  }, []);

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Gallery permission',
          message: 'Need to access for saved bill to gallery',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      console.log(err);
    }
  };
  const saveImage = async () => {
    try {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 0.8,
      });
      console.log(uri);
      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Bill saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View className=" h-screen bg-green-sod relative flex flex-col">
      {/* Header */}
      <View className="">
        <Text className="text-center font-notobold text-white text-xl mt-3">
          Transaction Successful
        </Text>
      </View>
      <ViewShot
        className="mt-10 items-center"
        ref={ref}
        options={{fileName: 'Your-File-Name', format: 'jpg', quality: 1.0}}>
        <Bill
          timestamp={route.params.timestamp}
          nameOther={route.params.nameOther}
          otherAccountNumber={route.params.otherAccountNumber}
          amount={route.params.amount}
          memo={route.params.memo}
        />
        {/* <Image source={bill} className="rounded-xl w-[350] h-[350]"/> */}
      </ViewShot>
      <View className="mt-4 ml-6 ">
        <Text className="font-noto text-white text-sm">
          Available Balance: 1234.00 Baht
        </Text>
      </View>
      <View className="bg-[#155745] bottom-0 z-10 absolute h-24 flex justify-center items-center w-screen">
        <View className="rounded-full bg-[#5ABB9E] p-2 logo-sd border-black border-2 shadow-logo">
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={bitcoin} className="w-10 h-10" />
          </Pressable>
        </View>
        <Text className="font-notobold text-white">Back to Home</Text>
      </View>
      {/* Header */}
    </View>
  );
};

export default Sucessful;
