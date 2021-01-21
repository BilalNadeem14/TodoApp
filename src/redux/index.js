import { createStore, applyMiddleware } from 'redux'; //applyMiddleware //for redux-thunk
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
// '@react-native-community/async-storage'

// import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['reducer', 'authReducer']
}

var persistedReducer = persistReducer(persistConfig, reducers)
// {}, 
var store = createStore(persistedReducer, applyMiddleware(thunk)); //createLogger(), 

var persistedStore = persistStore(store)

export { store, persistedStore }