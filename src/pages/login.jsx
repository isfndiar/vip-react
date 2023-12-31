import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'

function LoginPage() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
    <AuthLayouts title={"Login"} type={'login'}>
        <FormLogin text='Login' />
    </AuthLayouts>
      </div>
  )
}

export default LoginPage