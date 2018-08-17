

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actionCreator'

const _connect = (UIComponent, ...reducerOptions) => {
  let mapStateToProps = (state) => {
    // reducerOptions没传值， 就返回所有状态
    if (!reducerOptions.length) return state

    let _state = {}
    reducerOptions.forEach(reducer => {
      if (typeof reducer === 'string') {
        if (state[reducer]) {
          _state[reducer] = state[reducer]
        }
      } else {
        if (state[reducer.reducer]) {
          if (!reducer.state || !reducer.state.length) {
            _state[reducer.reducer] = state[reducer.reducer]
          } else {
            _state[reducer.reducer] = {}
            reducer.state.forEach(per => {
              _state[reducer.reducer][per] = state[reducer.reducer][per]
            })
          }
        } else {
          console.log(reducer)
        }
      }
    })
    return _state
  }

  let mapDispatchToProps = (dispatch) => {
    if (!reducerOptions.length) return {}
    let actions = {}

    reducerOptions.forEach(reducer => {
      if (typeof reducer === 'string') {
       
        if (actionCreators[reducer]) {
          actions[reducer + '_actions'] = bindActionCreators(actionCreators[reducer], dispatch)

        }
      } else {
        if (actionCreators[reducer.reducer]) {
          actions[reducer.reducer + '_actions'] = bindActionCreators(actionCreators[reducer.reducer], dispatch)
        }
      }
    })
    
    return actions
  }
  return connect(mapStateToProps, mapDispatchToProps)(UIComponent)
}

export default _connect