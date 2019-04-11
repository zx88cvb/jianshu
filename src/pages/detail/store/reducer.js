import * as constants from './constants'
import { fromJS } from 'immutable';

// immutable 对象
const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.result.title,
        content: action.result.content
      })
    default:
      return state;
  }
}
