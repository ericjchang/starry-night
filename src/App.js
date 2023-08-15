import React from 'react';
import Page from './components/Page';
import Map from './components/Map';
import Editor from './components/Editor';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container d-flex'>
      <Provider store={store}>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Page>
          <Map />
          <p className=''>dedication</p>
          <p className=''>city</p>
          <p className=''>coordinates</p>
          <p className=''>date</p>
        </Page>
        <Editor />
      </Provider>
    </div>
  );
}

export default App;
