import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIndex, deselectIndex } from './store/actions';
import Entry from './Entry';
import Status from './Status';
import FileHandler from './FileHandler';

function App() {
  const currentPal = useSelector(state => state.currentPal);
  const selectedIndices = useSelector(state => state.selectedIndices);
  const dispatch = useDispatch();

  const handleEntrySelect = index => {
    if (selectedIndices.has(index)) {
      dispatch(deselectIndex(index));
    } else {
      dispatch(selectIndex(index));
    }
  };

  return (
    <div className='app'>
      <div>
        <FileHandler />

        <div className='palette'>
          {currentPal.map((palEntry, index) => (
            <Entry
              color={palEntry}
              key={index}
              index={index}
              isActive={selectedIndices.has(index)}
              handleClick={handleEntrySelect}
            />
          ))}
        </div>

        <Status />
      </div>
    </div>
  );
}

export default App;
