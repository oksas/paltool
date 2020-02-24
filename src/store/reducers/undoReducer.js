import { UNDO, REDO } from '../actions';

const undoReducer = (reducer, actionWhitelist) => {
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

        const newFuture = [...state.future];
        newFuture.unshift(state.present);

        return {
          past: state.past.slice(0, state.past.length - 1),
          present: state.past[state.past.length - 1],
          future: newFuture
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
        if (actionWhitelist && actionWhitelist.has(action.type)) {
          return {
            past: [...state.past, state.present],
            present: reducer(state.present, action),
            future: []
          };
        } else {
          return state;
        }
      }
    }
  };
};

export default undoReducer;
