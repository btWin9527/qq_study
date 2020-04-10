import React from "react";
import ReactDOM from "react-dom";

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
/* 函数式组件 */
/*function Todo({content,from}) {
  return <li>Hello,{content} --- {from}</li>;
}*/

/* 类组件 */
class Todo extends React.Component {
  render() {
    let {props: {content, idx}} = this;
    if (idx % 2 === 0) {
      return <li style={{color: "red"}}>Hello,{content}</li>;
    } else {
      return <li>Hello, {content}</li>;
    }
  }
}

/* 组合组件 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      nowTodo: '',
      flagTest: false,// 测试条件渲染标识
    };
  }

  // 组件挂载
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        todoList: todoList
      })
    }, 200);
  }

  // 组件卸载
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  // 修改todoList
  handleChange(e) {
    this.setState({
      todoList: ["测试1", "测试2", "测试3", "测试4"],// 测试list
    });
  }

  // 点击超链接
  handleClick(e) {
    e.preventDefault();
    console.log('链接点击')
  }

  // 修改Input输入
  handleInput(e) {
    this.setState({
      nowTodo: e.target.value
    })
  }

  // 处理表单提交
  handleSubmit(e) {

  }

  // input修改
  handleFormChange(e) {

  }

  render() {
    let {todoList, flagTest, nowTodo} = this.state;
    // const renderTodoList = todoList.map((todo, idx) => (<Todo content={todo} key={idx}/>));// 遍历渲染数据
    return (
      <div>
        {/* 修改state数据 */}
        <button onClick={(event) => this.handleChange(event)}>修改todoList</button>
        {/* 遍历数据 */}
        <ul>
          {/*{renderTodoList}*/}
          {todoList.map((todo, idx) => <Todo content={todo} key={idx} idx={idx}/>)}
        </ul>
        {/* 条件渲染 */}
        {flagTest ? (<p>1</p>) : (<p>2</p>)}
        <a href="https://www.baidu.com" onClick={event => this.handleClick(event)}>百度</a>
        <div>
          <input type="text" onChange={e => this.handleInput(e)}/>
          <div>{nowTodo}</div>
        </div>
        <ul>
          {todoList.map((todo, index) => (<Todo content={todo} key={index} index={index}/>))}
        </ul>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" onChange={event => this.handleFormChange(event)}/>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

// 组件渲染
ReactDOM.render(<App/>, document.getElementById('root'));
