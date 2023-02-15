import { configureStore } from "@reduxjs/toolkit";
import randomArraySliceReducer from "./randomArraySlice";

export const store = configureStore({
    reducer: {
        randomArray: randomArraySliceReducer
    },
});