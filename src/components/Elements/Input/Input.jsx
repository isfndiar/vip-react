/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name, value } = props;
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
    />
  );
});

export default Input;
