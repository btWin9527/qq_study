import React, {Component, Fragment} from 'react';

const TabItem = (props) => {
  const {active, onClick} = props;
  const tabStyle = {
    'max-width': '150px',
    color: active ? 'red' : 'green',
    border: active ? '1px red solid' : '0px'
  }
  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  )
}

class Tabs extends Component {
  state = {
    activeIndex: 0
  }

  render() {
    /*
    * React.Children.map
    * 遍历children中索引元素
    * */
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        /*
        * React.cloneElement
        * 复制某个元素, 参数1： 被复制的元素; 参数2： 增加新产生元素的props
        * */
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({activeIndex: index})
        });
      } else {
        return child;
      }
    });

    return (
      <Fragment>
        {newChildren}
      </Fragment>
    )
  }
}

export default () => {
  return (
    <Tabs>
      <TabItem>One</TabItem>
      <TabItem>Two</TabItem>
      <TabItem>Three</TabItem>
    </Tabs>
  )
}
