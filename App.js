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
  ActivityIndicator,
  View
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigation';
import { COLORS } from '@util/common'
import store from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import SignupScreen from './src/screens/SignupScreen';

const App = () => {

  return (
    <Fragment>
      <Provider store={store.store}>
        <PersistGate
          persistor={store.persistor}
          loading={
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
              <ActivityIndicator
                size="large"
                color="green"
              />
            </View>
          }
        >
          <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary }} />
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <Navigator /> */}
            <SignupScreen />
          </SafeAreaView>
        </PersistGate>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Fragment >
  );
};



export default App;
