/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

const Currentaddress = ({navigation}) => {
   return (
     <View style={{flex: 1}} className="bg-base">
       <View
         style={{
           height: '12%',
           backgroundColor: '#387766',
           //  borderBottomLeftRadius: 20,
           //  borderBottomRightRadius: 20,
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
         <ScrollView>
           <View className=" inset-x-4 w-11/12">
             <View>
               <Text className="text-1xl text-white font-bold mt-5">
                 House No.
               </Text>
               <View className="w-full bg-white mt-2 rounded-sm h-9">
                 <TextInput
                   style={{color: '#000000',}}
                   editable={false}
                   className="text-full ">
                   บ้านเลขที่ 99
                 </TextInput>
               </View>
             </View>

             <View className="flex-row flex-1">
               <View className="justify-items-start basis-5/12">
                 <Text className="text-1xl text-white font-bold mt-5">
                   Village
                 </Text>
                 <View className="w-full bg-white mt-2 rounded-sm h-9">
                   <TextInput
                   style={{color: '#000000',}}
                   editable={false}
                   className="text-full ">
                   สุขดี
                 </TextInput>
                 </View>
               </View>
               <View className="justify-items-center basis-2/12"></View>

               <View className="justify-items-end basis-5/12">
                 <Text className="text-1xl text-white font-bold mt-5">
                   Alley
                 </Text>
                 <View className="w-full bg-white mt-2 rounded-sm h-9">
                   <TextInput className="text-full"></TextInput>
                 </View>
               </View>
             </View>

             <View>
               <Text className="text-1xl text-white font-bold mt-5">
                 Sub-District
               </Text>
               <View className="w-full bg-white mt-2 rounded-sm h-9">
                 <TextInput className="text-full"></TextInput>
               </View>
             </View>

             <View>
               <Text className="text-1xl text-white font-bold mt-5">
                 District
               </Text>
               <View className="w-full bg-white mt-2 rounded-sm h-9">
                 <TextInput className="text-full"></TextInput>
               </View>
             </View>

             <View>
               <Text className="text-1xl text-white font-bold mt-5">
                 Province
               </Text>
               <View className="w-full bg-white mt-2 rounded-sm h-9">
                 <TextInput className="text-full"></TextInput>
               </View>
             </View>

             <View>
               <Text className="text-1xl text-white font-bold mt-5">
                 Postal Number
               </Text>
               <View className="w-full bg-white mt-2 rounded-sm h-9">
                 <TextInput className="text-full"></TextInput>
               </View>
             </View>
           </View>
         </ScrollView>
       </View>
     </View>
   );
};


export default Currentaddress;



// import { 
//     SafeAreaView,
//     View, 
//     Text,
//     ScrollView,
//     TextInput,
//     Button,
//     Pressable,
//     Image,} from 'react-native'
    
// import React from 'react'


  
  // const RegisterSub3= () => {
   
  // }
  
  // export default RegisterSub3