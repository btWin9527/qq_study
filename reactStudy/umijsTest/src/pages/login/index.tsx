import React, {useEffect} from 'react';
import styles from './index.less';

export default () => {

  useEffect(() => {
    console.log('执行一次')
  },[])

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
    </div>
  );
}
