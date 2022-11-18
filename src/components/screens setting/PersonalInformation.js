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

const PersonalInformation = ({navigation, route}) => {
  const [image, setImage] = useState(
    'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=',
  );
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
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
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea'}}>
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
            onPress={() => navigation.navigate('Setting')}
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
          Watcharapol
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