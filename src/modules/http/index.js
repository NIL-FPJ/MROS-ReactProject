
// 封装axios

import axios from 'axios'
import bus from '../bus'

const http = {
  ajax(options) {
    console.log(options)
    return new Promise((resolve, reject) => {
      // 显示加载
      bus.emit('change-loading', true)
      axios({
        url: options.url,
        method: options.method || 'GET',
        params: options.params || {},
        // `headers` 是即将被发送的自定义请求头
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': "application/json" },
        // 将请求的数据转换成JSON格式的数据
        transformRequest: [function (data) {
          data = JSON.stringify(options.params)
          return data;
        }]
      }).then(res => {
        if (res.status.toString().indexOf('2') === 0) {
          resolve(res)
          bus.emit('change-loading')
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  judgestatus(status) {
    let message = ''
    switch (status) {
      case 400:
        message = '错误请求'
        break;
      case 401:
        message = '未授权，请重新登录'
        break;
      case 403:
        message = '拒绝访问'
        break;
      case 404:
        message = '请求错误,未找到该资源'
        break;
      case 405:
        message = '请求方法未允许'
        break;
      case 408:
        message = '请求超时'
        break;
      case 500:
        message = '服务器端出错'
        break;
      case 501:
        message = '网络未实现'
        break;
      case 502:
        message = '网络错误'
        break;
      case 503:
        message = '服务不可用'
        break;
      case 504:
        message = '网络超时'
        break;
      case 505:
        message = 'http版本不支持该请求'
        break;
      default:
        message = `连接错误${status}`
    }
    return message
  }
}

export default http