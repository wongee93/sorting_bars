import { createSlice } from '@reduxjs/toolkit';
import resetArray from '../SortLogic/resetArray';

export const initialState = resetArray(20);

export const randomArraySlice = createSlice({
    name: 'randomArray',
    initialState,
    reducers: {
        bubCompareReducer: (state, action) => {
            const { selectedIdx, compareIdx, defaultIdx, swapIdx } = action.payload;
            if (selectedIdx >= 0) {
                state[selectedIdx].state = { color: '#FF5675' };
            }

            if (compareIdx >= 0) {
                state[compareIdx].state = { color: '#F06E6E' };
            }

            if (swapIdx >= 0) {
                let temp = { ...state[selectedIdx] };
                state[selectedIdx] = state[swapIdx];
                state[selectedIdx].state = { color: '#7878FF' };
                state[swapIdx] = temp;
            }

            if (defaultIdx >= 0) {
                state[defaultIdx].state = { color: 'pink' };
            }
        },
        initialArrayReducer: () => {
            const initialRandomArray = resetArray(20);
            return initialRandomArray;
        },
        reset: () => {
            const resetRandomArray = resetArray(20);
            return resetRandomArray;
        },
    },
});

export const {
    bubCompareReducer,
    initialArrayReducer,
    reset
} = randomArraySlice.actions;

export default randomArraySlice.reducer;