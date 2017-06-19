import { combineReducers } from 'redux';
import images from './images';
import tags from './tags';
import collections from './collections';
import navigation from './navigation';

const rootReducer = combineReducers({
  images,
  tags,
  collections,
  navigation,
});

export default rootReducer;
