import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import SwitchPage from "../Elements/SwitchAccount";
import { useEffect, useRef } from "react";

function FormRegister(props) {
  const { text } = props;

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("fullname", e.target.text.value);
    localStorage.setItem("password", e.target.password.value);

    window.location.href = "/products";
  };

  const fullNameRef = useRef(null);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  return (
    <form action="" onSubmit={handleLogin}>
      <InputForm
        label="Full Name"
        name="text"
        type="text"
        placeholder="type your name"
        ref={fullNameRef}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder={`********`}
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder={`********`}
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        {text}
      </Button>
    </form>
  );
}

export default FormRegister;
