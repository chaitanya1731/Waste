/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import * as firebase from '@react-native-firebase/app';
import Routes from './Routes';

// const App: () => React$Node = () => {
export default class App extends React.Component { 
  render() {
    return (
      
        <View style={styles.container}>
          <StatusBar
             backgroundColor="#1c313a"
             barStyle="light-content"
           />
          <Routes/>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

