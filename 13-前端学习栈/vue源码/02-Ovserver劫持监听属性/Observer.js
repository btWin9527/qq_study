/* 监听数据变化 */
class Observer {
  constructor(data) {
    this.observer(data);
  }

  observer(data) {
    // 监听对象变化
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key]);
      })
    }
  }

  defineReactive(obj, key, value) {
    this.observer(value);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        // 订阅数据变化，往dep中添加观察者
        return value;
      },
      set: (newVal) => {
        this.observer(newVal); // 赋值新值时监听新增数据
        if (newVal !== value) {
          value = newVal;
        }
      }
    })
  }
}
