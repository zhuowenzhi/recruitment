import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { counter , addSHA, removeSHA, addShaAsync} from './index.redux';
import thunk from '_redux-thunk@2.3.0@redux-thunk';

const store = createStore(counter, applyMiddleware(thunk))
function render() {
  ReactDom.render(<App store={store} addShaAsync={addShaAsync} addSHA={addSHA} removeSHA={removeSHA}/>,document.getElementById('root'))
}

render()

// 重新渲染页面
store.subscribe(render)