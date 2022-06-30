import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { NativeModules, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { PackageProvider } from './src/hooks/packages';

export default function App() {



  useEffect(() => {
    NativeModules.BackgroundWorkManager.startBackgroundWork();
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

