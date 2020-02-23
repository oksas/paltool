import React from 'react';

const Entry = ({
  color,
  index,
  isActive,
  handleMouseDown = () => {},
  handleMouseUp = () => {},
  handleMouseEnter = () => {}
}) => {
  return (
    <div
      className={`entry ${isActive ? 'is-active' : ''}`}
      style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      onMouseDown={() => handleMouseDown(index)}
      onMouseUp={() => handleMouseUp(index)}
      onMouseEnter={() => handleMouseEnter(index)}
    ></div>
  );
};

export default Entry;
