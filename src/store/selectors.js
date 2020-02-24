import { createSelector } from 'reselect';

const getSelectedRangeStart = state => state.selection.selectedRangeStart;
const getSelectedRangeEnd = state => state.selection.selectedRangeEnd;

export const getSelectedIndices = createSelector(
  [getSelectedRangeStart, getSelectedRangeEnd],
  (selectedRangeStart, selectedRangeEnd) => {
    let selectedIndices = new Set();
    if (selectedRangeStart === null && selectedRangeEnd === null) {
      return selectedIndices;
    }

    if (selectedRangeStart === selectedRangeEnd) {
      selectedIndices.add(selectedRangeStart);
    } else if (selectedRangeStart < selectedRangeEnd) {
      // fill set from start to end inclusive
      for (let i = selectedRangeStart; i <= selectedRangeEnd; i++) {
        selectedIndices.add(i);
      }
    } else if (selectedRangeEnd < selectedRangeStart) {
      // fill set from end to start inclusive
      for (let i = selectedRangeEnd; i <= selectedRangeStart; i++) {
        selectedIndices.add(i);
      }
    }

    return selectedIndices;
  }
);
