import { Link } from 'react-router-dom'

function AuthLayouts(props) {
    const {children, title, type} = props;
  return (
    <div className="w-full max-w-xs ">
          <div className="text-3xl text-blue-600">{title}</div>
          <p className="font-medium text-slate-500 mb-4">Welcome, Please enter your details</p>
          {children}
          
          <p className='text-sm mt-5 text-center'>
          {type === 'login' ? "Don't have an account?" : "Already have an account?"} <Link to={type === 'login' ? '/register' : '/login'} className=' text-blue-600 font-bold'>{type === 'login' ? 'Log in' : 'Sign Up'}</Link>
        </p>
        </div>
  )
}

export default AuthLayouts