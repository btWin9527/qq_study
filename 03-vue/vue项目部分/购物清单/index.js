window.onload=function(){
    //创建一个vue实例
    new Vue({
        el: "#root", //element
        data: {
            name: 'jack',
            text: '',
            age: 20,
            obj: {name:'xxx'},
            lists:[],
            count:0,
            length: 0, //总记录
            pagenum: 0, //总页数
            curpage: 1,  //当前页从1开始
        },
        mounted(){
            this.queryList();
        },
        methods:{
            add:function(text){
                if (text) {
                    // this.lists.unshift({name:name, state:false});
                    // this.text = '';
                    // this.countList();
                    axios({
                        method:'post',
                        url:"http://localhost:3000/list/add",
                        data:{
                            name: text
                        }
                    }).then(response=>{
                        console.log(response);
                        if (response.data.code == '200'){
                            this.queryList(this.curpage);
                            this.text="";
                        }
                    })
                }
            },
            //计算未采购数量
            countList(state, index){
                /*this.count = 0;
                this.lists.forEach((el, index)=>{
                    if (el.state === '0') {
                        this.count++;
                    }
                })*/
                //this.count = this.lists.filter(item => !item.state).length;
                axios({
                    method:'put',
                    url:"http://localhost:3000/list/checkbox",
                    data:{
                        index: index,
                        state: state,
                        cur: this.curpage
                    }
                }).then(response=>{
                    if (response.data.code == '200') {
                        this.queryList(this.curpage);
                    }
                })
            },
            del(index){
                // this.lists.splice(index, 1);
                // this.countList();
                axios({
                    method:'delete',
                    url:"http://localhost:3000/list/del",
                    data:{
                        index: index,
                        cur: this.curpage
                    }
                }).then(response=>{
                    if (response.data.code == '200') {
                        this.queryList(this.curpage);
                    }
                })
            },
            queryList(cur){
                this.curpage = cur || this.curpage;
                axios({
                    method:'post',
                    url:"http://localhost:3000/list/query",
                    data:{
                        cur: this.curpage
                    }
                }).then((response)=>{
                    console.log(response);
                    if (response.data.code == '200') {
                        this.lists = response.data.arr;
                        this.pagenum = response.data.total;
                        this.length = response.data.length;
                        this.count = this.lists.filter(item => !item.state).length;
                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        filters: {
            stateFilter: function(type){
                switch(type) {
                    case false:
                        return '未采购';
                    case true:
                        return '已采购';
                    default:
                        return '';
                }
            }
        }
    })
}
