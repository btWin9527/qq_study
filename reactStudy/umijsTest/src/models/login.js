import {login} from "@/services/login";
import {setAuthority} from '@/utils/authority';

export default {
  namespace: 'login', // 命名空间
  state: {
    isLogin: false
  },
  reducers: {
    changeLoginStatus(state, {payload}) {
      return {
        ...state,
        isLogin: payload
      }
    }
  },
  effects: {
    * login({payload}, {put, call}) {
      // 调用
      const response = yield call(login, payload);
      let isLogin = response && response.result === 1;
      if (isLogin) {
        let authorityInfo = {
          ...response,
          isLogin
        }
        setAuthority(authorityInfo);
      }
      yield put({
        type: 'changeLoginStatus',
        payload: isLogin
      });
    }
  }
}
