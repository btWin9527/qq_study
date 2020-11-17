import React from 'react';
import styles from './index.less';
import {history} from 'umi';

export default () => {

  const jumpLogin = () => {
    history.push({
      pathname: '/login',
      query: {
        a: 'b'
      }
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={jumpLogin}>跳转到login</button>
    </div>
  );
}
