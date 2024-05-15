import React from 'react'
import { useSelector } from 'react-redux';

const About = () => {

  const { userdata } = useSelector(state => state?.user);
  console.log('user =',userdata);

  return (
    <div>
      <h2>  Accesing User  Profile </h2>
      <div className='text-4xl'>
        Name is -  {userdata?.username}
        Email is - {userdata?.email}
      </div>
    </div>
  )
}

export default About