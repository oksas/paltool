import React from 'react';
import Palette from '../Palette';
import { useDispatch } from 'react-redux';
import { setCurrentPal } from '../store/actions';

function parsePal(palArray) {
  let result = [];
  for (let i = 0; i < palArray.length; i += 3) {
    result.push({
      r: palArray[i],
      g: palArray[i + 1],
      b: palArray[i + 2]
    });
  }
  return result;
}

const FileHandler = () => {
  const dispatch = useDispatch();

  const handleFileUpload = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const palArray = new Uint8Array(reader.result);
      console.log('done with everything?', palArray.length);
      dispatch(setCurrentPal(parsePal(palArray)));
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  };

  return (
    <div className="file-handler">
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileHandler;
