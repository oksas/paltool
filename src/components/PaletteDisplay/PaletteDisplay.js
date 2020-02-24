import React from 'react';
import Entry from './Entry';
import Editor from '../Editor';
// import { useToasts } from 'react-toast-notifications';

function PaletteDisplay({
  palette = [],
  selectedIndices,
  handleMouseLeave = () => {},
  handleEntryMouseDown = () => {},
  handleEntryMouseUp = () => {},
  handleEntryMouseEnter = () => {},
  handleTouchStart = () => {}
}) {
  return (
    <div className="palette-display" draggable="false">
      <div className="palette-display-top"></div>
      <div className="palette-display-inner" onMouseLeave={handleMouseLeave}>
        {palette.map((palEntry, index) => (
          <Entry
            color={palEntry}
            key={index}
            index={index}
            isActive={selectedIndices && selectedIndices.has(index)}
            handleMouseDown={handleEntryMouseDown}
            handleMouseUp={handleEntryMouseUp}
            handleMouseEnter={handleEntryMouseEnter}
            handleTouchStart={handleTouchStart}
          />
        ))}
      </div>
      <div className="palette-display-bottom">
        <Editor />
      </div>
    </div>
  );
}

export default PaletteDisplay;
