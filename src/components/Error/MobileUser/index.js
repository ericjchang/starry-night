import React from 'react';
import './index.css';
import logo from '../../../assets/logo.png';

function ErrorMobileUser() {
  return (
    <div class='msg'>
      <p>
        Ooops...
        <br />
        The mobile version is still in progress.
        <br />
        <br />
        Please use the desktop version for now.
        <br />
        Thanks!
      </p>
      <div className='img-container'>
        <img src={logo} alt='logo' loading='lazy' />
      </div>
    </div>
  );
}

export default ErrorMobileUser;
