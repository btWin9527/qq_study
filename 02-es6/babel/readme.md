# babel的使用

## 1. babel的介绍

## 1.1 JSX与React

```shell script
    npm install --save-dev @babel/preset-react
```
```jsx harmony
export default React.createClass({
  getInitialState() {
    return { num: this.getRandomNumber() };
  },

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render() {
    return <div>
      Your dice roll:
      {this.state.num}
    </div>;
  }
});
```

## 1.2 类型注释（flow和TypeScript）

>  Babel 不做类型检查，仍然需要安装 Flow 或 TypeScript 来执行类型检查的工作。

### 1.3 flow preset

```shell script
npm install --save-dev @babel/preset-flow
```

```js
// @flow
function square(n: number): number {
  return n * n;
}
```

### 1.4 typescript preset

```shell script
npm install --save-dev @babel/preset-typescript
```

```js
function Greeter(greeting: string) {
    this.greeting = greeting;
}
```

## 2. babel的使用

> 新语法的转换和缺失特性的修补

```shell script
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

> 在项目的根目录下创建一个命名为 babel.config.js 的配置文件

```js
/*
env preset 提供了一个 "useBuiltIns" 参数，当此参数设置为 "usage" 时，就会加载上面所提到的最后一个优化措施，也就是只包含你所需要的 polyfill
*/
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

```shell script
// 将src目录下的所有代码编译到 lib 目录
npx src --out-dir lib
```

