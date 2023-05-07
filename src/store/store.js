import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import responsiveSlice, { resortListSlice, searchSlice, bookSlice } from "./ResponsiveSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    responsive: responsiveSlice.reducer,
    resortList: resortListSlice.reducer,
    search: searchSlice.reducer,
    book: bookSlice.reducer
    //add reducers
});

function clearReducer(state, action) {
    if (action.type === 'CLEAR_SEARCH_STATE') {
        state = {
            ...state,
            book: bookSlice.initialState
        };
    }
    return rootReducer(state, action);
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['responsive', 'resortList', 'search']
};

const persistedReducer = persistReducer(persistConfig, clearReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);