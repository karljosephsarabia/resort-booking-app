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

export const resortListSlice = createSlice({
    name: 'resortList',
    initialState: [],
    reducers: {
        setResortList: (state, action) => {
            // console.log(action.payload);
            return action.payload;
        }
    }
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            // console.log(action.payload);
            return action.payload;
        }
    }
});

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        bookStatus: false,
        selectedResort: []
    },
    reducers: {
        setBook: (state, action) => {
            console.log(action.payload);
            return action.payload;
        }
    }
});

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        sectionIdToScrollTo: null
    },
    reducers: {
        scrollToSection: (state, action) => {
            state.sectionIdToScrollTo = action.payload;
        }
    }
});

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState: '',
    reducers: {
        setUserToken: (state, action) => {
            console.log(action.payload);
            return action.payload;
        }
    }
});

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: [],
    reducers: {
        setUserInfo: (state, action) => {
            console.log(action.payload);
            return action.payload;
        }
    }
});


export const { scrollToSection } = bookingSlice.actions;
export const { setResponsive } = responsiveSlice.actions;
export const { setResortList } = resortListSlice.actions;
export const { setSearch } = searchSlice.actions;
export const { setBook } = bookSlice.actions;
export const { setUserToken } = userTokenSlice.actions;
export const { setUserInfo } = userInfoSlice.actions;

export default responsiveSlice;