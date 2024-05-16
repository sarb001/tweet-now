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
        const response = await axios.post('http://localhost:4000/api/v1/signup',{
                headers :{
                    'Content-Type' : 'application/json',
                },
                withCredentials : true,
                params : userData,
            });
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
        const response = await axios.post('http://localhost:4000/api/v1/login',userData ,{
            withCredentials : true,
        });
        console.log(' login user =' ,response.data.user);
        toast.success("User Created Successfully");
        return response.data.user;

    } catch (error) {
          return  console.log('login user error=',error);
    }
})


export const LogoutUser = createAsyncThunk('/api/v1/logout',async(userData,{rejectWithValue }) => {
    try {
        console.log('logout userdata =');    
        const response = await axios.get('http://localhost:4000/api/v1/logout' ,{
            headers :{
                'Content-Type' : 'application/json',
            },
            withCredentials : true,
            params : userData
        });
        console.log('response =');
        return true;

    } catch (error) {
            console.log('logout error user = ',error);
    }   
})

export const UserProfile = createAsyncThunk('/api/v1/profile' ,async (userData , {rejectWithValue }) => {
    try {   
        const response = await axios.get('http://localhost:4000/api/v1/profile' , {
            headers :{
                'Content-Type' : 'application/json',
            },
            withCredentials : true,
            params : userData
        });

        console.log(' profile response =',response);
        return response.data.user;
        
    } catch (error) {
         return  console.log('user profile =',error);
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

        builder.addCase(LogoutUser.pending ,(state,action) => {
            state.isAuth = true;
        })
        builder.addCase(LogoutUser.fulfilled ,(state,action) => {
            state.userdata = null;
            state.isAuth = false;
        })
        builder.addCase(LogoutUser.rejected, (state,action) => {
            state.isAuth = false;
        })


        builder.addCase(UserProfile.pending ,(state,action) => {
            state.profileloading = true;
        })
        builder.addCase(UserProfile.fulfilled ,(state,action) => {
            state.profileloading = false;
            state.isAuth = true;
            console.log('action profile =',action.payload);
            state.userdata = action.payload;
            console.log('action profile =',action.payload);
            state.profileError = false;
        })
        builder.addCase(UserProfile.rejected, (state,action) => {
            state.profileloading = false;
            state.isAuth = false;
            state.profileError = action.payload;
        })

    }

})


export default UserSlice.reducer;