import React, { useRef } from 'react';
import ToolBarButton from './ToolBarButton';
import Palette from '../../Palette';
import { IconContext } from 'react-icons';
import { FiUpload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setCurrentPal } from '../../store/actions';

function LoadButton() {
  const dispatch = useDispatch();
  const fileInput = useRef(null);

  const handleFileUpload = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const palArray = new Uint8Array(reader.result);
      const newPal = new Palette().parseFromTypedArray(palArray).getRGB();
      dispatch(setCurrentPal(newPal));
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  };

  const handleClick = e => fileInput.current.click();

  return (
    <ToolBarButton handleClick={handleClick}>
      <input
        ref={fileInput}
        id="palette-upload"
        type="file"
        onChange={handleFileUpload}
      />
      <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
        <FiUpload />
      </IconContext.Provider>
      Load
    </ToolBarButton>
  );
}

export default LoadButton;
