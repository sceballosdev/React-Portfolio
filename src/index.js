import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';

import * as reduxModule from 'redux';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from "./store/RootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import firebaseConfig from './config/FirebaseConfig';


reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
        useFirestoreForProfile: true,
        userProfile: 'profile',
        attachAuthIsReady: true
    })
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
