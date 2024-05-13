import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LogoutUser } from '../Reducers/UserSlice';

const Navbar = () => {

    const isAuth = true;

    const { userdata } = useSelector(state => state?.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logouthandler = async(req,res) => {
        await  dispatch(LogoutUser());
        navigate('/login');
    }
 
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
        <Link to = "/login"> 
        </Link>
      </div>
    </div>
  )
}

export default Navbar