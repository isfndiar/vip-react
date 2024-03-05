/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
const InputForm = forwardRef((props, ref) => {
  const { name, type, placeholder, label, value } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} title={label} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        ref={ref}
        value={value}
      />
    </div>
  );
});

export default InputForm;
