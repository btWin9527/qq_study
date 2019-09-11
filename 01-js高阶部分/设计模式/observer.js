// 观察者 --- 发布订阅--场景：点餐

// 主体对象
/*class Subject { // 定义一个对象
    constructor() { // 构造器 -- 可以实例一个对象
        this.subs = []; // 存储观察者
    }

    addSub(sub) { // 添加观察者
        this.subs.push(sub);
    }

    notify(food) { // 通知观察者
        this.subs.forEach((sub) => {
            sub.update(food);   // 通知观察者
        })
    }
}

// 观察者 --- 订餐的人
class Observer {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }

    update(food) { // 取餐 吃饭
        if (food === this.food) {// 观察者自己判断是否需要取餐
            console.log(this.name + '的外卖' + food);
        }
    }
}

var subject = new Subject(); // new一个对象会自动调用其构造器
var tom = new Observer('tom', '吃的');
var jack = new Observer('jack', '喝的');
// 将观察者添加到观察列表
subject.addSub(tom);
subject.addSub(jack);
// 通知观察者
subject.notify('吃的');
subject.notify('喝的');*/


// 另一种
var pubsub = (() => {// 自执行函数
    var topics = {};// 主体 -- 被观察者 -- 薯条(键值对，键--观察者--topic ,值--fn--取餐)

    function subscribe(topic, fn) {// 订阅
        if (!topics[topic]) topics[topic] = [];// 判断是否存在相同主题，若没有，给一个空数组
        topics[topic].push(fn); // 将观察者及会带哦函数保存
    }

    function publish(topic, ...args) {// 发布
        for (let fn of topics[topic]) {// 遍历所有的观察者
            fn(...args); // 执行观察者函数
        }
    }

    return {
        subscribe,
        publish
    }
})();
var Person = function (_name, _food) {
    var name = _name;
    var food = _food;
    return function (f) {// fn 取餐方法
        if (food === f) {
            console.log(name + '的外卖' + food);
        }
    }
}
// topic -- 事件 观察者
pubsub.subscribe('food', Person('jack', '地三鲜'));// 第2个后面都是 ...args
pubsub.subscribe('food', Person('tom', '红烧肉'));
// 通知
pubsub.publish('food', '地三鲜');
pubsub.publish('food', '红烧肉');
