import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable 对象
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable 对象set方法会结合之前immutable对象值和设置值 返回全新的对象
    return state.set('focused', true);
  }

  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  
  return state;
}
