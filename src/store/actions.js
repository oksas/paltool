// ** ACTION TYPES
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const SET_PALETTE = 'SET_PALETTE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const SELECT_INDEX = 'SELECT_INDEX';
// SELECT_ONLY_INDEX selects _only_ that single index, and is not additive,
// unlike SELECT_INDEX, which is additive.
export const SELECT_ONLY_INDEX = 'SELECT_ONLY_INDEX';
export const DESELECT_INDEX = 'DESELECT_INDEX';
export const DESELECT_ALL_INDICES = 'DESELECT_ALL_INDICES';

// ** ACTIONS
export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});

export const setPalette = pal => ({
  type: SET_PALETTE,
  payload: {
    pal
  }
});

export const selectIndex = index => ({
  type: SELECT_INDEX,
  payload: {
    index
  }
});

export const selectOnlyIndex = index => ({
  type: SELECT_ONLY_INDEX,
  payload: {
    index
  }
});

export const deselectIndex = index => ({
  type: DESELECT_INDEX,
  payload: {
    index
  }
});

export const deselectAllIndices = () => ({
  type: DESELECT_ALL_INDICES
});

export const updateIndex = (index, color) => ({
  type: UPDATE_INDEX,
  payload: {
    index,
    color
  }
});
