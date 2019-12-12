import React from 'react';
import { usePresentSelector } from './store/util';

const Status = () => {
  const selectedIndices = usePresentSelector(state => state.selectedIndices);
  const size = selectedIndices.size;

  return (
    <div className="status">
      <p>
        {size} {size === 1 ? 'index' : 'indices'} selected
      </p>
    </div>
  );
};

export default Status;
