import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios' ;

const initialState = {
    loading : false,
    error : false,
    userdata : null,
}   

export const RegisterUser = createAsyncThunk('/api/v1/signup',async(userData,{rejectWithValue }) => {
    try {

        const response = await axios.post('/api/v1/signup',userData);
        console.log('user resp =',response);
        return true;

    } catch (error) {
            console.log('register user error=',error);
    }
})


export const ReducerSlice = createSlice({
    name:'UserSlice',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(RegisterUser.pending ,(state,action) => {
            state.loading = true;
        })
        builder.addCase(RegisterUser.fulfilled ,(state,action) => {
            state.loading = false;
            state.userdata = action.payload;
            state.error = false;
        })
        builder.addCase(RegisterUser.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})
