import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Reducers/UserSlice.js';

export const store  = configureStore({
    reducer: {
        user : UserSlice
    },
})