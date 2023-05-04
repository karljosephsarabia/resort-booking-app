import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import responsiveSlice, { resortListSlice } from "./ResponsiveSlice";

const rootReducer = combineReducers({
    responsive: responsiveSlice.reducer,
    resortList: resortListSlice.reducer
    //add reducers
});

const store = configureStore({
    reducer: rootReducer
});

export default store;