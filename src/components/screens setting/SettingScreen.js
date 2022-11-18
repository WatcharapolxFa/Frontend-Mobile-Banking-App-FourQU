/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = ({navigation}) => {
  let initialData = {
    account: '',
    contactus: '',
    email: '',
    pin: '',
    limitperday: '',
    address: '',
    phone: '',
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axiosGetData();
      return unsubscribe;
    });

    // Call only when screen open or when back on screen
  }, [navigation]);

  const axiosGetData = async () => {
    axios
      .post('http://10.0.2.2:5000/UserTemp/data', {
        id: '634ef2258c984f3e0bce4fb6',
      })
      .then(function (response) {
        if (response.data.status == 'FAILED') {
          throw Error('FAILED');
        } else {
          initialData = {
            account: response.data.data.account,
            contactus: response.data.data.contactus,
            email: response.data.data.email,
            pin: response.data.data.pin,
            limitperday: response.data.data.limitperday,
            address: response.data.data.address,
            phone: response.data.data.phone,
          };
          console.log(initialData);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            onPress={() => console.log('back')}
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
            Settings
          </Text>
        </View>
      </View>

      <ScrollView>
        {/* Personal Info */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonalInformation', {
              phone: initialData.phone,
            })
          }>
          <View style={styles.item}>
            <MeterialIcons name="people" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Personal Information</Text>
                <Text style={styles.itemText}>Picture, Username</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Eemail */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Email', {
              email: initialData.email,
            })
          }>
          <View style={styles.item}>
            <MeterialIcons name="email" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Email</Text>
                <Text style={styles.itemText}>can change</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Security */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Security', {pin: initialData.pin})
          }>
          <View style={styles.item}>
            <MeterialIcons name="lock-outline" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Security</Text>
                <Text style={styles.itemText}>PIN</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Current address */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Currentaddress', {pin: initialData.pin})
          }>
          <View style={styles.item}>
            <MeterialIcons name="explore" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Current address</Text>
                <Text style={styles.itemText}>Address</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/*Limit Amount Transfer Per Day*/}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LimitPerDay', {
              limitperday: initialData.limitperday,
            })
          }>
          <View style={styles.item}>
            <MeterialIcons name="attach-money" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Limit Amount</Text>
                <Text style={styles.itemText}>Read only</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/*Terms*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('Terms', {pin: initialData.pin})}>
          <View style={styles.item}>
            <MeterialIcons name="assignment" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Terms</Text>
                <Text style={styles.itemText}>Read only</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>

        {/*Contract us*/}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ContactUs', {pin: initialData.pin})
          }>
          <View style={styles.item}>
            <MeterialIcons name="add-ic-call" size={50} color="#000000" />
            <View style={styles.textBetweenbutton}>
              <View>
                <Text style={styles.itemText}>Contract us</Text>
                <Text style={styles.itemText}>Read only</Text>
              </View>
              <MeterialIcons name="arrow-forward" size={25} color="#000000" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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

export default SettingScreen;
