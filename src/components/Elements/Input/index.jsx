import Input from './Input'
import Label from './Label'
function InputForm(props) {
    const {name, type, placeholder, label} = props;
  return (
    <div className="mb-6">
        <Label htmlFor={name} title={label}  />
        <Input type={type} name={name} placeholder={placeholder} id={name} />
    </div>
  )
}



export default InputForm;