import React, {useState, useRef, useEffect, useContext} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Card, Alert, Button} from 'antd';
import {query as queryUsers} from '@/services/user';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light);
const ThemedButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p>前景色：{theme.foreground}</p>
      <p>背景色：{theme.background}</p>
      <button
        type="button"
        style={{background: theme.background, color: theme.foreground}}>
        I am styled by theme context!
      </button>
    </>
  )
}

const Toolbar: React.FC<{}> = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemedButton/>
    </ThemeContext.Provider>
  )
}

const HooksStudy: React.FC<{}> = () => {

  // 1. useState
  const [count, setCount] = useState(0);

  const useStateRender = () => {
    return (
      <Card>
        <Alert
          message="useState"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <>
          <p> Count: {count}</p>
          <Button onClick={() => setCount(0)}>Reset</Button>
          <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
          <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
        </>
      </Card>
    )
  }

  // 2. useEffect
  // 场景1：依赖了某些值，但不希望在初始化就执行回调方法，要让依赖改变再去执行回调方法
  const firstLoad = useRef(true); // 首次加载页面
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    // 进行其它操作
    // eslint-disable-next-line no-console
    console.log('回调触发修改', count);
  }, [count]);
  // 场景2：有1个getData的异步请求，要让其在初始化调用且点击某个按钮也可以调用
  const [detail, setDetail] = useState(null);
  const getData = async () => {
    const data = await queryUsers();
    setDetail(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const useEffectRender = () => {
    return (
      <Card>
        <Alert
          message="useEffect"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <>
          <p>{JSON.stringify(detail)}</p>
          <Button onClick={() => getData()}>发送请求</Button>
        </>
      </Card>
    )
  }

  // 3. useContext
  const useContextRender = () => {
    return (
      <Card>
        <Alert
          message="useContext"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Toolbar/>
      </Card>
    )
  }

  // 4. useCallback (缓存函数)
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
  return (
    <PageContainer>
      {/* useState demo */}
      {useStateRender()}
      {/* useEffect demo */}
      {useEffectRender()}
      {/* useContext demo */}
      {useContextRender()}

    </PageContainer>
  );
};

export default HooksStudy;
