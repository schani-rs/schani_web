import { createAction } from 'redux-actions';
import { getAll, addImage, postNew, getImagesOfCollection } from '../sources/collections_source';

export const getImagesForCollectionStart = createAction('GET_IMAGES_FOR_COLLECTION_START');
export const getImagesForCollectionSucc = createAction('GET_IMAGES_FOR_COLLECTION_SUCC');
export const getImagesForCollectionErr = createAction('GET_IMAGES_FOR_COLLECTION_ERR');

export const getAllCollectionsStart = createAction('GET_ALL_COLLECTIONS_START');
export const getAllCollectionsSucc = createAction('GET_ALL_COLLECTIONS_SUCC');
export const getAllCollectionsErr = createAction('GET_ALL_COLLECTIONS_ERR');

export const addImageToColStart = createAction('ADD_IMAGE_TO_COL_START');
export const addImageToColSucc = createAction('ADD_IMAGE_TO_COL_SUCC');
export const addImageToColErr = createAction('ADD_IMAGE_TO_COL_ERR');

export const addNewColStart = createAction('ADD_NEW_COL_START');
export const addNewColSucc = createAction('ADD_NEW_COL_SUCC');
export const addNewColErr = createAction('ADD_NEW_COL_ERR');

export const updateImage = createAction('UPDATE_COLLECTION');

export const getImagesForCollection = id =>
  (dispatch) => {
    dispatch(getImagesForCollectionStart());
    getImagesOfCollection(id)
    .then((images) => {
      dispatch(getImagesForCollectionSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(getImagesForCollectionErr(new Error(err)));
      return Promise.resolve();
    });
  };

export const getAllCollections = () =>
  (dispatch) => {
    dispatch(getAllCollectionsStart());
    getAll()
    .then((images) => {
      dispatch(getAllCollectionsSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(getAllCollectionsErr(new Error(err)));
      return Promise.resolve();
    });
  };

export const addImageToCol = (collectionId, imageId) =>
  (dispatch) => {
    dispatch(addImageToColStart());
    addImage(collectionId, imageId)
    .then((images) => {
      dispatch(addImageToColSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(addImageToColErr(new Error(err)));
      return Promise.resolve();
    });
  };

export const addNewCol = (name, description) =>
  (dispatch) => {
    dispatch(addNewColStart());
    postNew(name, description)
    .then((images) => {
      dispatch(addNewColSucc(images));
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch(addNewColErr(new Error(err)));
      return Promise.resolve();
    });
  };
