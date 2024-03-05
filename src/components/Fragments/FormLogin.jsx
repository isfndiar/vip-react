import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

function FormLogin(props) {
  const { text } = props;
  const [loginFailed, setLoginFailed] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.open("/products");
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Usename"
        name="username"
        type="text"
        placeholder="johnd"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder={`m38rmF$`}
        value={`m38rmF$`}
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        {text}
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}

export default FormLogin;
