import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import {  UserProfile, logoutUser } from '../Reducers/UserSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  
    const { userdata , isAuth } = useSelector(state => state?.user);

    console.log('isAuth =',isAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logouthandler = () => {
         dispatch(logoutUser());
        toast.success("Logged Out");
        navigate('/login');
    }

     useEffect(() => {
       dispatch(UserProfile());
    },[dispatch])

  return (
    <div className='flex justify-between px-8 py-4 bg-slate-400 font-bold '>
          <Link to = "/"> Prettier </Link>
      <div className='flex flex-row gap-10'>
        <Link to = "/about">   About </Link>
        <Link to = "/contact"> Contact </Link>
        <a>
          { isAuth ? (
            <>
            <div onClick={logouthandler}> Logout </div>
            </>
          ) : 
            (
              <>
               <Link to = "/login"> Login </Link>
              </>
            )
          }
        </a>

      </div>
    </div>
  )
}

export default Navbar