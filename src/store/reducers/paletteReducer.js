import { SET_PALETTE, UPDATE_INDEX } from '../actions';
import doomPalette from '../../default-palettes/doomPal';

const initialState = {
  palette: doomPalette
};

const paletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PALETTE: {
      return {
        ...state,
        palette: action.payload.pal
      };
    }
    case UPDATE_INDEX: {
      const { index, color } = action.payload;

      let newPal = [...state.palette];
      newPal[index] = color;
      return {
        ...state,
        palette: newPal
      };
    }
    default: {
      return state;
    }
  }
};

export default paletteReducer;
