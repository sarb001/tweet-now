import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

const Home = () => {
  return (
    <div className='container m-5'>
         <h1>  Main Home Page </h1>

      <div className='bg-slate-200 px-64 py-3 text-black grid grid-cols-4 w-full h-[100vh]'>
       <div className='col-span-1 border-2 border-black'> <FirstSection /> </div>
       <div className='col-span-2 border-2 border-black'> <SecondSection /> </div>
       <div className='col-span-1 border-2 border-black'>  <ThirdSection /> </div>
      </div>

    </div>
  )
}

export default Home