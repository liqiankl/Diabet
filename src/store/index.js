import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger'
import createSensitiveStorage from 'redux-persist-sensitive-storage'

import appReducer from "../reducer"

const storage = createSensitiveStorage({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs"
});

const persistConfig = {
    timeout: null,
    key: 'root',
    storage: storage,
    whitelist: ['auth', 'profile']
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const loggerMiddleware = createLogger({
    collapsed: false,
    level: 'debug'
})

const middleware = [thunk]

if (__DEV__) {
    middleware.push(loggerMiddleware)
}

function configureStore() {
    const enhancer = composeWithDevTools(applyMiddleware(...middleware))
    const store = createStore(persistedReducer, enhancer)
    const persistor = persistStore(store)
    return { store, persistor }
}

const store = configureStore();
export default store;