import React from 'react';
import Page from './components/Page';
import Map from './components/Map';
import Editor from './components/Editor';

import { connect } from 'react-redux';
import { toDMS } from './helpers/CoordinateFormater';
import { dateToString } from './helpers/DateFormater';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ day, month, year, long, lat, city, dedication }) {
  return (
    <div className='container d-flex'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <Page>
        <div className='main-content'>
          <Map />
          <div className='dedication-container'>
            <p className='title'>{dedication}</p>
            <p className='detail'>{city}</p>
            <p className='detail'>{`${toDMS(lat, 'lat')} ${toDMS(long, 'lon')}`}</p>
            <p className='detail'>{dateToString(day, month, year)}</p>
          </div>
        </div>
      </Page>
      <Editor />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    day: state.DateReducer.day,
    month: state.DateReducer.month,
    year: state.DateReducer.year,
    long: state.LocationReducer.long,
    lat: state.LocationReducer.lat,
    city: state.LocationReducer.name,
    dedication: state.DedicationReducer.text,
  };
};

export default connect(mapStateToProps)(App);
