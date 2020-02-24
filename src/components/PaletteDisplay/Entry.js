import React from 'react';

const Entry = ({
  color,
  index,
  isActive,
  handleMouseDown = () => {},
  handleMouseUp = () => {},
  handleMouseEnter = () => {},
  handleTouchStart = () => {}
}) => {
  return (
    <div
      draggable="false"
      className={`entry ${isActive ? 'is-active' : ''}`}
      style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      onMouseDown={e => handleMouseDown(index, e)}
      onMouseUp={e => handleMouseUp(index, e)}
      onMouseEnter={e => handleMouseEnter(index, e)}
      onTouchStart={e => handleTouchStart(index, e)}
      onTouchEnd={e => e.preventDefault()}
    ></div>
  );
};

export default Entry;
