import { handleActions } from 'redux-actions';
import {
  getAllImagesSucc,
  selectImage,
  loadImageUri,
  getAllTagsOfImagesStart,
  getAllTagsOfImagesSucc,
} from '../actions/images';

const defaultState = {
  images: [],
  selected: -1,
  currImageFile: '',
  currTags: [],
};

export default handleActions({
  [getAllImagesSucc]: (state, action) => ({
    images: action.payload,
    selected: state.selected,
    currImageFile: state.currImageFile,
    currTags: state.currTags,
  }),
  [selectImage]: (state, action) => ({
    images: state.images,
    selected: action.payload,
    currImageFile: state.currImageFile,
    currTags: state.currTags,
  }),
  [loadImageUri]: (state, action) => ({
    images: state.images,
    selected: state.selected,
    currImageFile: action.payload,
    currTags: state.currTags,
  }),
  [getAllTagsOfImagesStart]: state => ({
    images: state.images,
    selected: state.selected,
    currImageFile: state.currImageFile,
    currTags: [],
  }),
  [getAllTagsOfImagesSucc]: (state, action) => ({
    images: state.images,
    selected: state.selected,
    currImageFile: state.currImageFile,
    currTags: action.payload,
  }),
}, defaultState);
