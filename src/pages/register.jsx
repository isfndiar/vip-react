import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'
function RegisterPage() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
    <AuthLayouts title={"Register"} type='register' >
        <FormRegister text='Register' /> 
    </AuthLayouts>
      </div>
  )
}

export default RegisterPage