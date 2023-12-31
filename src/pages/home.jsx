import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col'>Hello ;D
    <div className="button-group mt-6  flex gap-1">
    <Link to={'/login'} className='mx-5 rounded-md flex  border bg-blue-600 items-center h-10 px-6 font-semibold text-white hover:bg-blue-400'>Log In</Link>
     <Link to={'/register'} className='mx-5  border rounded-md bg-blue-600 h-10 px-4 flex items-center font-semibold text-white hover:bg-blue-400'>Sign Up</Link>
    </div>
    </div>
  )
}

export default HomePage