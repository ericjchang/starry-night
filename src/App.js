import React from 'react';
import Map from './components/Map';
import Editor from './components/Editor';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Map />
      <Editor />
    </Provider>
  );
}

export default App;
