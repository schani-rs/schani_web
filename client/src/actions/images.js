import { createAction } from 'redux-actions';
import { getAll, getImageUri } from '../sources/images_source';

export const getAllImagesStart = createAction('GET_ALL_IMAGES_START');
export const getAllImagesSucc = createAction('GET_ALL_IMAGES_SUCC');
export const getAllImagesErr = createAction('GET_ALL_IMAGES_ERR');

export const selectImage = createAction('SELECT_IMAGE');
export const updateImage = createAction('UPDATE_IMAGE');

export const loadImageUri = createAction('LOAD_IMAGE_URI', id => getImageUri(id));

export const getAllImages = () =>
  (dispatch) => {
    dispatch(getAllImagesStart);
    getAll()
    .then((images) => {
      dispatch(getAllImagesSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(getAllImagesErr(new Error(err)));
      return Promise.resolve();
    });
  };
