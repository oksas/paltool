import React from 'react';
import { useDispatch } from 'react-redux';
import { selectIndex, deselectIndex } from './store/actions';
import { usePresentSelector } from './store/util';
import Entry from './Entry';
import Status from './Status';
import FileHandler from './FileHandler';
import DragSelect from './components/DragSelect';

function App() {
  const currentPal = usePresentSelector(state => state.currentPal);
  const selectedIndices = usePresentSelector(state => state.selectedIndices);
  const dispatch = useDispatch();

  const handleEntrySelect = index => {
    if (selectedIndices.has(index)) {
      dispatch(deselectIndex(index));
    } else {
      dispatch(selectIndex(index));
    }
  };

  return (
    <div className="app">
      <div>
        <FileHandler />

        <div className="palette">
          <DragSelect>
            {currentPal.map((palEntry, index) => (
              <Entry
                color={palEntry}
                key={index}
                index={index}
                isActive={selectedIndices.has(index)}
                handleClick={handleEntrySelect}
              />
            ))}
          </DragSelect>
        </div>

        <Status />
      </div>
    </div>
  );
}

export default App;
