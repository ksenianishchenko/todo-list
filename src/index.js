import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./redux/reducer";

const store = createStore(
        reducer,
        applyMiddleware()
    );

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </ Provider>
  , document.getElementById('root'));
