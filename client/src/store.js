import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(ReduxThunk, createLogger()),
      DevTools.instrument(),
    ),
  );

export default configureStore;
