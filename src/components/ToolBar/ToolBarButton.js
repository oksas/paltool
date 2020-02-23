import React from 'react';

function ToolBarButton({ children, handleClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className="tool-bar-button"
    >
      {children}
    </button>
  );
}

export default ToolBarButton;
