import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios' ;
import { toast } from 'react-toastify' ;

const initialState = {
    loading : false,
    error : false,
    userdata : null,

    loginloader : false,
    loginerror :false,

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
});


export const LoginUser = createAsyncThunk('/api/v1/login',async(userData,{rejectWithValue }) => {
    try {
        console.log('user data login =',userData);
        const { username , password } = userData;
        const response = await axios.post('/api/v1/login',userData);
        console.log(' login user =' ,response.data.user);
        toast.success("User Created Successfully");
        return response.data.user;

    } catch (error) {
          return  console.log('login user error=',error);
    }
})


// export const 


export const UserSlice = createSlice({
    name : 'userslice',
    initialState,
    reducers:{
        logoutUser : (state) => {
            state.userdata = null;
        }
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


        builder.addCase(LoginUser.pending ,(state,action) => {
            state.loginloader = true;
        })
        builder.addCase(LoginUser.fulfilled ,(state,action) => {
            state.loginloader = false;
            console.log('action login =',action.payload);
            state.userdata = action.payload;
            console.log('action login =',action.payload);
            state.loginerror = false;
        })
        builder.addCase(LoginUser.rejected, (state,action) => {
            state.loginloader = false;
            state.loginerror = action.payload;
        })

    }

})

export const  { logoutUser } = UserSlice.actions;

export default UserSlice.reducer;