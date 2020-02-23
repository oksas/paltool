import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectIndex, deselectIndex } from './store/actions';
import { usePresentSelector } from './store/util';
import Top from './components/Top';
import Status from './components/Status';
import ToolBar from './components/ToolBar/ToolBar';
import PaletteDisplay from './components/PaletteDisplay';
import AnimateInOut from './components/AnimateInOut';

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
      <main className="content">
        <ToolBar />

        <AnimateInOut
          shouldShow={currentPal && currentPal.length ? true : false}
          inClass="fade-in-up"
          outClass="fade-out-down"
        >
          <PaletteDisplay
            palette={currentPal}
            handleEntrySelect={handleEntrySelect}
            selectedIndices={selectedIndices}
          />
        </AnimateInOut>
      </main>
    </div>
  );
}

export default App;
