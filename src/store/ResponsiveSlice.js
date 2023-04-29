import { createSlice } from "@reduxjs/toolkit";

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState: window.matchMedia("(min-width: 572px)").matches,
    reducers: {
        setResponsive: (state, action) => {
            return action.payload;
        }
    }
});

export const { setResponsive } = responsiveSlice.actions;

export default responsiveSlice;