import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOnlyIndex, deselectIndex } from './store/actions';
import Top from './components/Top';
import ToolBar from './components/ToolBar/ToolBar';
import PaletteDisplay from './components/PaletteDisplay';
import AnimateInOut from './components/AnimateInOut';

function App() {
  const palette = useSelector(state => state.palette.present.palette);
  const selectedIndices = useSelector(state => state.selection.selectedIndices);
  const dispatch = useDispatch();

  const handleEntrySelect = index => {
    if (selectedIndices.has(index)) {
      dispatch(deselectIndex(index));
    } else {
      dispatch(selectOnlyIndex(index));
    }
  };

  return (
    <div className="app">
      <Top />
      <main className="content">
        <ToolBar />

        <AnimateInOut
          className="palette-display-container"
          shouldShow={palette && palette.length ? true : false}
          inClass="fade-in-up"
          outClass="fade-out-down"
        >
          <PaletteDisplay
            palette={palette}
            handleEntrySelect={handleEntrySelect}
            selectedIndices={selectedIndices}
          />
        </AnimateInOut>
      </main>
    </div>
  );
}

export default App;
