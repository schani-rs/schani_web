import { handleActions } from 'redux-actions';
import { getAllImagesSucc, selectImage } from '../actions/images';

const defaultState = {
  images: [],
  selected: -1,
};

export default handleActions({
  [getAllImagesSucc]: (state, action) => ({
    images: action.payload,
    selected: state.selected,
  }),
  [selectImage]: (state, action) => ({
    images: state.images,
    selected: action.payload,
  }),
}, defaultState);
