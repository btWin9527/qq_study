import React from 'react';
import ms2Time from "../../utils/ms2Time";

const clockStyle = {
  'font-family': 'monospace' // 等宽字体，解决倒计时抖动
}

const MajorClock = ({milliseconds = 0}) => {
  return (<h1 style={clockStyle}>{ms2Time(milliseconds)}</h1>)
}
export default MajorClock;
