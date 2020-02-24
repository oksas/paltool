import {
  SET_IS_SELECTING,
  SET_SELECTED_START,
  SET_SELECTED_END
} from '../actions';

const initialState = {
  isSelecting: false,
  selectedRangeStart: 0,
  selectedRangeEnd: 0
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_SELECTING: {
      const { isSelecting } = action.payload;

      return {
        ...state,
        isSelecting
      };
    }
    case SET_SELECTED_START: {
      const { index } = action.payload;
      return {
        ...state,
        selectedRangeStart: index,
        selectedRangeEnd: index
      };
    }
    case SET_SELECTED_END: {
      const { index } = action.payload;

      return {
        ...state,
        selectedRangeEnd: index
      };
    }
    default: {
      return state;
    }
  }
};

export default selectionReducer;
