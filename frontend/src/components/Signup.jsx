import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import { useNavigate ,Link  } from 'react-router-dom' ;
import { RegisterUser } from '../Reducers/UserSlice';


const Signup = () => {

   const[username,setusername] = useState('');
   const[email,setemail] = useState('');
   const[password,setpassword] = useState('');

   const navigate = useNavigate();
   const  dispatch = useDispatch();
   const { loading ,error ,userdata }  =  useSelector(state => state?.user);

    console.log(' loading   = ', loading);
    console.log(' userdata  = ', userdata);
  

   const formsubmithandler = async(e) => {
        e.preventDefault();
        console.log('user|email|pass =',username,email,password);
        await dispatch(RegisterUser({username,email,password}))
        setemail('');
        setusername('');
        setpassword('');
        navigate('/login');
   }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>

       <div> Signup Now </div>

        <div>

            <form onSubmit={formsubmithandler}>

                <div className='my-5'>
                  <label> Username </label>
                  <input type = "text" placeholder='Enter username...'
                  value = {username}
                  onChange={(e) => setusername(e.target.value)}
                  />
                </div>

                <div className='my-5'>
                  <label> Email ID </label>
                  <input type = "email" placeholder='Enter emailID...' 
                   value = {email}
                   onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className = 'my-5'>
                  <label> Password </label>
                  <input type = "password" placeholder='Enter password...' 
                  value = {password}
                  onChange={(e) => setpassword(e.target.value)} 
                  />
                </div>

              <div className='flex flex-col gap-5'>
                <button className='p-3 bg-black text-white ' type = "submit">
                   {loading ? "Creating..." : 'Create an Account' }
                </button>
                <div>
                <Link  to='/login' className='p-3 bg-black text-white' > Login Now  </Link>
                </div>
              </div>
              
            </form>

        </div>

     </div>
    </>
  )
}

export default Signup
