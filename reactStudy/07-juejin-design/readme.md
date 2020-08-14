# 掘金react学习记录

## 1. react组件设计原则

1. 保持接口小，props数量要少;
2. 根据数据边界来划分组件，充分利用组合(composition);
3. 把state往上层组件提取，让下层组件只需要实现为纯函数。

## 2. stopWatch组件封装

> 需求：实现手机上秒表功能

### 2.1 需求分析

1. 数字时钟计时
2. 控制开始计时和暂停计时
3. 点击按钮计次功能

### 2.2 组件划分

> 假设设计的组件为无状态组件, 简化组件复杂度

**组件嵌套关系设计**

+ stopWatch     (计时组件)
    + MajorClock (时钟组件)
    + ControlButtons (控制按钮组件)
    + SplitTimes (返回所有计次时间组件)

**按照数据边界分割组件**

> 分析数据流，确定数据传递影响流程

1. 渲染MajorClock组件, **需要数据**: 当前时间 ; **交互**: 点击启动，当前时间按秒自增；
2. 渲染ControlButtons组件,  **需要数据**: 激活状态 ; **交互**: 点击启动后可以进行暂停和计次操作；
3. 渲染SplitTimes, **需要数据**: 存储多个时间段的数据和当前时间 ; **交互**: 点击计次后，会记录1次当前时间，可多次记录；

**state的位置**

> 尽量把数据状态往上层组件提取，需要的数据有当前时间,激活状态,计次时间数组可都由stopWatch组件提供，然后通过props传递给各个需要的子组件,子组件只负责ui展示

**组件props设计**

> 确定数据传递方式

1. MajorClock组件

```js
/* MajorClock只依赖于当前时间，则只需要一个props */
const MajorClock = ({milliseconds})=>{
  // TODO: 返回数字时钟的jsx
};
MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
}
```

2. ControlButtons组件

```js
/* ControlButtons只有是负责按钮操作，按钮类型分为启动(start),停止(pause)计次(split),复位(reset)
   则该子组件需要传递的有五个 activated, onStart,onPause,onSplit,onRest (1个状态值和4个函数回调)
 */
const ControlButtons = (props)=>{
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRquired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRquired
};
```

3. SplitTimes组件

```js
/*
 SplitTimes组件接受一个数组类型的props，用于记录计次时间
*/
const SplitTimes = (props)=>{
  // TODO: 返回所有计次时间的jsx
}
SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number)
}
```
