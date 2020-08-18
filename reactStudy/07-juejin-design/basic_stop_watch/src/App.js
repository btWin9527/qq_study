import React from 'react';
import './App.css';
import StopWatch from "./StopWatch";
import HocDemo from "./HocDemo";
import Tabs from "./Tabs"

function App() {
  return (
    <div className="App">
      {/* 简化版计时组件 */}
      {/*<StopWatch/>*/}
      {/*<HocDemo/>*/}
      <Tabs/>
    </div>
  );
}

export default App;
