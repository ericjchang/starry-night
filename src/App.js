import React, { useState } from 'react';
import Page from './components/Page';
import Map from './components/Map';
import Editor from './components/Editor';
import html2canvas from 'html2canvas';

import { connect } from 'react-redux';
import { toDMS } from './helpers/CoordinateFormater';
import { dateToString } from './helpers/DateFormater';
import { jsPDF } from 'jspdf';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ day, month, year, long, lat, city, dedication }) {
  const pageRef = React.useRef(null);
  const [loading, setLoading] = useState(false);

  const generatePdf = async () => {
    setLoading(true);
    try {
      const pdf = new jsPDF('portrait', 'pt', 'a4');
      const data = await html2canvas(pageRef.current);
      const img = data.toDataURL('image/png');
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`sky_${city}_${day}${month}${year}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container d-flex'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <div ref={pageRef}>
        <Page>
          <div className='main-content'>
            <Map />
            <div className='dedication-container'>
              <p className='title'>{dedication}</p>
              <p className='detail'>{city}</p>
              <p className='detail'>{`${toDMS(lat, 'lat')} \u00A0 ${toDMS(long, 'lon')}`}</p>
              <p className='detail'>{dateToString(day, month, year)}</p>
            </div>
          </div>
        </Page>
      </div>
      <Editor generatePdf={generatePdf} loading={loading} />
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
