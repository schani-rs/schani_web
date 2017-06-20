import { handleActions } from 'redux-actions';
import { getAllImagesSucc, selectImage, loadImageUri } from '../actions/images';

const defaultState = {
  images: [],
  selected: -1,
  currImageFile: '',
};

export default handleActions({
  [getAllImagesSucc]: (state, action) => ({
    images: action.payload,
    selected: state.selected,
    currImageFile: state.currImageFile,
  }),
  [selectImage]: (state, action) => ({
    images: state.images,
    selected: action.payload,
    currImageFile: state.currImageFile,
  }),
  [loadImageUri]: (state, action) => ({
    images: state.images,
    selected: state.selected,
    currImageFile: action.payload,
  }),
}, defaultState);
