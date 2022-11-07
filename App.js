import React from 'react'
import { View, Text } from 'react-native'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from "./screens/Navbar"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="scanQrCodes"
          component={scanQrCodes}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App