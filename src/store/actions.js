// ** ACTION TYPES
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const SET_CURRENT_PAL = 'SET_CURRENT_PAL';
export const SELECT_INDEX = 'SELECT_INDEX';
export const DESELECT_INDEX = 'DESELECT_INDEX';
export const UPDATE_INDEX = 'UPDATE_INDEX';

// ** ACTIONS
export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});

export const setCurrentPal = pal => ({
  type: SET_CURRENT_PAL,
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

export const deselectIndex = index => ({
  type: DESELECT_INDEX,
  payload: {
    index
  }
});

export const updateIndex = (index, color) => ({
  type: UPDATE_INDEX,
  payload: {
    index,
    color
  }
});