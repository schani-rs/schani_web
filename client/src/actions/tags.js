import { createAction } from 'redux-actions';
import { getAll } from '../sources/images_source';

export const getAllTags = createAction('GET_ALL_TAGS', () => getAll());
export const updateImage = createAction('UPDATE_TAG');
