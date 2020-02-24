import React, { useRef } from 'react';
import { useToasts } from 'react-toast-notifications';
import ToolBarButton from './ToolBarButton';
import Palette from '../../Palette';
import { IconContext } from 'react-icons';
import { FiUpload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setPalette } from '../../store/actions';

function LoadButton() {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const { addToast } = useToasts();

  const handleFileUpload = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const palArray = new Uint8Array(reader.result);
      try {
        const newPal = new Palette().parseFromTypedArray(palArray).getRGB();
        dispatch(setPalette(newPal));
      } catch (error) {
        addToast(error.message, {
          appearance: 'warning'
        });
      }

      // Below is code for printing a JSON palette to the console. This really
      // ought to be a separate command-line tool/file for doing this, but
      // this was sufficient for the low number of default palettes that this
      // project has currently.
      // let toPrint = [];
      // for (let i = 0; i < newPal.length; i++) {
      //   toPrint.push(JSON.stringify(newPal[i]));
      // }
      // console.log('[' + toPrint.join(', ') + ']');
    };

    reader.onerror = function() {
      addToast(reader.error.message, {
        appearance: 'warning'
      });
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
        accept=".pal"
      />
      <IconContext.Provider value={{ className: 'tool-bar-button-icon' }}>
        <FiUpload />
      </IconContext.Provider>
      Load
    </ToolBarButton>
  );
}

export default LoadButton;
