import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios' ;
import { toast } from 'react-toastify' ;

const initialState = {
    loading : false,
    error : false,
    userdata : null,

    isAuth :false,

    loginloader : false,
    loginerror :false,

    profileloading :false,
    profileError:false

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


export const UserProfile = createAsyncThunk('/api/v1/profile' ,async (userData , {rejectWithValue }) => {
    try {   
        const response = await axios.get('/api/v1/profile' ,userData);
        console.log(' profile response =',response);
        return response.data.user;
        
    } catch (error) {
            console.log('user profile =',error);
    }
})


export const UserSlice = createSlice({
    name : 'userslice',
    initialState,
    reducers:{
        logoutUser : (state) => {
            state.userdata = null;
            state.isAuth = false;
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
            state.isAuth = false;
        })
        builder.addCase(LoginUser.fulfilled ,(state,action) => {
            state.loginloader = false;
            console.log('action login =',action.payload);
            state.userdata = action.payload;
            state.isAuth = true;
            console.log('action login =',action.payload);
            state.loginerror = false;
        })
        builder.addCase(LoginUser.rejected, (state,action) => {
            state.loginloader = false;
            state.isAuth = false;
            state.loginerror = action.payload;
        })

        builder.addCase(UserProfile.pending ,(state,action) => {
            state.profileloading = true;
            state.isAuth = false;
        })
        builder.addCase(UserProfile.fulfilled ,(state,action) => {
            state.profileloading = false;
            state.isAuth = true;
            state.userdata = action.payload;
            state.loginerror = false;
        })
        builder.addCase(UserProfile.rejected, (state,action) => {
            state.profileloading = false;
            state.isAuth = false;
            state.loginerror = action.payload;
        })

    }

})

export const  { logoutUser } = UserSlice.actions;

export default UserSlice.reducer;