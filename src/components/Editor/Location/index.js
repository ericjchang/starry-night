import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../../../store/actions/LocationAction';
import './styles.css';

const Location = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ['geometry', 'name'],
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.google) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);
      autoCompleteRef.current.addListener('place_changed', async () => {
        const place = await autoCompleteRef.current.getPlace();
        dispatch(
          updateLocation({
            name: place.name,
            lat: place.geometry.location.lat(),
            long: place.geometry.location.lng(),
          })
        );
      });
    }
  }, []);

  return (
    <div>
      <input type='text' placeholder='Search cities...' ref={inputRef} />
    </div>
  );
};

export default Location;
