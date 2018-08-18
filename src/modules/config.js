
// 配置全局变量

import { Component } from 'react'
import $http from './http'
import store from '../store'
import bus from './bus'

Component.prototype.$http = $http
Component.prototype.$store = store
Component.prototype.$bus = bus
