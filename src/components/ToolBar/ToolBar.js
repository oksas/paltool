import React from 'react';
import ToolBarButton from './ToolBarButton';
import LoadButton from './LoadButton';
import { IconContext } from 'react-icons';
import {
  FiUpload,
  FiDownload,
  FiCornerUpLeft,
  FiCornerUpRight
} from 'react-icons/fi';

function ToolBar() {
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
          <FiDownload />
        </IconContext.Provider>
        Gradient
      </ToolBarButton>

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiDownload />
        </IconContext.Provider>
        Shift
      </ToolBarButton>

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiCornerUpLeft />
        </IconContext.Provider>
        Undo
      </ToolBarButton>

      <ToolBarButton>
        <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
          <FiCornerUpRight />
        </IconContext.Provider>
        Redo
      </ToolBarButton>
    </div>
  );
}

export default ToolBar;
