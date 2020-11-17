import {Reducer, Effect} from 'umi';

export interface StateType {
  status?: 'ok' | 'error',
  type?: string
}

export interface TestModelType {
  namespace: string;
  state: StateType;
  effects: {
    testEffect: Effect;
  };
  reducers: {
    changeTestStatus: Reducer<StateType>;
  }
}

const Model = {
  namespace: 'test',
  state: {
    title: null,
  },

  effects: {
    testEffect({payload}, {call, put}) {

    }
  },

  reducers: {
    changeTestStatus(state: StateType, {payload}) {
      return {
        ...state
      }
    },
  },
};

export default Model;
