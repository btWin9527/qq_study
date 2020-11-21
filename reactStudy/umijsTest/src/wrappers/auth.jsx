import React from 'react';
import {Redirect} from 'umi';
import {getAuthority} from "../utils/authority";

export default (props) => {
  let isLogin = getAuthority();
  if (isLogin) {
    return <div>{props.children}</div>
  } else {
    return <Redirect to="/login"/>
  }
}
