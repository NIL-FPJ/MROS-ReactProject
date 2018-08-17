
// 非父子组件通讯的中间实例

import { EventEmitter } from 'events'

let bus = new EventEmitter()

export default bus