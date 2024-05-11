import React from 'react'

const Login = () => {

   const loginhandler = () => {

   }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>

        <div> Login Now </div>
       <form onSubmit={loginhandler}>

          <div className='m-4'>
            <label> Email ID </label>
            <input type = "email" placeholder='Enter emailID...' />
          </div>

          <div className='m-4'>
            <label> Password </label>
            <input type = "password" placeholder='Enter password...' />
          </div>

          <div className='flex flex-col gap-5'>
            <div>
             <button className='p-3 bg-lime-500' type = "submit"> Login Now </button>
            </div>
            <div>
             <a className='p-3 bg-black text-white' href= "/signup"> Create New Account  </a>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login