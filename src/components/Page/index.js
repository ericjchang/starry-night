import React from 'react';
import './index.css';

const Page = ({ children }) => {
  return (
    <div className='page'>
      <div>{children}</div>
    </div>
  );
};

export default Page;
