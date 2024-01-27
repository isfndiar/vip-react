import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";

function LoginPage() {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex w-full min-h-screen justify-center items-center ${
        isDarkMode ? "bg-black" : ""
      }`}
    >
      <AuthLayouts title={"Login"} type={"login"}>
        <FormLogin text="Login" />
      </AuthLayouts>
    </div>
  );
}

export default LoginPage;
