/* 同时发送多个请求*/
// 并行
// promise.all(p1,p2)  -- > 同时进行多个请求，全部请求结束后执行.then的操作
/*
* const [p1,p2] = await promise.all(p1,p2)
*
* promise.race(p1,p2)  -- > 同时执行多个请求，只执行最先结束的第一个请求
* */
class Executor {

  constructor() {
    this.tasks = [];
    this.tasksPromise = [];
  }

  register(name, fn) {
    this.tasks.push(fn);
  }

  execute(...args) {
    let finalCall = args.pop(),
      index = 0,
      done = () => {
        index++;
        if (index == this.tasks.length) {
          finalCall();
        }
      };
    this.tasks.forEach(fn => fn(...args, done));
  }

  registerPromise(name, fn) {
    this.tasksPromise.push(fn);

  }

  executePromise(...args) {
    this.tasksPromise = this.tasksPromise.map(fn => fn(...args));
    return Promise.all(this.tasksPromise);
  }
}

let excutor = new Executor();
excutor.register('TaskA', function (data, cb) {
  setTimeout(() => {
    console.log(data, 'task A....');
    cb();
  }, 1000);
})
excutor.register('TaskB', function (data, cb) {
  setTimeout(() => {
    console.log(data, 'task B....');
    cb();
  }, 1000);
})
excutor.execute('普通异步并行......', function () {
  console.log('普通异步并行 end----');
})
excutor.registerPromise('PromiseA', function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data, 'Promise A....');
      resolve(data);
    }, 3000);
  });

})
excutor.registerPromise('PromiseB', function (data) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data, 'Promise B....');
      resolve(data);
    }, 3000);
  });
})
excutor.executePromise('Promise异步并行......').then(function () {
  console.log('Promise end------');
})

// 串行
