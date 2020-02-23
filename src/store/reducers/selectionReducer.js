import {
  SELECT_INDEX,
  SELECT_ONLY_INDEX,
  DESELECT_INDEX,
  DESELECT_ALL_INDICES
} from '../actions';

const MODES = {
  MULTI: 'MULTI',
  SINGLE: 'SINGLE'
};

// PALETTE SHOULD HAVE:
// handleMouseLeave
// handleEntryMouseDown
// handleEntryMouseUp
// handleEntryMouseEnter

const initialState = {
  mode: MODES.SINGLE,
  selectedIndices: new Set([])
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INDEX: {
      const { index } = action.payload;

      let newSelected = new Set(state.selectedIndices);
      newSelected.add(index);
      return {
        ...state,
        selectedIndices: newSelected
      };
    }
    case SELECT_ONLY_INDEX: {
      const { index } = action.payload;

      let newSelected = new Set();
      newSelected.add(index);
      return {
        ...state,
        selectedIndices: newSelected
      };
    }
    case DESELECT_INDEX: {
      const { index } = action.payload;

      let newSelected = new Set(state.selectedIndices);
      newSelected.delete(index);
      return {
        ...state,
        selectedIndices: newSelected
      };
    }
    case DESELECT_ALL_INDICES: {
      return {
        ...state,
        selectedIndices: new Set([])
      };
    }
    default: {
      return state;
    }
  }
};

export default selectionReducer;
