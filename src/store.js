import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel12 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// const initialState = {};
const middleware = [thunk];

// const Store = createStore(rootReducer , initialState , composeWithDevTools(applyMiddleware(...middleware)));

// export default Store
// const middleware = applyMiddleware(thunk)
const persistConfig = {
    key:'root',
    storage: storage,
    stateReconciler: autoMergeLevel12
}

const pReducer = persistReducer(persistConfig , rootReducer);
export const store = createStore(pReducer , composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store)


//use persisted reducer



