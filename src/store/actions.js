// ** ACTION TYPES
export const SET_CURRENT_PAL = 'SET_CURRENT_PAL';
export const SELECT_INDEX = 'SELECT_INDEX';
export const DESELECT_INDEX = 'DESELECT_INDEX';

// ** ACTIONS
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
