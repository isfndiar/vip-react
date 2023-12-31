import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

function FormLogin(props) {
    const {text} = props;

    const handleLogin = e => {
      e.preventDefault()

      localStorage.setItem('email', e.target.email.value)
      localStorage.setItem('password', e.target.password.value)

      window.location.href = '/products'
    }
  return (
    <form action="" onSubmit={handleLogin} >
    <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
    <InputForm label="Password" name="password" type="password" placeholder={`********`} />
    <Button classname="bg-blue-600 w-full" type='submit'>{text}</Button>
  </form>
  )
}

export default FormLogin