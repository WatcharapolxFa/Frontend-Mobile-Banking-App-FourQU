import React, { useState, useEffect } from 'react';
import * as CryptoJS from 'crypto-js'
import { StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { scanQRCodes, QrCode } from 'vision-camera-qrcode-scanner';
import { runOnJS } from 'react-native-reanimated';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Pressable,
  SectionList,
  Image,
  Alert,
  Dimensions,
  RefreshControl
} from 'react-native';

export default function CameraScan({ navigation, route }) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [qrCode, setQrCode] = useState([]);
  const devices = useCameraDevices();
  const device = devices.back;

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);
  async function decryption(hexString) {
    const temp = 'cf51178bcef1d353c67a67639dddd041a307e41f1fb25b36174bdb71b4f7b526ca3468ff9194a49c166fb79faefa204c25f5b11e69fd7385a5164cbf5b1be54ee1d2a2cf8c5b6b348c1d57ed998fdece62c66f33fb424dd54b42d408dbfecd6853101a624a5c109c56bf4bcf976eedba0ba33a6bdc7ce650054ef605d7956bb45f885a5e0f425bf6fc0f2b63cfaa05d4440913f4b8f6289a79f49b5cd3a675649506935f5b9e4bd7ed35d10f0fa2d34bb0564461e669239f4a4d651e6cbb94361674aded0a6e80ab922fe8d6ffab6bf6'
    // console.log(hexString)

    const KEY_SIZE = 128 / 8
    const IV_KEY = CryptoJS.enc.Utf8.parse('sefoekfij+95*fthhfthulikeergrtjyy@eggfhtht-wefhsbjwaiwj')
    const KEY = CryptoJS.enc.Utf8.parse('sefoekfij+95*wdufhuh@erfehe90ri03nf-wefhsbjwaiwj')
    console.log("scan de")
    const decrypted = CryptoJS.AES.decrypt(temp, KEY, {
      keySize: KEY_SIZE,
      iv: IV_KEY,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    
    console.log("de complete", decrypted)
    // const data = await JSON.parse(decrypted)
    console.log(JSON.parse(decrypted))
    // navigation.navigate('Transfer', {data});
    // return JSON.parse(decrypted);
  }

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  // useEffect(() => {
  //   // console.log(barcodes)
  //   if(barcodes && barcodes.length>0){
  //     decryption(barcodes.join(""))
  //   }
  // },[barcodes])

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const qrcode = scanQRCodes(frame);
    console.log(qrcode[0])
    // if (qrcode.length > 0) {
    //   console.log(qrcode[0].content.content)
    // }
    runOnJS(setQrCode)(qrcode);
  }, [])

  // useEffect(() => {
  //   // if (qrCode.length > 0) {
  //     decryption('qrCode[0].content.content');
  //   // }
  // }, [])

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
          orientation='portrait'
        />

        {/* <Text>{barcodes.length > 0 && JSON.stringify(decryption(barcodes.join("")))}</Text> */}

        {qrCode && qrCode.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            {barcode.url}
          </Text>
        ))}
      </>
    )
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});