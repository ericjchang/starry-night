import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import celestial from 'd3-celestial';

const Celestial = celestial.Celestial();
window.Celestial = Celestial;

function Map() {
  const day = useSelector(state => state.DateReducer.day);
  const month = useSelector(state => state.DateReducer.month);
  const year = useSelector(state => state.DateReducer.year);
  const long = useSelector(state => state.LocationReducer.long);
  const lat = useSelector(state => state.LocationReducer.lat);
  const color = useSelector(state => state.DesignReducer.color);

  const config = {
    container: 'map',
    width: 500,
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
      fill: color,
      stroke: '#ffffff',
      opacity: 1,
      width: 2,
    },

    stars: {
      colors: false,
      size: 6,
      limit: 5,
      exponent: -0.28,
      designation: false,
      propername: false,
    },
  };

  useEffect(() => {
    Celestial.display(config);
  }, []);

  useEffect(() => {
    Celestial.apply({
      background: {
        fill: color,
      },
    });
  }, [color]);

  useEffect(() => {
    const date = new Date(year, month - 1, day);

    try {
      Celestial.skyview({ date: date, location: [lat, long] });
    } catch (err) {
      console.log(err);
    }
    console.log(long, lat, date);
  }, [long, lat, year, month, day]);

  return (
    <div>
      <div id='map-container'>
        <div id='map'></div>
      </div>
    </div>
  );
}

export default Map;
