/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from './src/screen/Main';
import { DataStore, StorePersistor } from './src/redux';

const App = () => {
  return (
    <Provider store={DataStore}>
      <PersistGate persistor={StorePersistor}>
        <Main />
      </PersistGate>
    </Provider>

  );
};



export default App;
