import { configureStore } from "@reduxjs/toolkit";
import randomArraySlice from "./randomArraySlice";

export const store = configureStore({
    reducer: {
        randomArray: randomArraySlice.reducer,
    },
});