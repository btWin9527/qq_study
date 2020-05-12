import React from 'react';
import {FormComp, FatherToSon,SonToFather} from "./components";

// import './App.css';

function App() {
  return (
    <div className="App">
      {/* 表单组件 */}
      <FormComp/>
      {/* 父子传值 */}
      <FatherToSon/>
      {/* 字传父 */}
      <SonToFather/>
    </div>
  );
}

export default App;
