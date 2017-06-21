import fetchWrapper from '../utils/fetchHelper';

export const getAll = () =>
  fetchWrapper('tags')
    .then(tags => tags);

export default getAll;

export const postNew = label =>
  fetchWrapper(`tags/new?label=${label}`, { method: 'POST' })
    .then(tag => tag);
