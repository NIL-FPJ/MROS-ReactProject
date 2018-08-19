
import React from 'react';
import ReactDOM from 'react-dom';

// 日历、日期语言--中文
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

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
  <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
      <Router />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root'));

