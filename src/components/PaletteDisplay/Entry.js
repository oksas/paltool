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
      draggable="false"
      className={`entry ${isActive ? 'is-active' : ''}`}
      style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      onMouseDown={e => handleMouseDown(index, e)}
      onMouseUp={e => handleMouseUp(index, e)}
      onMouseEnter={e => handleMouseEnter(index, e)}
      onTouchStart={e => handleMouseDown(index, e)}
      onTouchEnd={e => handleMouseUp(index, 3)}
    ></div>
  );
};

export default Entry;
