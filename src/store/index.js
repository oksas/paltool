import { createStore, applyMiddleware } from 'redux';
import { SET_CURRENT_PAL, SELECT_INDEX, DESELECT_INDEX } from './actions';
import logger from 'redux-logger';

const initialState = {
  currentPal: [],
  selectedIndices: new Set([])
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAL: {
      return {
        ...state,
        currentPal: action.payload.pal
      };
    }
    case SELECT_INDEX: {
      let newSelected = new Set(state.selectedIndices);
      newSelected.add(action.payload.index);
      return {
        ...state,
        selectedIndices: newSelected
      };
    }
    case DESELECT_INDEX: {
      let newSelected = new Set(state.selectedIndices);
      newSelected.delete(action.payload.index);
      return {
        ...state,
        selectedIndices: newSelected
      };
    }
    default: {
      return state;
    }
  }
}

export default createStore(rootReducer, applyMiddleware(logger));
