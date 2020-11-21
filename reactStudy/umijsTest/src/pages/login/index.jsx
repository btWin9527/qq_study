import React, {useEffect, useState} from 'react';
import {connect} from 'umi';
import styles from './index.less';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 获取username
  const handleGetUsername = (e) => {
    // setUsername(e.currentTarget.value);
    setUsername('254712332112');
  }

  // 获取password
  const handleGetPassword = (e) => {
    // setPassword(e.currentTarget.value);
    setPassword('0d5f744de238f4823b8e29dec31c7bff');
  }

  // 处理登录提交
  const handleSubmit = () => {
    console.log(username, 'username')
    console.log(password, 'password')
    let values = {
      account: username,
      device: {udid: "254712332112"},
      password,
      platform: 3
    };
    const {dispatch} = props;
    dispatch({
      type: 'login/login',
      payload: {...values},
    });
  }

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      <p>username:{username}</p>
      <p>password:{password}</p>
      <p>isLogin:{JSON.stringify(props.isLogin)}</p>
      <form>
        <div className="formItem">
          <input type="text" onChange={handleGetUsername}/>
        </div>
        <div className="formItem">
          <input type="text" onChange={handleGetPassword}/>
        </div>
        <div className="formItem">
          <button type="button" onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default connect(state => state.login)(Login)
