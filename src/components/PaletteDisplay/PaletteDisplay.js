import React from 'react';
import Entry from './Entry';
// import { useToasts } from 'react-toast-notifications';

function PaletteDisplay({
  palette = [],
  selectedIndices,
  handleMouseLeave = () => {},
  handleEntryMouseDown = () => {},
  handleEntryMouseUp = () => {},
  handleEntryMouseEnter = () => {}
}) {
  // const { addToast } = useToasts();

  return (
    <div className="palette-display" draggable="false">
      <div className="palette-display-top"></div>
      <div
        className="palette-display-inner"
        onMouseLeave={handleMouseLeave}
        onTouchMove={e => console.log('touchMove', e.target)}
      >
        {palette.map((palEntry, index) => (
          <Entry
            color={palEntry}
            key={index}
            index={index}
            isActive={selectedIndices && selectedIndices.has(index)}
            handleMouseDown={handleEntryMouseDown}
            handleMouseUp={handleEntryMouseUp}
            handleMouseEnter={handleEntryMouseEnter}
          />
        ))}
      </div>
    </div>
  );
}

export default PaletteDisplay;
