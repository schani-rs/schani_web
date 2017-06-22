import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper('collections')
    .then(collections => collections);

export default getAll;

export const getImagesOfCollection = id =>
  fetchWrapper(`collections/${id}/images`)
    .then(collections => collections);

export const addImage = (collectionId, imageId) =>
  fetchWrapper(`collections/${collectionId}/images/${imageId}`, { method: 'POST' });

export const postNew = (name, description) =>
  fetchWrapper(`collections/new?name=${name}&description=${description}`, { method: 'POST' })
    .then(collection => collection);
