import { handleActions } from 'redux-actions';
import { getAllTags, updateTags } from '../actions/tags';

const defaultState = { tags: [] };

export default handleActions({
  [getAllTags]: (state, action) => ({
    tags: action.payload,
  }),
  [updateTags]: (state, action) => ({
    tags: action.payload,
  }),
}, defaultState);
