
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
import { PackageProvider, usePackages } from './src/hooks/packages';
import { Load } from './src/components/Load';

const { ONESIGNALAPPID } = process.env

export default function App() {

  const { loading } = usePackages()

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
      <PackageProvider>
        <StatusBar barStyle='light-content' backgroundColor={'transparent'} />
        <Routes />
      </PackageProvider>
    </ThemeProvider>

  )
}

