import React from 'react';
import { useDispatch } from 'react-redux';
import { selectIndex, deselectIndex } from './store/actions';
import { usePresentSelector } from './store/util';
import Top from './components/Top';
import Entry from './components/Entry';
import Status from './components/Status';
import FileHandler from './components/FileHandler';
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
      <Top />
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
