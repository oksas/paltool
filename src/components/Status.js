import React from 'react';
import { useSelector } from 'redux';

const Status = () => {
  const selectedIndices = useSelector(state => state.selected.selectedIndices);
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
