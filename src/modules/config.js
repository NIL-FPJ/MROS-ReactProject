
// 配置全局变量

import { Component } from 'react'
import $http from './http'
import store from '../store'

Component.prototype.$http = $http
Component.prototype.$store = store
