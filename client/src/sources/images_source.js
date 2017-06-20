import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper(SCHANI_APIGATEWAY + 'images')
    .then(images => images);

export default getAll;

export const getImageUri = id => SCHANI_APIGATEWAY + 'images/' + id + '/file';

export const getTagsOfImage = id =>
  fetchWrapper(SCHANI_APIGATEWAY + 'images/' + id + '/tags')
    .then(images => images);
