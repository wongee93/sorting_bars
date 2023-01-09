import { createSlice } from "@reduxjs/toolkit";

const bubbleSorting = (state) => {
    const array = [...state];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - (i + 1); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
};

const initialState = [];

const randomArraySlice = createSlice({
    name: "randomArray",
    initialState,
    reducers: {
        setRandomArray: (state, action) => {
            return action.payload;
        },
        bubbleSort: (state) => {
            // console.log('bubble sort working')
            return bubbleSorting(state);
        }
    },
});

export const { setRandomArray, bubbleSort } = randomArraySlice.actions;
export default randomArraySlice;