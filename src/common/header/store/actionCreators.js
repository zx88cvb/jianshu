import * as constants from './constants'
import { fromJS } from 'immutable';
import axios from 'axios'

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json?_='+ new Date()).then((res) => {
      const data = res.data;
      if (data.success) {
        const action = changeList(data.data);
        dispatch(action);
      }
    }).catch(() => {
      console.log('error');
    })
  }
}
