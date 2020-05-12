/* 组件通信相关组件 */
import React, {Component} from "react";

// 父子组件传值
/* 子组件 */
function ListItem({value}) {
  return (
    <li>
      <span>{value}</span>
    </li>
  );
}

function ListTitle({title}) {
  return (
    <h2>{title}</h2>
  );
}


/* 父组件 */
function List({list, title}) {
  return (
    <div>
      <ListTitle title={title}/>
      <ul>
        {
          list.map((entry, index) => (
            <ListItem key={`list=${index}`} value={entry.text}/>
          ))
        }
      </ul>
    </div>
  );
}

class FatherToSon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{id: 1, text: '测试1'}, {id: 2, text: '测试2'}],
      title: '父子组件传值'
    };
  }

  render() {
    const {list, title} = this.state;
    return (<List list={list} title={title}/>)
  }
}

export default FatherToSon;
