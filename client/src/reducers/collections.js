import { handleActions } from 'redux-actions';
import {
  getAllCollectionsSucc,
  getImagesForCollectionSucc,
  addImageToColSucc,
  addNewColSucc,
  selectCollection,
  modeNewCollection,
  changeNewCollectionName,
  changeNewCollectionDesc,
} from '../actions/collections';

const defaultState = {
  collections: [],
  selected: -1,
  currImages: [],
  modeNewCollection: false,
  inputNewName: '',
  inputNewDescription: '',
};

export default handleActions({
  [getAllCollectionsSucc]: (state, action) => (Object.assign({}, state, {
    collections: action.payload,
  })),
  [getImagesForCollectionSucc]: (state, action) => (Object.assign({}, state, {
    currImages: action.payload,
  })),
  [addImageToColSucc]: (state, action) => (Object.assign({}, state, {
    currImage: [...state.currImages, action.payload],
  })),
  [addNewColSucc]: (state, action) => (Object.assign({}, state, {
    collections: [...state.collections, action.payload],
    modeNewCollection: false,
  })),
  [selectCollection]: (state, action) => (Object.assign({}, state, {
    selected: action.payload,
  })),
  [modeNewCollection]: state => (Object.assign({}, state, {
    modeNewCollection: true,
  })),
  [changeNewCollectionName]: (state, action) => (Object.assign({}, state, {
    inputNewName: action.payload,
  })),
  [changeNewCollectionDesc]: (state, action) => (Object.assign({}, state, {
    inputNewDescription: action.payload,
  })),
}, defaultState);
