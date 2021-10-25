import React from 'react';
import AppNavigator from './navigation/AppNavigator';
//reduxをインポート
import { Provider } from 'react-redux';
import store,{persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    // reduxで管理させるためproviderで囲む
    //パラメーターをstoreとして渡すようにしておく
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
