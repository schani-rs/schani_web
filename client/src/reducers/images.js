import { handleActions } from 'redux-actions';
import { getAllImages, selectImage } from '../actions/images';

const defaultState = {
  images: [],
  selected: -1,
};

export default handleActions({
  [getAllImages]: (state, action) => ({
    images: action.payload,
    selected: state.selected,
  }),
  [selectImage]: (state, action) => ({
    images: state.images,
    selected: action.payload,
  }),
}, defaultState);
