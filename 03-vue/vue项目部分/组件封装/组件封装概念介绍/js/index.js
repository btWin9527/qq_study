window.onload = function () {
    var vm = new Vue({
        components: {
            'my-tr': {
                template: '#myTr'
            },
            'my-slot': {
                template: '#mySlot'
            },
            'my-change1': {
                template: '<h1>{{x}}</h1>',
                data: function () {
                    return {
                        x: Math.random()
                    }
                }
            },
            'my-change2': {
                template: '<h1>{{x}}</h1>',
                data: function () {
                    return {
                        x: Math.random()
                    }
                }
            },
        },
        // 绑定元素
        el: '#app',
        // vue数据
        data: {
            arr1: [
                {state: 0},
                {state: 1},
                {state: 2},
            ],
            /* 多个类名控制数据*/
            trendsData: ['a1', 'a2'],
            /* Tab切换的数据*/
            tabTitle: ['标题1', '标题2', '标题3'],
            tabCont: ['内容1', '内容2', '内容3'],
            currentIdx: 0,
            // 插槽flat
            flag: 'my-tr',
            flag1: 'my-change1'
        },
        // vue过滤器 - 处理文本格式化和状态类的区分
        filters: {
            // 区分状态
            divideState: function (val) {
                // 简化switch功能 -- 0~4 分别代表arr数组内容
                val = Number(val);
                let arr = ['启动', '禁用', '待启用', '待禁用'];
                return arr[val];
            }
        },
        methods: {
            /* 演示事件冒泡函数*/
            showA() {
                console.log('a')
            },
            showB() {
                console.log('b')
            },
            showC() {
                console.log('c')
            }
        }
    })
}
