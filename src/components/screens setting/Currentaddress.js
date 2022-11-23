/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';


const Currentaddress = ({navigation, route}) => {
  // console.log(
  //   route.params
  // );

  return (
    <View style={{flex: 1, backgroundColor: '#387766'}} className="bg-base">
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
            Current Address
          </Text>
        </View>
      </View>

      <View style={{flex: 1}} className="w-full  bg-[#387766]">
        <ScrollView className="mb-10">
          <View
            style={{
              flex: 1,
              marginLeft: '5%',
              marginRight: '5%',
              marginBottom: '5%',
              marginTop: '5%',
            }}>
            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                House No.
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  paddingLeft: '2%',
                  width: '100%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.houseNo ? route.params.houseNo : '-'}
                </TextInput>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                Village
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  paddingLeft: '2%',
                  width: '100%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.village ? route.params.village : '-'}
                </TextInput>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', width: '100%'}}
              className="flex-row flex-1">
              <View style={{width: '45%'}}>
                <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                  Lane
                </Text>
                <View
                  style={{
                    borderRadius: 4,
                    marginTop: '3%',
                    marginBottom: '3%',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    paddingLeft: '2%',
                  }}>
                  <TextInput
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      width: '100%',
                    }}
                    maxLength={30}
                    editable={false}>
                    {route.params.lane ? route.params.lane : '-'}
                  </TextInput>
                </View>
              </View>

              <View style={{width: '10%'}}></View>

              <View style={{width: '45%'}}>
                <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                  Road
                </Text>
                <View
                  style={{
                    borderRadius: 4,
                    marginTop: '3%',
                    marginBottom: '3%',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    paddingLeft: '2%',
                  }}>
                  <TextInput
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      width: '100%',
                    }}
                    maxLength={30}
                    editable={false}>
                    {route.params.road ? route.params.road : '-'}
                  </TextInput>
                </View>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                Sub-District
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  width: '100%',
                  paddingLeft: '2%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.subDistrict ? route.params.subDistrict : '-'}
                </TextInput>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                District
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  width: '100%',
                  paddingLeft: '2%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.district ? route.params.district : '-'}
                </TextInput>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                Province
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  width: '100%',
                  paddingLeft: '2%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.province ? route.params.province : '-'}
                </TextInput>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'NotoSans-Bold', color: '#ffffff'}}>
                Postal Number
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  marginTop: '3%',
                  marginBottom: '3%',
                  backgroundColor: '#ffffff',
                  width: '100%',
                  paddingLeft: '2%',
                }}>
                <TextInput
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    width: '100%',
                  }}
                  maxLength={30}
                  editable={false}>
                  {route.params.postalCode ? route.params.postalCode : '-'}
                </TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
        
      </View>
    </View>
  );
};

export default Currentaddress;
