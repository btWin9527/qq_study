// Fragment -- 代替 div作为外层，类似template
import React, {Fragment} from 'react';
import MajorClock from "./MajorClock/MajorClock";
import ControlButtons from "./ControlButtons/ControlButtons";
import SplitTimes from "./SplitTimes/SplitTimes";

/* 计时组件 */

class StopWatch extends React.Component {
  /*
  * state数据分析：
  * isStarted  是否开始计时
  * startTime  计时开始时间, Date对象
  * currentTime  当前时间，Date对象
  * splits  所有计次时间的数组，每个元素是一个毫秒数
  * */
  /* constructor() {
     super(...arguments);
     this.state = {
       isStarted: false,
       startTime: null,
       currentTime: null,
       splits: [],
     };
     this.onSplit = this.onSplit.bind(this);
   }*/
  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: [],
    a: 1
  }

  /* 开始 */
  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date(),
    });

    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000 / 60);
  }

  /* 暂停 */
  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  }
  /* 复位 */
  onReset = () => {
    this.setState({
      startTime: 0,
      currentTime: 0,
      splits: [],
    });
  }

  /* 计数 */
  onSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
    });
  }

  render() {
    return (
      <Fragment>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime}/>
        {/* TODO:内联函数尽量少使用，后期优化为成员函数 */}
        <ControlButtons
          activated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
        />
        <SplitTimes value={this.state.splits}/>
      </Fragment>
    );
  }
}

export default StopWatch;
