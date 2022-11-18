import React from 'react';
// import { View, Text } from 'react-native';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import Home from './src/components/Home';
import Term from './src/components/Term';
import Navbar from './src/components/Navbar';
import HomeShop from './src/components/HomeShop';

import Transaction from './src/components/Transaction';
import Login from './src/components/Login';
import Transfer from './src/components/Transfer'
import Review from './src/components/Review';

import SettingScreen from './src/components/screens setting/SettingScreen';
import PersonalInformation from './src/components/screens setting/PersonalInformation';
import Email from './src/components/screens setting/Email';
import Security from './src/components/screens setting/Security';
import Security2 from './src/components/screens setting/Security2';
import Currentaddress from './src/components/screens setting/Currentaddress';
import LimitPerDay from './src/components/screens setting/LimitPerDay';
import Terms from './src/components/screens setting/Terms';
import ContactUs from './src/components/screens setting/ContactUs';
import ChangeEmail from './src/components/screens setting/ChangeEmail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="HomeShop" component={HomeShop} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Term" component={Term} />
          <Stack.Screen name="Navbar" component={Navbar} />


          <Stack.Screen name="Transaction" component={Transaction} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Review" component={Review} />


          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="PersonalInformation" component={PersonalInformation}/>
          <Stack.Screen name="Email" component={Email} />
          {/* <Stack.Screen name="Security" component={Security} /> */}
          <Stack.Screen name="Currentaddress" component={Currentaddress} />
          <Stack.Screen name="LimitPerDay" component={LimitPerDay} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="ChangeEmail" component={ChangeEmail} />



        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
