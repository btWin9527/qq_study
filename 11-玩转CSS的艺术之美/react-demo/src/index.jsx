import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";

function App() {
	return (
		<div className="index-page flex-ct-y">
			<h1>
				<span className="gradient">bruce-cli</span>
				<img src={ImgLogo} />
			</h1>
			<p>How to configure this <strong className="react">React</strong> project</p>
			<p>Check out the `<a href="https://github.com/JowayYoung/bruce-cli" className="gradient">bruce-cli docs</a>`</p>
		</div>
	);
}

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line
hot(App);
ReactDom.render(<App />, document.getElementById("root"));