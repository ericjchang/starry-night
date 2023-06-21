import React, { useState, useEffect } from 'react';
import celestial from 'd3-celestial';

const Celestial = celestial.Celestial();
window.Celestial = Celestial;

function Map() {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState({
    lat: 0,
    long: 0,
  });

  const config = {
    container: 'map',
    width: 700,
    form: false,
    advanced: false,
    controls: false,
    interactive: false,
    disableAnimations: false,

    zoomlevel: null,
    zoomextend: 1,

    projection: 'airy',

    lines: {
      graticule: { show: false },
      equatorial: { show: false },
      ecliptic: { show: false },
      galactic: { show: false },
      supergalactic: { show: false },
    },
    datapath: 'https://ofrohn.github.io/data/',

    planets: {
      show: false,
    },

    mw: {
      show: false,
    },

    dsos: {
      show: false,
      names: false,
    },

    constellations: {
      names: false,
      lines: true,
      lineStyle: { stroke: '#cccccc', width: 1, opacity: 0.6 },
    },

    background: {
      fill: '#000',
      stroke: '#ffffff',
      opacity: 1,
      width: 2,
    },

    stars: {
      colors: false,
      size: 6,
      limit: 8,
      exponent: -0.28,
      designation: false,
      propername: false,
    },
  };

  useEffect(() => {
    console.log('run');
    Celestial.display(config);
  }, []);

  useEffect(() => {
    Celestial.skyview({ date: date, location: { lat: location.lat, long: location.long } });
    console.log(location, date);
  }, [date, location]);

  const changeLocation = () => {
    const d = new Date('14 April 2022 00:00:00 GMT');
    setDate(d);
    setLocation({
      lat: 52.520008,
      long: 13.404954,
    });
  };

  return (
    <div>
      {/* <p>Date : {date.toString()}</p>
      <p>Lat : {location.lat}</p>
      <p>Long : {location.long}</p> */}
      <div id='map-container'>
        <div id='map'></div>
      </div>
      {/* <div id='celestial-form'></div> */}
      {/* <button onClick={changeLocation}>Change</button> */}
    </div>
  );
}

export default Map;
