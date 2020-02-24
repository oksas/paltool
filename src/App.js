import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsSelecting,
  setSelectedStart,
  setSelectedEnd
} from './store/actions';
import { getSelectedIndices } from './store/selectors';
import Top from './components/Top';
import ToolBar from './components/ToolBar/ToolBar';
import PaletteDisplay from './components/PaletteDisplay';
import AnimateInOut from './components/AnimateInOut';

function App() {
  const palette = useSelector(state => state.palette.present.palette);
  const selectedIndices = useSelector(state => getSelectedIndices(state));
  const isSelecting = useSelector(state => state.selection.isSelecting);
  const dispatch = useDispatch();

  const handleEntryMouseDown = (index, e) => {
    e.preventDefault();
    dispatch(setSelectedStart(index));
    dispatch(setIsSelecting(true));
  };

  const handleMouseLeave = () => {
    if (!isSelecting) return;
    dispatch(setIsSelecting(false));
  };

  const handleEntryMouseUp = index => {
    dispatch(setIsSelecting(false));
  };

  const handleEntryMouseEnter = index => {
    if (!isSelecting) return;
    dispatch(setSelectedEnd(index));
  };

  // (handleMouseLeave = () => {}),
  // (handleEntryMouseDown = () => {}),
  // (handleEntryMouseUp = () => {}),
  // (handleEntryMouseEnter = () => {});

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
            selectedIndices={selectedIndices}
            handleEntryMouseDown={handleEntryMouseDown}
            handleMouseLeave={handleMouseLeave}
            handleEntryMouseUp={handleEntryMouseUp}
            handleEntryMouseEnter={handleEntryMouseEnter}
          />
        </AnimateInOut>
      </main>
    </div>
  );
}

export default App;
