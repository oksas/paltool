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

  const handleEntryMouseUp = (index, e) => {
    console.log('handling mouse up');
    e.preventDefault();
    dispatch(setIsSelecting(false));
  };

  const handleEntryMouseEnter = index => {
    if (!isSelecting) return;
    dispatch(setSelectedEnd(index));
  };

  // The way this works is that on touch screens, instead of the drag-select
  // behavior, the user has to click individual elements. Click one element
  // starts a range, and the next click defines the end of the range. Any
  // click after a range has been defined is determined to be the start of
  // a new range. This is obviously not ideal - it would be great if the
  // drag-selection behavior was consistent across device input types, but
  // currently it's more trouble than it's worth to implement this behavior,
  // given how incredibly unlikely it is that I or anyone else will be using
  // this for development on mobile in the foreseeable future.
  const handleTouchStart = (index, e) => {
    e.preventDefault();
    // If only 1 item is selected, consider that item the start, and try to
    // place the end.
    if (selectedIndices.size === 1) {
      dispatch(setSelectedEnd(index));
    } else {
      // If there's more than 1 item selected, consider it a complete range,
      // and start over by selecting a new start.
      dispatch(setSelectedStart(index));
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
            selectedIndices={selectedIndices}
            handleEntryMouseDown={handleEntryMouseDown}
            handleMouseLeave={handleMouseLeave}
            handleEntryMouseUp={handleEntryMouseUp}
            handleEntryMouseEnter={handleEntryMouseEnter}
            handleTouchStart={handleTouchStart}
          />
        </AnimateInOut>
      </main>
    </div>
  );
}

export default App;
