import React from 'react';
import DragSelect from '../DragSelect';
import Entry from './Entry';

function PaletteDisplay({
  palette = [],
  selectedIndices,
  handleEntrySelect = () => {}
}) {
  return (
    <div className="palette-display">
      <div className="palette-display-top">Current Palette</div>
      <div className="palette-display-inner">
        {/* <DragSelect> */}
        {palette.map((palEntry, index) => (
          <Entry
            color={palEntry}
            key={index}
            index={index}
            isActive={selectedIndices && selectedIndices.has(index)}
            handleClick={handleEntrySelect}
          />
        ))}
        {/* </DragSelect> */}
      </div>
    </div>
  );
}

export default PaletteDisplay;
