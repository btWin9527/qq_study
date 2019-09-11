// 代理设计模式

var girl = function (name) {
    this.name = name;
}
var boy = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        console.log('给' + girl.name + ',送一个礼物' + gift);
    }
}

// 代理对象
var proxy = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        // 男同学把礼物给代理对象
        (new boy(girl)).sendGift(gift);
    }
}

var proxyObj = new proxy(new girl('tom'));
proxyObj.sendGift('money');


// 工厂模式
var MobileFactory = (function () {
    var Mobile = function (name, model) {// 手机对象
        this.name = name;
        this.model = model;
    };
    Mobile.prototype.play = function () {// 手机播放音乐
        console.log('Mobile:' + this.name + '-' + this.model);
    };
    return function (name, model) {// 返回一个生产车间
        return new Mobile(name, model);// 返回手机对象
    }
})();
var p6 = new MobileFactory('ipone', '6');
var p7 = new MobileFactory('ipone', 'x');
p6.play();

// 只有一个实例对象
// 场景：回收站 vue状态管理器
class Store {
    action() {
        console.log('vuex store');
    }
}

Store.getInstance = (function () {
    var instance;// 定义一个变量
    return function () {
        if (!instance) {// 若没有实例化则new
            instance = new Store();// 实例化
        }
        return instance;// 已实例化则返回该实例
    }
})();
var obj1 = Store.getInstance();// 第一次创建一个
var obj2 = Store.getInstance();// 第二次就会直接返回第一个创建的对象
console.log(obj1 === obj2);
