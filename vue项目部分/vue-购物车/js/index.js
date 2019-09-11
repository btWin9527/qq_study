const shoppingCar = new Vue({
    el: '#shoppingCar',
    data: {
        /* 搜索内容*/
        searchVal: '',
        /* 表格商品内容*/
        shopData: [],
    },
    computed: {
        /**
         * 单件商品总金额计算
         * @description 计算属性不支持传参，但可以使用闭包方式传递参数
         * @returns {Function}
         * @param   {Object}  val   单个商品对象
         */
        oneShopMoney:function(){
          return function (val) {
              return val.count * val.price;
          }
        },
        /* 所有商品总金额计算*/
        totalShopMoney: function () {
            let sum = 0;
            this.filterTableData.forEach((v, i) => {
                sum += v.price * v.count;
            });
            return sum;
        },
        /* 所有商品总件数*/
        totalShopNum: function () {
            let sum = 0;
            /* 添加过滤条件后，此时的商品数据应该为this.filterTableData*/
            this.filterTableData.forEach((v, i) => {
                // v.count转为number类型
                let count = Number(v.count);
                sum += count;
            });
            return sum;
        },
        /**
         * 动态筛选表格数据
         * 1. 获取筛选内容   this.searchVal
         * 2. 筛选条件      v.name.indexOf(searchVal) !== -1
         * 3. 替换原有数据
         */
        filterTableData: function () {
            // 获取搜索信息
            const searchVal = this.searchVal.trim();
            // return this.shopData;
            return this.shopData.filter((v, i) => {
                return v.name.indexOf(searchVal) !== -1;
            });
        },

    },
    filters: {
        /**
         * 格式化商品价格
         * @param val   需要格式化的文本
         * @param num   需要保留的位数(默认保留0)
         */
        filterPrice: function (val, num = 0) {
            // 将val转为Number类型
            val = Number(val);
            return "￥" + val.toFixed(num);
        }
    },
    methods: {
        // 初始化表格数据
        setTableData() {
            /* 模拟接口获取表格数据*/
            this.shopData = [{id: 1, name: '苹果', count: '4', price: '10'},
                {id: 2, name: '桃子', count: '5', price: '13'},
                {id: 3, name: '杏子', count: '2', price: '11'}];
        }
    },
    created() {
        this.setTableData();
    }

});
