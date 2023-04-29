import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import responsiveSlice from "./ResponsiveSlice";

const rootReducer = combineReducers({
    responsive: responsiveSlice.reducer
    //add reducers
});

const store = configureStore({
    reducer: rootReducer
});

export default store;