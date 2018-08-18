
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux'
import store from './store'

// 全局配置
import './modules/config'
// 全局路由
import Router from './router'
// 全局样式
import './stylesheets/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'));

