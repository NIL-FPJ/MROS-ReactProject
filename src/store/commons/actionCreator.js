
// 定义action

import http from '../../modules/http'
import { CHANGE_USER_STATE } from './const'

const actionCreator = {
  // 登录的action //异步 返回函数
  login({ username, password, success, fail }) {
    return dispatch => {
      // 调用后端 api，获取用户信息
      http.ajax({
        url: 'http://localhost:3003/user',
        params: { username, password }
      }).then(res=>{
        if(res.length>=1){
          let action = {type: CHANGE_USER_STATE, user_state: res }
          dispatch ( action )
          if(success) success()
        }else{
          if (fail) fail(JSON.stringify({status: false, message: '未受权，当前用户不存在，请重新登录！'}))
        }
      })
    }
  }
}

export default actionCreator