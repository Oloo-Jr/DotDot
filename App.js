import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigator/RootNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React,{ useState, useEffect, useRef } from 'react'



const fetchFonts = () => {
  return Font.loadAsync({
    'Lexend-lighter': require('./assets/fonts/Lexend-Light.ttf'),
    'Lexend-light': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-bold': require('./assets/fonts/Lexend-Medium.ttf'),

  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />

    );
  }


  return (
    <RootNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
