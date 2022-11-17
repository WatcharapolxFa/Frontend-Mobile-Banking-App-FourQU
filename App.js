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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Term" component={Term} />
          <Stack.Screen name="Navbar" component={Navbar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
