import React from 'react';
import Entry from './Entry';

function PaletteDisplay({
  palette = [],
  selectedIndices,
  handleEntrySelect = () => {}
}) {
  // on mouse out, just cancel the drag selection mode
  // for each entry:
  // on mouse down, set mode to drag, make that potential start
  // on mouse up, make that , unset drag

  return (
    <div className="palette-display">
      <div className="palette-display-top"></div>
      <div className="palette-display-inner" onMouseLeave={e => {}}>
        {palette.map((palEntry, index) => (
          <Entry
            color={palEntry}
            key={index}
            index={index}
            isActive={selectedIndices && selectedIndices.has(index)}
            handleClick={handleEntrySelect}
          />
        ))}
      </div>
    </div>
  );
}

export default PaletteDisplay;
