import React from 'react';

function ToolBarButton({ children, handleClick }) {
  return (
    <button onClick={handleClick} className="tool-bar-button">
      {children}
    </button>
  );
}

export default ToolBarButton;
