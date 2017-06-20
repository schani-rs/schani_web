import { createAction } from 'redux-actions';
import { getAll, getImageUri, getTagsOfImage } from '../sources/images_source';

export const getAllImagesStart = createAction('GET_ALL_IMAGES_START');
export const getAllImagesSucc = createAction('GET_ALL_IMAGES_SUCC');
export const getAllImagesErr = createAction('GET_ALL_IMAGES_ERR');

export const getAllTagsOfImagesStart = createAction('GET_ALL_TAGS_OF_IMAGES_START');
export const getAllTagsOfImagesSucc = createAction('GET_ALL_TAGS_OF_IMAGES_SUCC');
export const getAllTagsOfImagesErr = createAction('GET_ALL_TAGS_OF_IMAGES_ERR');


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

export const getAllTagsOfImage = id =>
  (dispatch) => {
    dispatch(getAllTagsOfImagesStart);
    getTagsOfImage(id)
    .then((images) => {
      dispatch(getAllTagsOfImagesSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(getAllTagsOfImagesErr(new Error(err)));
      return Promise.resolve();
    });
  };
