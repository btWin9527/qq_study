const getJSON = function(url,type, data) {
  const promise = new Promise(function(resolve, reject){ 
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      };
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open(type, url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    if(type =='get'){
    	client.send();
    }else {
    	client.setRequestHeader("Content-Type", "application/json");
    	client.send(JSON.stringify(data));
    }
  });
  return promise;
};

$(function() {
	//添加数据
	$(".submit").click(() => {
		console.log('111');
		let _name = $(".name").val(),
			_message = $(".message").val();
		if(_name =='' || _message =='') {
			alert('请输入信息！');
			return false;
		} 
		$(".name,.message").val("");
		add(_name,_message); 
	});
	//查询
	$(".viewMes").click(() => {
		listShow();
	});
	let add = (name, message) => {
		//链式写法  原生 串行
        getJSON("http:localhost:3000/map/add1","get")
        .then(function(res){
            console.log(res);
						return getJSON("http:localhost:3000/add",'post', {id:res.result.id,name: '123', message: '123'})
        })
        .then(function(res){
					console.log(res)
        },function(){

        })
	};
})