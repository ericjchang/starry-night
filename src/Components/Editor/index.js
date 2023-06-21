import React from 'react';
import Location from './Location';

function Editor() {
  return (
    <>
      <div>Editor</div>
      <p>Location</p>
      <Location />
      <p>Dedication</p>
      <p>Date</p>
      <p>Design</p>
      <button>Generate PDF</button>
    </>
  );
}

export default Editor;
