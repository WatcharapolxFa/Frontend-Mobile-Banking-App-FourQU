/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactUs = ({navigation}) => {
  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea'}}>
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
            Contract Us
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          borderBottomWidth: 3,
          borderBottomColor: '#EBE5E0',
          backgroundColor: '#EBE5E0',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,
        }}>
        <Text
          style={{
            fontFamily: 'Arial',
            fontSize: 22,
            color: '#000000',
            paddingLeft: '5%',
            fontWeight: 'bold',
          }}>
          Chat with FourQU Live
        </Text>
      </View>
      {/* Line*/}
      <TouchableOpacity disabled={true}>
        <View style={styles.item}>
          <MeterialIcons name="contact-support" size={50} color="#000000" />
          <View style={styles.textBetweenbutton}>
            <View>
              <Text style={styles.itemText}>Line</Text>
              <Text style={styles.itemText}>@FourQU</Text>
            </View>
            {/* <MeterialIcons name="arrow-forward" size={25} color="#000000" /> */}
          </View>
        </View>
      </TouchableOpacity>
      {/* Email*/}
      <TouchableOpacity disabled={true}>
        <View style={styles.item}>
          <MeterialIcons name="email" size={50} color="#000000" />
          <View style={styles.textBetweenbutton}>
            <View>
              <Text style={styles.itemText}>Email</Text>
              <Text style={styles.itemText}>FourQU@FourQU.com</Text>
            </View>
            {/* <MeterialIcons name="arrow-forward" size={25} color="#000000" /> */}
          </View>
        </View>
      </TouchableOpacity>
      {/* Web*/}
      <TouchableOpacity disabled={true}>
        <View style={styles.item}>
          <MeterialIcons name="web" size={50} color="#000000" />
          <View style={styles.textBetweenbutton}>
            <View>
              <Text style={styles.itemText}>Website</Text>
              <Text style={styles.itemText}>read only</Text>
            </View>
            {/* <MeterialIcons name="arrow-forward" size={25} color="#000000" /> */}
          </View>
        </View>
      </TouchableOpacity>
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

export default ContactUs;