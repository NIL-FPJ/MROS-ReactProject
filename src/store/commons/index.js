
// reducer

import state from './state'

import { CHANGE_USER_STATE, CHANGE_MENU_LIST } from './const'

const reducer = (previousStat = state, action) => {
  // 创建一个对象，接受当前state
  let new_state = JSON.parse(JSON.stringify(previousStat))

  // 判断action
  switch (action.type) {
    case CHANGE_USER_STATE:
      new_state.user_state = action.user_state
      break;
    case CHANGE_MENU_LIST:
      new_state.menu_list = action.menu_list
      break;
    default: break;
  }

  return new_state
}

export default reducer 