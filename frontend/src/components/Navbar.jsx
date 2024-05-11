import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-slate-400 font-bold '>
          <Link to = "/"> Prettier </Link>
      <div className='flex flex-row gap-10'>
        <Link to = "/about">   About </Link>
        <Link to = "/contact"> Contact </Link>
        <Link to = "/login"> Login </Link>
      </div>
    </div>
  )
}

export default Navbar