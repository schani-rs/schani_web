import { createAction } from 'redux-actions';
import { getAll, postNew } from '../sources/tags_source';

export const getAllTagsStart = createAction('GET_ALL_TAGS_START');
export const getAllTagsSucc = createAction('GET_ALL_TAGS_SUCC');
export const getAllTagsErr = createAction('GET_ALL_TAGS_ERR');

export const postTagStart = createAction('POST_TAG_START');
export const postTagSucc = createAction('POST_TAG_SUCC');
export const postTagErr = createAction('POST_TAG_ERR');

export const addNewTag = createAction('ADD_NEW_TAG');
export const selectTag = createAction('SELECT_TAG');
export const updateTag = createAction('UPDATE_TAG');
export const changeNewTag = createAction('CHANGE_NEW_TAG');


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

export const postTag = label =>
  (dispatch) => {
    dispatch(postTagStart);
    postNew(label)
    .then((tags) => {
      dispatch(postTagSucc(tags));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(postTagErr(new Error(err)));
      return Promise.resolve();
    });
  };
