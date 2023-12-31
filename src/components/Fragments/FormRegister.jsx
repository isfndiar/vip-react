import InputForm from '../Elements/Input'
import Button from '../Elements/Button'
import SwitchPage from '../Elements/SwitchAccount';

function FormRegister(props) {
    const {text} = props;
    
    const handleLogin = e => {
      e.preventDefault()

      localStorage.setItem('email', e.target.email.value)
      localStorage.setItem('fullname', e.target.text.value)
      localStorage.setItem('password', e.target.password.value)
      localStorage.setItem('confirm-password', e.target.confirmPassword.value)

      window.location.href = '/products'
    }
  return (
    <form action="" onSubmit={handleLogin} >
    <InputForm label="Full Name" name="text" type="text" placeholder="type your name" />
    <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
    <InputForm label="Password" name="password" type="password" placeholder={`********`} />
    <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder={`********`} />
    <Button classname="bg-blue-600 w-full" type='submit'>{text}</Button>
  </form>
  )
}

export default FormRegister