import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper(SCHANI_APIGATEWAY + 'tags')
    .then(tags => tags);

export default getAll;
