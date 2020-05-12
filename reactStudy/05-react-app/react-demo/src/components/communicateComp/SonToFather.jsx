/* 子组件向父组件传值 */
import React, {Component} from "react";

class ListItem extends Component {
  static defaultProps = {
    text: '',
    checked: false,
  };

  render() {
    return (
      <li>
        <input
          type="checkbox" checked={this.props.checked}
          onChange={this.props.onChange}/>
        <span>{this.props.value}</span>
      </li>
    );
  }
}

class SonToFather extends Component {
  static defaultProps = {
    list: [{text: '测试222'}, {text: '测试333', checked: true}],
    handleItemChange: () => {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({text: entry.text, checked: entry.checked})),
    };
  }

  onItemChange(entry) {
    const {list} = this.state;
    this.setState({
      list: list.map(preEntry => ({
        text: preEntry.text,
        checked: preEntry.text === entry.text ? !preEntry.checked : preEntry.checked,
      })),
    });
    this.props.handleItemChange(entry);
  }

  render() {
    return (
      <div>
        <h3>子传父</h3>
        <ul>
          {
            this.state.list.map((entry, index) => (
              <ListItem
                key={`list-${index}`}
                value={entry.text}
                checked={entry.checked}
                onChange={this.onItemChange.bind(this, entry)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SonToFather
