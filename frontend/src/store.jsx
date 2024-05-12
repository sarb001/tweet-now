import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './Reducers/UserReducer.jsx';

export const store  = configureStore({
    reducer: {
        user : UserReducer
    },
})