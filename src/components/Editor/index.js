import React from 'react';
import Location from './Location';
import Dedication from './Dedication';
import Date from './Date';
import Design from './Design';
import './styles.css';

function Editor() {
  return (
    <div className='editor'>
      <h3>Editor</h3>
      <div className='editor-item'>
        <p>Location</p>
        <Location />
      </div>

      <div className='editor-item'>
        <p>Dedication</p>
        <Dedication />
      </div>

      <div className='editor-item'>
        <p>Date</p>
        <Date />
      </div>

      <div className='editor-item'>
        <p>Design</p>
        <Design />
      </div>

      <div className='btn-generate'>
        <button>Generate PDF</button>
      </div>
    </div>
  );
}

export default Editor;
