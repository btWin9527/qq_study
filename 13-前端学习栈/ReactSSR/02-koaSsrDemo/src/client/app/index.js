// 浏览器端页面结构渲染入口
import React from 'react';
import ReactDom from 'react-dom';
import Index from '../pages/index';

// 渲染index组件
ReactDom.hydrate(<Index/>, document.getElementById('root'));
