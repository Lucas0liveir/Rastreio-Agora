
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import OneSignal from 'react-native-onesignal';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

const { ONESIGNALAPPID } = process.env

export default function App() {

  useEffect(() => {
    OneSignal.setAppId(ONESIGNALAPPID);
  }, [])

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} />
      <Routes />
    </ThemeProvider>

  )
}

