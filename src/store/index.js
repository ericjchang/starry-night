import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import LocationReducer from './reducers/LocationReducer';

const reducers = combineReducers({
  LocationReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;
