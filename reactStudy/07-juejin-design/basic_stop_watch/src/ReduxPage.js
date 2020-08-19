import React, {Component} from 'react';
import store from './store'

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  add = () => {
    store.dispatch({type: 'ADD', payload: 1})
  }

  minus = () => {
    store.dispatch({type: 'MINUS', payload: 1})
  }
  render() {
    return (
      <div>
        <h3>Reduxpage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.minus}>同步-</button>
        <button onClick={this.minus}>同步-</button>
      </div>
    )
  }
}
