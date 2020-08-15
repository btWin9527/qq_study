import React from 'react';
import './ControlButtons.css'
/**
 * @method  按钮控制组件
 * @param activated 是否激活
 * @param onSplit 计次回调
 * @param onPause 暂停回调
 * @param onReset 重置回调
 * @param onStarted 开始回调
 * @returns {JSX.Element}
 * @constructor
 */
function ControlButtons({activated, onSplit, onPause, onReset, onStarted}) {
  if (activated) {
    return (
      <div>
        <button className={'left-btn'} onClick={onSplit}>计次</button>
        <button className={'right-btn'} onClick={onPause}>停止</button>
      </div>
    )
  } else {
    return (
      <div>
        <button className={'left-btn'} onClick={onReset}>重置</button>
        <button className={'right-btn'} onClick={onStarted}>开始</button>
      </div>
    )
  }

}

export default ControlButtons;
