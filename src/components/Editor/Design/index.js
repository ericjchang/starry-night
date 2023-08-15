import React, { useState } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateColor } from '../../../store/actions/DesignAction';

const ColorPicker = () => {
  const colors = ['#000000', '#000a52', '#007e72', '#e7a900', '#db773c', '#e64638'];
  const selectedColor = useSelector(state => state.DesignReducer.color);
  const [hoveredColor, setHoveredColor] = useState(null);
  const dispatch = useDispatch();

  const handleColorClick = color => {
    dispatch(updateColor(color));
  };

  const handleColorHover = color => {
    setHoveredColor(color);
  };

  const handleColorLeave = () => {
    setHoveredColor(null);
  };

  return (
    <div className='color-item'>
      {colors.map((color, index) => (
        <div
          key={index}
          className='color-box'
          style={{
            backgroundColor: color,
            outline: `2px solid ${color === selectedColor || color === hoveredColor ? '#7785a9' : 'transparent'}`,
            border: `1px solid ${color === selectedColor || color === hoveredColor ? 'white' : 'transparent'}`,
          }}
          onClick={() => handleColorClick(color)}
          onMouseEnter={() => handleColorHover(color)}
          onMouseLeave={handleColorLeave}
        >
          {color === selectedColor && (
            <span
              style={{
                position: 'absolute',
                fontSize: '25px',
                color: 'white',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              &#10003;
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
