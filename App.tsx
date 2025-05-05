import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import { RootStackParamList } from './src/types/navigation';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'cs_regular': require('./src/assets/fonts/cs_regular.ttf')
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

