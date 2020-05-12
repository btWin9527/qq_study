import React, {Component} from "react";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      radioValue: '', // 单选
      coffee: [], // 多选
      area: ['beijing', 'shanghai'], // select多选
    };
  }

  /* 获取单选数据 */
  handleChange(e) {
    console.log(e.target.value, '获取单选数据')
    this.setState({
      radioValue: e.target.value,
    });
  }

  /* 获取多选数据 */
  handleCheckChange(e) {
    const {checked, value} = e.target;
    let {coffee} = this.state;
    if (checked && coffee.indexOf(value) === -1) {
      coffee.push(value);
    } else {
      coffee = coffee.filter(i => i !== value);
    }
    console.log(coffee, 'coffee')
    this.setState({
      coffee,
    })
  }

  /* 获取下拉数据 */
  handleSelectChange(e) {
    const {options} = e.target; // options是一个对象
    const area = Object.keys(options)
      .filter(i => options[i].selected === true)
      .map(i => options[i].value)
    console.log(area,'area')
    this.setState({area,})
  }

  render() {
    const {radioValue, coffee,area} = this.state;
    return (
      <div>
        {/* 单选框 */}
        <div className="item-container">
          <h3>单选框：</h3>
          <p>gender:</p>
          <label>male:
            <input type="radio"
                   value="male"
                   onChange={this.handleChange}
                   checked={radioValue === 'male'}/>
          </label>
          <label>
            female:
            <input type="radio"
                   value="female"
                   checked={radioValue === 'female'}
                   onChange={this.handleChange}
            />
          </label>
        </div>
        {/* 多选框 */}
        <div className="item-container">
          <h3>多选框：</h3>
          <label>
            <input
              type="checkbox"
              value="Cappuccino"
              checked={coffee.indexOf('Cappuccino') !== -1}
              onChange={this.handleCheckChange}
            />
            Cappuccino
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              value="CafeMocha"
              checked={coffee.indexOf('CafeMocha') !== -1}
              onChange={this.handleCheckChange}
            />
            CafeMocha
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              value="CaffeLatte"
              checked={coffee.indexOf('CaffeLatte') !== -1}
              onChange={this.handleCheckChange}
            />
            Caffè Latte
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              value="Machiatto"
              checked={coffee.indexOf('Machiatto') !== -1}
              onChange={this.handleCheckChange}
            />
            Machiatto
          </label>
        </div>

        {/* select组件 */}
        <div className="item-container">
          <h3>select组件</h3>
          <select multiple={true} value={area} onChange={this.handleSelectChange}>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="hangzhou">杭州</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FormComp;
