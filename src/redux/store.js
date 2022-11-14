import {createStore,  applyMiddleware} from 'redux';
import  thunk  from  'redux-thunk';
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

import {configureStore} from '@reduxjs/toolkit'




const store=configureStore ({
    reducer:{
        auth: authenticateReducer,
        product: productReducer,
    }
});

export default store;


//리덕스가 업그레이드가 되면서 더이상 createStore을 지원안함
// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))
// );



