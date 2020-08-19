import {createStore} from 'redux';

const countReducer = (state = 0, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD':
      return state + payload;
    case 'MINUS':
      return state - payload;
    default:
      return state;
  }
}

const store = createStore(countReducer)
export default store;
