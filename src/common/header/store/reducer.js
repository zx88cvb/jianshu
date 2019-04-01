import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable 对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {

  switch(action.type) {
    case constants.SEARCH_FOCUS :
      // immutable 对象set方法会结合之前immutable对象值和设置值 返回全新的对象
      return state.set('focused', true);
    case constants.SEARCH_BLUR :
      return state.set('focused', false);
    case constants.CHANGE_LIST :
      return state.set('list', action.data);
    default:
      return state;
  }
}
