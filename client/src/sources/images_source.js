import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper(SCHANI_APIGATEWAY + 'images')
    .then(images => images);

export default getAll;
