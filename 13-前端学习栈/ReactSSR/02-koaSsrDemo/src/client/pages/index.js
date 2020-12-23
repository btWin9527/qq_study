import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerClick() {
    alert('点击事件')
  }

  render() {
    return <h1 onClick={this.handlerClick}>hello react ssr!</h1>
  }
}
