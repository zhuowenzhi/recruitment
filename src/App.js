import React from 'react'

class App extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const store = this.props.store
    const num = store.getState()
    const addSHA = this.props.addSHA
    const removeSHA = this.props.removeSHA
    const addShaAsync = this.props.addShaAsync
    return (
      <div>
        <h1>现在有傻子{num}</h1>
        <button onClick={() => store.dispatch(addSHA())}>加个傻子</button>
        <button onClick={() => store.dispatch(addShaAsync())}>拖了个傻子</button>
        <button onClick={() => store.dispatch(removeSHA())}>少个傻子</button>
      </div>
    )
  }
}
export default App