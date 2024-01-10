import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
const InputForm = forwardRef((props, ref) => {
  const { name, type, placeholder, label } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} title={label} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
