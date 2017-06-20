import { handleActions } from 'redux-actions';
import { getAllTagsSucc, selectTag } from '../actions/tags';

const defaultState = { tags: [], selected: -1 };

export default handleActions({
  [getAllTagsSucc]: (state, action) => ({
    tags: action.payload,
    selected: state.selected,
  }),
  [selectTag]: (state, action) => ({
    tags: state.tags,
    selected: action.payload,
  }),
}, defaultState);
