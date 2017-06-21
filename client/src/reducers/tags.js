import { handleActions } from 'redux-actions';
import {
  getAllTagsSucc,
  selectTag,
  postTagSucc,
  addNewTag,
  changeNewTag,
} from '../actions/tags';

const defaultState = {
  tags: [],
  selected: -1,
  newTagLabel: '',
  inputNewTag: false,
};

export default handleActions({
  [getAllTagsSucc]: (state, action) => ({
    tags: action.payload,
    selected: state.selected,
    newTagLabel: state.newTagLabel,
    inputNewTag: state.inputNewTag,
  }),
  [selectTag]: (state, action) => ({
    tags: state.tags,
    selected: action.payload,
    newTagLabel: state.newTagLabel,
    inputNewTag: state.inputNewTag,
  }),
  [postTagSucc]: (state, action) => {
    const newTags = state.tags;
    newTags.push(action.payload);
    return {
      tags: newTags,
      selected: state.selected,
      newTagLabel: defaultState.newTagLabel,
      inputNewTag: false,
    };
  },
  [addNewTag]: state => ({
    tags: state.tags,
    selected: state.selected,
    newTagLabel: state.newTagLabel,
    inputNewTag: true,
  }),
  [changeNewTag]: (state, action) => ({
    tags: state.tags,
    selected: state.selected,
    newTagLabel: action.payload,
    inputNewTag: state.inputNewTag,
  }),
}, defaultState);
