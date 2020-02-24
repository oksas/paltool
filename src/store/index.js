import { createStore, applyMiddleware, combineReducers } from 'redux';
import { SET_PALETTE, UPDATE_INDEX } from './actions';

import paletteReducer from './reducers/paletteReducer';
import selectionReducer from './reducers/selectionReducer';
import undoReducer from './reducers/undoReducer';
import editorReducer from './reducers/editorReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true
});

// The undo reducer needs a whitelist of actions to know when to
// shift the present to the past and add a new present. Without this
// whitelist, the past/present state of the undoReducer get modified
// on *every* action, which is undesirable; only actions that matter
// to the undo-ified reducer should affect that reducer's state history.
let paletteWhitelist = new Set();
paletteWhitelist.add(SET_PALETTE);
paletteWhitelist.add(UPDATE_INDEX);

const rootReducer = combineReducers({
  palette: undoReducer(paletteReducer, paletteWhitelist),
  selection: selectionReducer,
  editor: editorReducer
});

export default createStore(rootReducer, applyMiddleware(logger));
