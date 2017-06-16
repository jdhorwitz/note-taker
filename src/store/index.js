import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { autoRehydrate } from 'redux-persist';
import middlewares from './middleware';

import notes from '../containers/CreateNoteForm/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  notes,
});

const devToolsExtensions =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
)(createStore);

const store = createStoreWithMiddleware(rootReducer, devToolsExtensions);

export default store;
