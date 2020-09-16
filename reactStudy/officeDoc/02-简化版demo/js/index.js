const productsList = [ // 模拟接口返回数据
  {id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
const {Fragment, Component} = React;

/*
* FilterableProductTable
* @description 实例应用的整体
*  */
class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '', // 搜索输入框内容
      inStockOnly: false, // 是否选中存货筛选条件
      productsList: [], // 产品数据
    }
  }

  // 输入框修改产品
  changeProduct = (e) => {
    let value = e.target.value;
    let newProductsList = productsList.filter(item => item.name.includes(value));
    let groupCategory = this.filterByTypes(newProductsList, 'category');
    this.setState({
      filterText: e.target.value,
      productsList: groupCategory
    })
  }
  // 切换是否选择存货
  changeSelectStock = (e) => {
    let value = e.target.checked;
    let newProductsList;
    if (value) {
      newProductsList = productsList.filter(item => item.stocked === value);
    } else {
      newProductsList = productsList;
    }

    let groupCategory = this.filterByTypes(newProductsList, 'category');
    this.setState({
      inStockOnly: e.target.checked,
      productsList: groupCategory
    })
  }

  // 数据分组
  filterByTypes(arr, key) {
    if (!arr || !Array.isArray(arr)) return null;
    let tempObj = {};
    arr.forEach((item) => {
      let value = item[key];
      tempObj[value] = tempObj[value] || [];
      tempObj[value].push(item);
    });
    return tempObj;
  }

  componentDidMount() {
    // 数据分组
    let groupCategory = this.filterByTypes(productsList, 'category');
    this.setState({
      productsList: groupCategory
    });
  }

  render() {
    let {filterText, inStockOnly, productsList} = this.state;
    return (
      <Fragment>
        {/*FilterableProductTable*/}
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          changeSelectStock={this.changeSelectStock}
          changeProduct={this.changeProduct}/>
        <ProductTable productsList={productsList}/>
      </Fragment>
    )
  }
}

/*
* SearchBar
* @description 接受所有的用户输入
* */

function SearchBar({changeProduct, changeSelectStock, filterText, inStockOnly}) {
  return (
    <Fragment>
      <div>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => changeProduct(e)}/>
      </div>
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => changeSelectStock(e)}/>
        <span>Only show products in stock</span>
      </label>
    </Fragment>
  )
}

/*
* ProductTable
* @description  展示数据内容并根据用户输入筛选结果
*  */
function ProductTable({productsList}) {
  return (
    <Fragment>
      {/*ProductTable*/}
      {
        Object.keys(productsList).map(key => {
          return (
            <Fragment key={key}>
              <ProductCategoryRow category={key}/>
              {productsList[key].map(item => <ProductRow key={item.id} price={item.price} name={item.name}/>)}
            </Fragment>
          )
        })
      }
    </Fragment>
  )
}

/*
* ProductCategoryRow
* @description  产品类别展示标题
*  */
function ProductCategoryRow({category}) {
  return (<h4>{category}</h4>)
}

/*
* ProductRow
* @description  每一行展示的产品信息
* */
function ProductRow({price, name}) {
  return (
    <div>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  )
}

ReactDOM.render(<FilterableProductTable/>, document.getElementById('root'));
