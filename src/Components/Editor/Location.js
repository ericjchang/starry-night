import React, { useRef, useState, useEffect } from 'react';

const Location = () => {
  const [selectedCity, setSelectedCity] = useState({
    name: '',
    lat: 0,
    long: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ['geometry', 'name'],
  };

  const autoComplete = () => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);
    autoCompleteRef.current.addListener('place_changed', async () => {
      const place = await autoCompleteRef.current.getPlace();
      setSelectedCity({
        name: place.name,
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng(),
      });
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      autoComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputRef.current]);

  useEffect(() => {
    console.log(selectedCity);
  }, [selectedCity]);

  return (
    <div>
      <input type='text' placeholder='Search cities...' onChange={e => setSearchTerm(e.target.value)} ref={inputRef} />
    </div>
  );
};

export default Location;
