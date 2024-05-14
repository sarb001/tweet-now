import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import { LoginUser } from '../Reducers/UserSlice.js';
import { useNavigate ,Link } from 'react-router-dom';

const Login = () => {

   const [username,setusername] = useState('');
   const [password,setpassword] = useState('');

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loginloader , loginerror ,userdata }  =  useSelector(state => state?.user);

   console.log('login loader=',loginloader);
   console.log('login userdata =',userdata);

   const loginhandler = async(e) => {
     e.preventDefault();
     console.log('email|pass =',username || password);
     await dispatch(LoginUser({username,password}));
     setusername('');
     setpassword('');
     navigate('/');
   }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>

        <div> Login Now </div>
       <form onSubmit={loginhandler}>

          <div className='my-4'>
                  <label> Username </label>
                  <input type = "text" placeholder='Enter username...'
                  value = {username}
                  onChange={(e) => setusername(e.target.value)}
                  />
                </div>

          <div className='m-4'>
            <label> Password </label>
            <input type = "password" placeholder='Enter password...' 
            value = {password}
            onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-5'>
            <div>
             <button className='p-3 bg-lime-500' type = "submit">
               {loginloader ? "......." : "Login Now"}
             </button>
            </div>
            <div>
             <Link to='/signup' className='p-3 bg-black text-white'> Create New Account </Link>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login