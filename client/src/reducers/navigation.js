import { handleActions } from 'redux-actions';
import { selectNavigation } from '../actions/navigation';

const defaultState = { currNav: 'images' };

export default handleActions({
  [selectNavigation]: (state, action) => ({
    currNav: action.payload,
  }),
}, defaultState);
