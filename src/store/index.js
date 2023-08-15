import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import DedicationReducer from './reducers/DedicationReducer';
import LocationReducer from './reducers/LocationReducer';
import DesignReducer from './reducers/DesignReducer';
import DateReducer from './reducers/DateReducer';

const reducers = combineReducers({
  DedicationReducer,
  LocationReducer,
  DesignReducer,
  DateReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;
