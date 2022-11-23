/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = ({navigation}) => {
   const readRefresh = async () => {
    try {
      return await AsyncStorage.getItem('@storage_refresh_token');
    } catch (error) {
      vaid;
      console.log('error read refresh_token');
    }
  };

  const [initialData, setInitialData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    pictureProfile: '',
    postalCode: '',
    province: '',
    district: '',
    subDistrict: '',
    houseNo: '',
    village: '',
    lane: '',
    road: '',
  });
  const [limitperday, setLimitperday] = useState(200000);

  useEffect(() => {
     console.log('1111');
     console.log('readRefresh', readRefresh());
    const unsubscribe = navigation.addListener('focus', () => {
      axiosGetData();
      return unsubscribe;
    });

    // Call only when screen open or when back on screen
  }, [navigation]);

  console.log('readRefresh', readRefresh());
  //const token = readRefresh();
  //const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo';
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJjZDY5MGU4LTMyOWQtNDc1Ny1hNDZhLTQxYjc4NDk0ZTFjNyIsImZpcnN0TmFtZSI6IlBhcm0iLCJtaWRkbGVOYW1lIjoiS3ViIiwibGFzdE5hbWUiOiJraWtpIiwidGltZV9zdGFtcCI6IjIwMjItMTEtMjNUMDM6NTM6MDMuMDg0WiIsImlhdCI6MTY2OTE3NTU4MywiZXhwIjoxNjY5NzgwMzgzfQ.E6eNsLdRGb4ypvud2SuoDRTlMd8vKzPELw_28vomGFo';
  const [Ftoken, setFToken] = useState('');
  const axiosGetData = async () => {
    console.log('axiosGetData');
    axios
      .post(
        'https://server-quplus.herokuapp.com/api/auth/signin',
        {},
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      )
      .then(async response => {
        // console.log('Ftoken',response.data.AcessToken);
        setFToken(response.data.AcessToken);
        axios
          .get('https://server-quplus.herokuapp.com/api/auth/information', {
            headers: {Authorization: `Bearer ${response.data.AcessToken}`},
          })
          .then(response => {
            setInitialData({
              firstName: response.data.firstName,
              middleName: response.data.data.middleName,
              lastName: response.data.data.lastName,
              phone: response.data.data.phone,
              email: response.data.data.email,
              pictureProfile: response.data.data.pictureProfile,
              postalCode: response.data.data.address.postalCodeS,
              province: response.data.data.address.province,
              district: response.data.data.address.district,
              subDistrict: response.data.data.address.subDistrict,
              houseNo: response.data.data.address.houseNo,
              village: response.data.data.address.village,
              lane: response.data.data.address.lane,
              road: response.data.data.address.road,
            });
            //  initialData = {
            //    firstName: response.data.firstName,
            //    middleName: response.data.data.middleName,
            //    lastName: response.data.data.lastName,
            //    phone: response.data.data.phone,
            //    email: response.data.data.email,
            //    pictureProfile: response.data.data.pictureProfile,
            //    postalCode: response.data.data.address.postalCodeS,
            //    province: response.data.data.address.province,
            //    district: response.data.data.address.district,
            //    subDistrict: response.data.data.address.subDistrict,
            //    houseNo: response.data.data.address.houseNo,
            //    village: response.data.data.address.village,
            //    lane: response.data.data.address.lane,
            //    road: response.data.data.address.road,
            //  };
          })
          .catch(function (error) {
            console.log('error info', error.response.data);
          });
        await axios
          .get(
            'https://server-quplus.herokuapp.com/api/user-payment/limit/day',
            {
              headers: {Authorization: `Bearer ${response.data.AcessToken}`},
            },
          )
          .then(function (response) {
            console.log('response.data.amountLimit', response.data.amountLimit);
            setLimitperday(response.data.amountLimit);
          })
          .catch(function (error) {
            console.log('error limit', error);
          });
       
     


      })
      .catch(function (error) {
        console.log('error signin', error.response.data);
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
            onPress={() =>navigation.navigate('Home')}
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
              email: initialData.email,
              firstName: initialData.firstName,
              middleName: initialData.middleName,
              lastName: initialData.lastName,
              phone: initialData.phone,
              email: initialData.email,
              pictureProfile: initialData.pictureProfile,
              Ftoken: Ftoken,
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

        {/* Security */}
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate('Security', {pin: initialData.pin})
            navigation.navigate("CheckPinSecurity")
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
          onPress={() => {
            navigation.navigate('Currentaddress', {
              houseNo: initialData.houseNo,
              village: initialData.village,
              lane: initialData.lane,
              road: initialData.road,
              subDistrict: initialData.subDistrict,
              district: initialData.district,
              province: initialData.province,
              postalCode: initialData.postalCode,
            });
          }}>
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
              limitperday: limitperday,
              Ftoken: Ftoken,
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
