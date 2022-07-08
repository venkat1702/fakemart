import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  AppRoutes from "./Routes"
import { legacy_createStore as createStore } from 'redux'
import { Provider } from "react-redux";
import allreducers from "./reducers";


const store = createStore(allreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <>
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    </>

);

