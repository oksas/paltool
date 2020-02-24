import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolBarButton from './ToolBarButton';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import { undo, redo } from '../../store/actions';
import { IconContext } from 'react-icons';
import {
  FiDownload,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiSliders,
  FiBarChart
} from 'react-icons/fi';

function ToolBar() {
  const { past, future } = useSelector(state => state.palette);
  const dispatch = useDispatch();

  const handleUndo = () => {
    dispatch(undo());
  };

  const handleRedo = () => {
    dispatch(redo());
  };

  return (
    <div className="tool-bar">
      <div className="tool-bar-section">
        <LoadButton />

        <SaveButton />
      </div>

      {/* @TODO implement these modes! */}
      {/* <ToolBarButton disabled={true}>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiBarChart />
        </IconContext.Provider>
        Gradient
      </ToolBarButton>

      <ToolBarButton disabled={true}>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiSliders />
        </IconContext.Provider>
        Shift
      </ToolBarButton> */}

      <div className="tool-bar-section">
        <ToolBarButton disabled={!past.length} handleClick={handleUndo}>
          <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
            <FiCornerUpLeft />
          </IconContext.Provider>
          Undo
        </ToolBarButton>

        <ToolBarButton disabled={!future.length} handleClick={handleRedo}>
          <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
            <FiCornerUpRight />
          </IconContext.Provider>
          Redo
        </ToolBarButton>
      </div>
    </div>
  );
}

export default ToolBar;
