import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { counter , addSHA, removeSHA} from './index.redux';

const store = createStore(counter)
function render() {
  ReactDom.render(<App store={store} addSHA={addSHA} removeSHA={removeSHA}/>,document.getElementById('root'))
}

render()

// 重新渲染页面
store.subscribe(render)