"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("../pages/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 浏览器端页面结构渲染入口
// 渲染index组件
_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_index.default, null), document.getElementById('root'));