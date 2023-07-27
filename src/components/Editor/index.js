import React from 'react';
import Location from './Location';
import Dedication from './Dedication';
import Date from './Date';
import Design from './Design';
import './styles.css';

function Editor() {
  return (
    <div>
      <div>Editor</div>
      <p>Location</p>
      <Location />
      <p>Dedication</p>
      <Dedication />
      <p>Date</p>
      <Date />
      <p>Design</p>
      <Design />
      <button>Generate PDF</button>
    </div>
  );
}

export default Editor;
