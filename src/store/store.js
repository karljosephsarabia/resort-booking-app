import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import responsiveSlice, { resortListSlice, searchSlice, bookSlice, bookingSlice, userTokenSlice, userInfoSlice } from "./ResponsiveSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    responsive: responsiveSlice.reducer,
    resortList: resortListSlice.reducer,
    search: searchSlice.reducer,
    book: bookSlice.reducer,
    booking: bookingSlice.reducer,
    userToken: userTokenSlice.reducer,
    userInfo: userInfoSlice.reducer
    //add reducers
});

// function clearReducer(state, action) {
//     if (action.type === 'CLEAR_SEARCH_STATE') {
//         state = {
//             ...state,
//             book: bookSlice.initialState
//         };

//     }
//     return rootReducer(state, action);
// }

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['responsive', 'resortList', 'search', 'booking', 'userToken', 'userInfo']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);


// window.addEventListener('beforeunload', handleBeforeUnload);

// function handleBeforeUnload() {
//     persistor.purge().then(() => {
//         console.log('Redux Persist data cleared successfully.');
//     })
// }