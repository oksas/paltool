import React from 'react';
import { useSelector } from 'react-redux';
import ToolBarButton from './ToolBarButton';
import Palette from '../../Palette';
import { IconContext } from 'react-icons';
import { FiDownload } from 'react-icons/fi';

function LoadButton() {
  const palette = useSelector(state => state.palette.present.palette);

  const handleClick = () => {
    let pal = new Palette();
    pal = pal.parseFromRGB(palette).getTypedArray();
    const blob = new Blob([pal], { type: 'application/octet-stream' });
    const $link = document.createElement('a');
    $link.href = window.URL.createObjectURL(blob);
    $link.download = 'palette.pal';
    $link.click();
  };

  return (
    <ToolBarButton handleClick={handleClick}>
      <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
        <FiDownload />
      </IconContext.Provider>
      Save
    </ToolBarButton>
  );
}

export default LoadButton;

function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], { type: 'application/octet-stream' });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
}
