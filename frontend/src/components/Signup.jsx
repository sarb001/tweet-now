import React from 'react'

const Signup = () => {

   const formsubmithandler = () => {

   }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>

       <div> Signup Now </div>

        <div>

            <form onSubmit={formsubmithandler}>

                <div className='my-5'>
                  <label> Username </label>
                  <input type = "text" placeholder='Enter username...' />
                </div>

                <div className='my-5'>
                  <label> Email ID </label>
                  <input type = "email" placeholder='Enter emailID...' />
                </div>

                <div className='my-5'>
                  <label> Password </label>
                  <input type = "password" placeholder='Enter password...' />
                </div>

              <div className='flex flex-col gap-5'>
                <button className='p-3 bg-black text-white ' type = "submit"> Create an Account </button>
                <div>
                <a className='p-3 bg-black text-white'  href= "/login"> Login Now </a>
                </div>
              </div>
              
            </form>

        </div>

     </div>
    </>
  )
}

export default Signup
