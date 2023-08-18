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

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
