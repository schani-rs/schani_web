import { createAction } from 'redux-actions';
import { getAll } from '../sources/tags_source';

export const getAllTagsStart = createAction('GET_ALL_TAGS_START');
export const getAllTagsSucc = createAction('GET_ALL_TAGS_SUCC');
export const getAllTagsErr = createAction('GET_ALL_TAGS_ERR');

export const selectTag = createAction('SELECT_TAG');
export const updateTag = createAction('UPDATE_TAG');


export const getAllTags = () =>
  (dispatch) => {
    dispatch(getAllTagsStart);
    getAll()
    .then((tags) => {
      dispatch(getAllTagsSucc(tags));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(getAllTagsErr(new Error(err)));
      return Promise.resolve();
    });
  };
