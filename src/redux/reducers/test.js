import { handleActions } from 'redux-actions';
import ACTIONS from 'redux/constants/actionConstants.js';

const defaultState = {
  data: []
};

export default handleActions({
  [ACTIONS.TEST]: (state) => ({ ...state })

}, defaultState);
