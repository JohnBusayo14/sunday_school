import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondPage from './screen/SecondPage';
import Homescreen from './screen/Homescreen';
import { NativeBaseProvider, Text, Box } from "native-base";
import LessonPage from './screen/LessonPage';


const Stack = createStackNavigator();

const App = () => {
  return (
   <NativeBaseProvider>
   <NavigationContainer>
   <Stack.Navigator initialRouteName="FirstPage">
     <Stack.Screen name="FirstPage" component={Homescreen} />
     <Stack.Screen name="SecondPage" component={SecondPage} />
     <Stack.Screen name='Lesson1' component={LessonPage} />
    
   </Stack.Navigator>
 </NavigationContainer>
   </NativeBaseProvider>
  );
};

export default App;
