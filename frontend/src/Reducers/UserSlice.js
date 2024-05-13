import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios' ;
import { toast } from 'react-toastify' ;

const initialState = {
    loading : false,
    error : false,
    userdata : null,
}   

export const RegisterUser = createAsyncThunk('/api/v1/signup',async(userData,{rejectWithValue }) => {
    try {
        console.log('user data =',userData);
        const { username,email,password } = userData;
        const response = await axios.post('/api/v1/signup',userData);
        console.log('user resp =',response.data.user);
        toast.success("User Created Successfully");
        return true;

    } catch (error) {
            console.log('register user error=',error);
    }
})


export const UserSlice = createSlice({
    name : 'userslice',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(RegisterUser.pending ,(state,action) => {
            state.loading = true;
        })
        builder.addCase(RegisterUser.fulfilled ,(state,action) => {
            state.loading = false;
            console.log('action 1 =',action.payload);
            state.userdata = action.payload;
            console.log('action 2 =',action.payload);
            state.error = false;
        })
        builder.addCase(RegisterUser.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default UserSlice.reducer;