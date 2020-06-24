/* 路由配置文件 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from "../views/login";
import Home from "../views/home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route exact path='/' component={Login}/>
      </Router>
    )
  }
}

export default Routes;
