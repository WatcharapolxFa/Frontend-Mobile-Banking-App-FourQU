/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {PermissionsAndroid, Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const PersonalInformation = ({navigation, route}) => {
  console.log(route.params.pictureProfile);
  const [image, setImage] = useState(
    route.params.pictureProfile? route.params.pictureProfile : 'https://img.myloview.com/posters/default-avatar-profile-icon-social-media-user-vector-image-400-242023490.jpg'
  );

  const [dataFormImg, setDataFormImg] = useState({});


  const upLoadImgToServer = async () =>{
    console.log(dataFormImg.uri);
    console.log(dataFormImg.name);
    console.log(dataFormImg.type);
        const data = new FormData();
        data.append('image', {
          uri: dataFormImg.uri,
          name: dataFormImg.name,
          type: dataFormImg.type,
        });

   
    axios
      .put('https://server-quplus.herokuapp.com/api/auth/editPicProfile',
      data,
      { 
        headers: { Authorization: `Bearer ${route.params.Ftoken}` } 
      })
      .then(function (response) {
        console.log('response',response);
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
  


}


  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      const nameImg = image.path.split('/');
      console.log(nameImg['11']);
      setDataFormImg({
        uri: image.path,
        name: nameImg['11'],
        type: image.mime,
      });
      // upLoadImgToServer(image.path, nameImg['11'],image.mime);
      setImage(image.path);
      
      
      CameraRoll.save(image.path, 'photo')
        .then(() => {
          console.log('can save');
        })
        .catch(err => {
          console.log('can not save');
          console.log(err);
        });

      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      const nameImg = image.path.split('/');
        setDataFormImg({
          uri: image.path,
          name: nameImg['11'],
          type: image.mime,
        });
      // upLoadImgToServer(image.path, nameImg['11'], image.mime);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea', }}>
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={350}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>
              Choose Your Profile Picture
            </Text>
          </View>
          <TouchableOpacity
            style={styles.panelButton}
            // onPress={{takePhotoFromCamera}}>
            onPress={() => takePhotoFromCamera()}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => choosePhotoFromLibrary()}>
            {/* onPress={{choosePhotoFromLibrary}}> */}
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      <View
        style={{
          height: '12%',
          backgroundColor: '#387766',
          justifyContent: 'center',
          paddingLeft: '5%',
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
            onPress={() =>{ 
              upLoadImgToServer();
              navigation.navigate('Setting')
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
            Personal Information
          </Text>
          {/* <View style={{flex: 1}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 25,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Personal
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 25,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Information
            </Text>
          </View> */}
        </View>
      </View>

      <View
        style={{
          height: '35%',
          backgroundColor: '#387766',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            borderWidth: 5,
            borderColor: '#ffffff',
          }}
        />
        <MeterialIcons
          style={{paddingTop: '2%'}}
          name="edit"
          size={25}
          color="#000000"
          onPress={() => this.RBSheet.open()}>
          <Text style={{fontFamily: 'Arial', fontSize: 12, color: '#000000'}}>
            edit
          </Text>
        </MeterialIcons>
        <Text
          style={{
            color: '#ffffff',
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {route.params.firstName} {route.params.middleName} {route.params.lastName}
        </Text>
        <Text
          style={{
            color: '#ffffff',
            marginTop: 10,
            fontWeight: '500',
            fontSize: 12,
          }}>
          Mobile No: {route.params.phone}
        </Text>
        <Text
          style={{
            color: '#ffffff',
            marginTop: 10,
            fontWeight: '500',
            fontSize: 12,
          }}>
          Email : {route.params.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // padding: 16,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
  },
  textBetweenbutton: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    color: '#000000',
  },
  form: {
    backgroundColor: '#f4f9f4',
    color: '#000000',
    width: '90%',
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  panel: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    // color: 'gray',
    height: 30,
    marginBottom: 10,
  },
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
  borderStyleBase: {
    width: 30,
    height: 45,
    color: '#000000',
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
    color: '#000000',
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

export default PersonalInformation;
