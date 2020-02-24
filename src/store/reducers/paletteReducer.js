import { SET_PALETTE, UPDATE_INDEX } from '../actions';
import doomPalette from '../../default-palettes/doomPal';
import { conditionalExpression } from '@babel/types';

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

      const colors = ['r', 'g', 'b'];
      for (let piece of colors) {
        // @TODO
        // This is not the right way to handle "empty" color values.
        // For now, I'm just letting the isNaN error persist, but
        // the right way to fix it in the future is to rework the way
        // that palette changes are handled so that changes to a color
        // only happen once the user unfocuses one of the RGB inputs.
        // But to do this, we'll need to rework the way in-progress
        // edits are displayed and handled, maybe with some sort of
        // second "maybe edit" layer on top of whatever selected indices
        // are there? The same logic could then be reused for other
        // index range editing operations in the future.
        // if (isNaN(color[piece])) color[piece] = 0;
        if (color[piece] < 0 || color[piece] > 255) return state;
      }

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
