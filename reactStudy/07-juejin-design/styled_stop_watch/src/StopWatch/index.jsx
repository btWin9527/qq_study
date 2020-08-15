import React, {Component, Fragment} from 'react';
import MajorClock from "./MajorClock";
import ControlButtons from "./ControlButtons";
import SplitTimes from "./SplitTimes";

/* 秒表组件 */
class stopWatch extends Component {


  state = {
    activated: false,
    startTime: null,
    currentTime: null,
    splits: []
  }

  /* Started */
  onStarted = () => {
    this.setState({
      activated: true,
      currentTime: new Date()
    })
    if (!this.state.startTime) { // 解决点start时间重置bug
      this.setState({
        startTime: new Date(),
      })
    }
    this.intervalTimer = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })

    }, 1000 / 60)
  }
  /* Pause */
  onPause = () => {
    clearInterval(this.intervalTimer);
    this.setState({
      activated: false,
    })
  }
  /* Reset */
  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    })
  }
  /* Split */
  onSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
    })
  }

  render() {
    let {activated, startTime, currentTime, splits} = this.state;
    return (<Fragment>
      <style jsx>{`
        h1 {
          color: green;
        }
     `}</style>
      <h1>秒表</h1>
      <MajorClock milliseconds={currentTime - startTime} activated={activated}/>
      <ControlButtons
        activated={activated}
        onPause={this.onPause}
        onStarted={this.onStarted}
        onReset={this.onReset}
        onSplit={this.onSplit}
      />
      <SplitTimes splits={splits}/>
    </Fragment>)
  }
}

export default stopWatch;
