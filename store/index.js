import { createStore, combineReducers } from "redux";
// import { userReducer } from './reducers/user';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import{AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
  };
  
  const rootReducer = combineReducers({
    user: userReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = createStore(persistedReducer, composeWithDevTools());
  
  export const persistor = persistStore(store);
  export default store;

//   // rootの下にuserreruderをおく
// const rootReducer = combineReducers({
//     user: userReducer
// })

// const persistConfig = {
//     key:'root',
//     storage:AsyncStorage,
//     whitelist:['user']
// }

// const persistReducer = persistReducer(persistConfig, rootReducer)

// // const store = createStore(rootReducer);
// // const store = createStore(rootReducer, composeWithDevTools());
// // 保存先を端末側に切り替え
// const store = createStore(persistReducer, composeWithDevTools());

// export const persistor = persistStore(store);

// export default store;