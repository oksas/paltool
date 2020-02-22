import { createStore, applyMiddleware } from 'redux';
import {
  UNDO,
  REDO,
  SET_ERROR,
  SET_CURRENT_PAL,
  SELECT_INDEX,
  DESELECT_INDEX,
  DESELECT_ALL_INDICES,
  UPDATE_INDEX
} from './actions';
import logger from 'redux-logger';

const undoReducer = reducer => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  };

  return function enhancedReducer(state = initialState, action) {
    switch (action.type) {
      case UNDO: {
        if (!state.past.length) {
          return state;
        }

        return {
          past: state.past.slice(0, state.past.length - 1),
          present: state.past[state.past.length - 1],
          future: state.future.unshift(state.present)
        };
      }
      case REDO: {
        if (!state.future.length) {
          return state;
        }

        return {
          past: [...state.past, state.present],
          present: state.future[0],
          future: state.future.slice(1)
        };
      }
      default: {
        return {
          past: [...state.past, state.present],
          present: reducer(state.present, action),
          future: []
        };
      }
    }
  };
};

const initialState = {
  currentPal: [],
  selectedIndices: new Set([]),
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload.err
      };
    }
    case SET_CURRENT_PAL: {
      return {
        ...state,
        currentPal: action.payload.pal
      };
    }
    case SELECT_INDEX: {
      const { index } = action.payload;

      let newSelected = new Set(state.selectedIndices);
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
    case UPDATE_INDEX: {
      const { index, color } = action.payload;

      let newPal = [...state.currentPal];
      newPal[index] = color;
      return {
        ...state,
        currentPal: newPal
      };
    }
    default: {
      return state;
    }
  }
};

export default createStore(undoReducer(rootReducer), applyMiddleware(logger));
