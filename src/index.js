import {createStore} from 'redux'

// 新建store
// 通过reducer建立
// 根据state和action生成新的state
function counter(state=0, action) {
  switch(action.type) {
    case '加个小傻子观林': return state+1
    case '加聪明智': return state-1
    default: return 10
  }
}

const store = createStore(counter)

const init = store.getState()

console.log(init)

function listener() {
  const current = store.getState()
  console.log(`现在${current}傻子`)
}
store.subscribe(listener)
// 派发事件
store.dispatch( {type: '加个小傻子观林'})
store.dispatch( {type: '加个小傻子观林'})
store.dispatch( {type: '加个小傻子观林'})