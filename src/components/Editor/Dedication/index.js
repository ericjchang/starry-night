import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { updateDedication } from '../../../store/actions/DedicationAction';

function Dedication() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const text = e.target.value;
    dispatch(updateDedication(text));
  };

  return (
    <div>
      <textarea
        className='dedication'
        id=''
        cols='30'
        rows='5'
        placeholder='Sample dedication'
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Dedication;
