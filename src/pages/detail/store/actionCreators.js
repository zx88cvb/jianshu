import axios from 'axios';
import * as constants from './constants';

const changeDetail = (result) => ({
  type: constants.CHANGE_DETAIL,
  result
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result));
    });
  } 
}