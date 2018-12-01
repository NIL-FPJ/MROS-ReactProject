
// 定义action

import http from '../../modules/http'
import {
  CHANGE_USER_STATE,
  CHANGE_MENU_LIST,
  CHANGE_MEETING_ROOM_DATA
} from './const'

const actionCreator = {
  // 登录的action //异步 返回函数
  login({ username, password, success, fail }) {
    return dispatch => {
      // 调用后端 api，获取用户信息
      http.ajax({
        url: 'http://localhost:3003/user',
        params: { username, password }
      }).then(res => {
        if (res.data.length >= 1) {
          let action = { type: CHANGE_USER_STATE, user_state: res }
          dispatch(action)
          // 保存登录状态
          sessionStorage.user_state = JSON.stringify(res)
          if (success) success()
        } else {
          if (fail) fail(JSON.stringify({ status: false, message: '当前用户不存在，请重新登录！' }))
        }
      })
    }
  },

  // 获取用户登录状态
  get_user_state(callback) {
    if (!sessionStorage.user_state) callback()
    let user_state = JSON.parse(sessionStorage.user_state || '{}')
    return { type: CHANGE_USER_STATE, user_state }
  },

  // 获取左边导航菜单列表
  get_menu_list() {
    return dispatch => {
      http.ajax({
        url: 'http://localhost:3003/menu_list?'
      }).then(data => {
        dispatch({ type: CHANGE_MENU_LIST, menu_list: data.data })
      })
    }
  },

  // 获取会议室全部数据
  get_meeting_room_data({city, success, fail }) {
    return dispatch => {
      http.ajax({
        url: 'http://localhost:3003/meeting_room_data?city='+city
      }).then(data => {
        if (success) success(data.data)
        dispatch({ type: CHANGE_MEETING_ROOM_DATA, meeting_room_data: data.data })
      }).catch((err) => {
        if (fail) fail(err)
      })
    }
  }
}

export default actionCreator