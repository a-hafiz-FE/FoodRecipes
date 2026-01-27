import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from '../features/quotes/qutesSlice'

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
    }
});
