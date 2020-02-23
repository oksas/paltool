import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolBarButton from './ToolBarButton';
import LoadButton from './LoadButton';
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
      <LoadButton />

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiDownload />
        </IconContext.Provider>
        Save
      </ToolBarButton>

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiBarChart />
        </IconContext.Provider>
        Gradient
      </ToolBarButton>

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiSliders />
        </IconContext.Provider>
        Shift
      </ToolBarButton>

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
  );
}

export default ToolBar;
