import React from 'react';
import { updateIndex } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import AnimateInOut from '../AnimateInOut';

function SingleEditor() {
  const dispatch = useDispatch();
  const palette = useSelector(state => state.palette.present.palette);
  const start = useSelector(state => state.selection.selectedRangeStart);
  const end = useSelector(state => state.selection.selectedRangeEnd);
  const isSelecting = useSelector(state => state.selection.isSelecting);
  // import action for modifying palette index
  // display of current color
  // display of index
  // r, g, b, inputs
  let rgb = palette[start];

  const handleChange = (piece, value) => {
    let newRgb = { ...rgb };
    newRgb[piece] = parseInt(value, 10);
    dispatch(updateIndex(start, newRgb));
  };

  return (
    <AnimateInOut
      shouldShow={start === end}
      inClass="fade-in-left"
      outClass="fade-out-right"
    >
      <div className="single-editor">
        <div className="single-editor-current">
          <div className="single-editor-input-container">
            <label>
              R
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.r}
                onChange={e => handleChange('r', e.target.value)}
              />
            </label>
          </div>
          <div className="single-editor-input-container">
            <label>
              G
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.g}
                onChange={e => handleChange('g', e.target.value)}
              />
            </label>
          </div>
          <div className="single-editor-input-container">
            <label>
              B
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.b}
                onChange={e => handleChange('b', e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </AnimateInOut>
  );
}

export default SingleEditor;
