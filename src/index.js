import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './redux/store'

import './mock'
import App from './app';

//Provider是react-redux提供的简写方法  将store挂载到App对象上
ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>

      ),  document.getElementById('root'));

