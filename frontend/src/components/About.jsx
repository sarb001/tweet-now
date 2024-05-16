import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserProfile } from '../Reducers/UserSlice';

const About = () => {

  const { userdata } = useSelector(state => state?.user);
  console.log('user =',userdata);

   const dispatch = useDispatch();

   const makerequest = () => {
      dispatch(UserProfile());
   }

  return (
    <div>
      <h2>  Accesing User  Profile </h2>
      <div className='text-4xl'>
        Name is -  {userdata?.username}
        Email is - {userdata?.email}
      </div>

        <div>
          <button className='bg-slate-500 p-4' onClick={makerequest}> Make Request  </button>
        </div>

    </div>
  )
}

export default About