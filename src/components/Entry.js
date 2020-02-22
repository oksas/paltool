import React from 'react';

const Entry = ({ color, handleClick, index, isActive }) => {
  return (
    <div
      className={`entry ${isActive ? 'is-active' : ''}`}
      style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      onClick={() => handleClick(index)}
    ></div>
  );
};

export default Entry;
