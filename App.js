/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigation';
import { COLORS } from '@util/common'
const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigator />
      </SafeAreaView>
    </Fragment >
  );
};



export default App;
