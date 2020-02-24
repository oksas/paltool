import { MODES, SET_MODE } from '../actions';
const initialState = {
  mode: MODES.SINGLE,
  proposedPalette: []
};

// Note to self for later when implementing the other modes:
// The user should have to "accept" any modifications made in gradient or shift
// mode, unlike edits in single mode.
const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE: {
      const { mode, proposedPalette } = action.payload;
      // If we're trying to switch to the same mode, then do nothing
      if (mode === state.mode) return state;
      // if mode is single, then set to single, cleanse proposed palette
      // if mode is gradient or shift, then set mode and proposed palette
    }
    default: {
      return state;
    }
  }
  //=============
  // case: set proposed palette
  //  do stuff
  //=============
  // case: update proposed index
  //  do stuff
};

export default editorReducer;
