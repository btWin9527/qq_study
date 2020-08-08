var connect = require('connect');  //创建连接
var bodyParser = require('body-parser');   //body解析
var serveStatic = require('serve-static');   //目录访问（静态文件访问）
var arr=[
	{name:'手机0',state:false},
	{name:'手机1',state:false},
	{name:'电脑2',state:false},
	{name:'平板3',state:true},
	{name:'包包4',state:false},
	{name:'衣服5',state:false},
	{name:'玩具6',state:true},	 
];
var size = 10;//一页10条数据
var app = connect()
    .use(bodyParser.json())   //JSON解析
    .use(bodyParser.urlencoded({extended: true}))
    .use(serveStatic(__dirname))
	//use()方法还有一个可选的路径字符串，对传入请求的URL的开始匹配。
	//use方法来维护一个中间件队列
	.use(function (req, res, next) {
		//跨域处理
		// Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');  //允许任何源
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');  //允许任何方法
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
		res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});    //utf-8转码
		next();  //next 方法就是一个递归调用
	})
	.use('/list/query', function(req, res, next) {
		var data = {"code":200,"msg":"success"};
		var i = req.body.cur -1; //转化页数索引
		
		var length = arr.length;
		var total = Math.ceil(length/size);
		var arr2 =arr.slice(i*10,i*10+10);
		data.arr =arr2;
		data.length = length;
		data.total = total;
		data.num = arr.filter(function(item){
			return item.state;
		}).length;
        res.end(JSON.stringify(data));
		next();
	})
	.use('/list/add', function(req, res, next) {
		var data = {"code":200,"msg":"success"};
		if(req.method=='POST'){
			var obj = {};
			obj.name = req.body.name;
			obj.state = false;
			console.log(obj);
			arr.push(obj)
		}
		
        res.end(JSON.stringify(data));
		next();
	})
	.use('/list/del', function(req, res, next) {
		var data = {"code":200,"msg":"success"};
		if(req.method=="DELETE"){
			var index  = req.body.index ;
			var cur  = req.body.cur ;
			console.log(index,cur);
			index = (cur-1)* size + index;
			console.log(index , cur );
			arr.splice(index,1);
			console.log(arr);
		}
		
        res.end(JSON.stringify(data));
		next();
	})
	.use('/list/checkbox', function(req, res, next) {
		var data = {"code":200,"msg":"success"};
		if(req.method=="PUT"){
			var index  = req.body.index ;
			var cur  = req.body.cur ;
			var state = req.body.state;
			index = (cur-1)* size + index;
			arr[index].state=state;
			console.log(arr);
		}
		
        res.end(JSON.stringify(data));
		next();
	})
    .listen(3000);
console.log('Server started on port 3000.');