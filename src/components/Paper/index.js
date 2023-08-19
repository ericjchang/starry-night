import React from 'react';
import './index.css';

const Paper = ({ children }) => {
  return (
    <div className='paper'>
      <div>{children}</div>
    </div>
  );
};

export default Paper;
