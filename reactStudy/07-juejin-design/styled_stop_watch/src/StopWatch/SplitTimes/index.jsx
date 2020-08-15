import React from 'react';
import MajorClock from "../MajorClock";
/* 计次组件l */
function SplitTimes({splits = []}) {
  return (
    <div>
      {splits.map((val, key) => <MajorClock key={key} milliseconds={val}/>)}
    </div>
  )
}

export default SplitTimes;
