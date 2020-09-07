import React, {Component, Fragment} from 'react';

class XiaoJiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      list: ['serverOne', 'serverTwo']
    }
  }

  // 修改输入框内容
  handleInputChange(e) {
    let inputVal = e.target.value;
    this.setState({
      inputVal
    })
  }

  // 添加服务类型
  handleAddServer() {
    this.setState({
      list: [...this.state.list, this.state.inputVal]
    })
  }

  // 删除服务类型
  handleRemoveServer(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  render() {
    return (
      <Fragment>
        <div className="cont_input">
          <input
            onChange={this.handleInputChange.bind(this)}
            type="text"
            value={this.state.inputVal}/>
          <button onClick={this.handleAddServer.bind(this)}>增加服务</button>
        </div>
        <ul className="cont_list">
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item + index}>
                  <span>{item}</span>
                  <span onClick={this.handleRemoveServer.bind(this, index)}>删除</span>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default XiaoJiejie;
