/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';
const bcrypt = require('react-native-bcrypt');


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



const Security = ({navigation, route}) => {
  const [pin, Setpin] = useState('');
  const [newpin, Setnewpin] = useState('');
  const [confirmpin, Setconfirmpin] = useState('');

  const [scorrectpin, Setscorrectpin] = useState(false);
  const [snewpin, sSetnewpin] = useState(false);
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
            Pin
          </Text>
        </View>
      </View>

      {scorrectpin ? (
        snewpin ? (
          <View>
            <Text>Confirmpin YOUR NEW PIN</Text>
            <TextInput
              style={styles.form}
              placeholder="Confirmpin NEW PIN"
              onChangeText={val => {
                Setconfirmpin(val);
              }}
            />
            <Button
              title="Enter Confirmpin Pin"
              disabled={confirmpin.length != 4}
              onPress={async () => {
                if (confirmpin == newpin) {
                  let salt = bcrypt.genSaltSync(10);
                  let pincode = bcrypt.hashSync(confirmpin, salt);
                  await axiosUpDatedData({
                    id: '634ef2258c984f3e0bce4fb6',
                    pin: pincode,
                  });
                  Alert.alert('', 'Success Setup Your NewPin', [
                    {text: 'OK', onPress: () => navigation.popToTop()},
                  ]);
                  Setscorrectpin(false);
                } else {
                  Alert.alert('Wrong Confirmpin Pin');
                }
              }}
            />
          </View>
        ) : (
          <View>
            <Text>IN PUT YOUR NEW PIN</Text>
            <TextInput
              style={styles.form}
              placeholder="NEW PIN"
              onChangeText={val => {
                Setnewpin(val);
              }}
            />
            <Button
              title="Enter NEW Pin"
              disabled={newpin.length != 4}
              onPress={async () => {
                sSetnewpin(true);
              }}
            />
          </View>
        )
      ) : (
        <View>
          <Text>Your PIN</Text>
          <TextInput
            style={styles.form}
            placeholder="PIN"
            onChangeText={val => {
              Setpin(val);
            }}
          />
          <Button
            title="Enter Pin"
            disabled={pin.length != 4}
            onPress={async () => {
              bcrypt.compare(pin, route.params.pin, function (err, res) {
                if (res === true) {
                  Alert.alert('', 'Success your pin');
                  Setscorrectpin(true);
                } else if (res === false) {
                  Alert.alert('Wrong Pin code');
                }
              });
            }}
          />
        </View>
      )}
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


export default Security;