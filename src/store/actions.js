// ** ACTION TYPES
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const MODES = {
  SINGLE: 'SINGLE',
  GRADIENT: 'GRADIENT',
  SHIFT: 'SHIFT'
};
export const SET_MODE = 'SET_MODE';

export const SET_PALETTE = 'SET_PALETTE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const SET_IS_SELECTING = 'SET_IS_SELECTING';
export const SET_SELECTED_START = 'SET_SELECTED_START';
export const SET_SELECTED_END = 'SET_SELECTED_END';

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

export const updateIndex = (index, color) => ({
  type: UPDATE_INDEX,
  payload: {
    index,
    color
  }
});

export const setIsSelecting = isSelecting => ({
  type: SET_IS_SELECTING,
  payload: {
    isSelecting
  }
});

export const setSelectedStart = index => ({
  type: SET_SELECTED_START,
  payload: {
    index
  }
});

export const setSelectedEnd = index => ({
  type: SET_SELECTED_END,
  payload: {
    index
  }
});

export const setMode = mode => ({
  type: SET_MODE,
  payload: {
    mode
  }
});
