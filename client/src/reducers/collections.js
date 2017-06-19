import { handleActions } from 'redux-actions';
import { getAllCollections, updateCollection } from '../actions/collections';

const defaultState = { collections: [] };

export default handleActions({
  [getAllCollections]: (state, action) => ({
    collections: action.payload,
  }),
  [updateCollection]: (state, action) => ({
    collections: action.payload,
  }),
}, defaultState);
