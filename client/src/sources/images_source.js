import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper('images')
    .then(images => images);

export default getAll;

export const getImageUri = id => `images/${id}/file`;

export const getTagsOfImage = id =>
  fetchWrapper(`images/${id}/tags`)
    .then(images => images);
