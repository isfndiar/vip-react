import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";

const Navbar = () => {
  const username = useLogin();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullname");
    localStorage.removeItem("text");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-7">
      {username}
      <Button classname="bg-black ms-5" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
};

export default Navbar;
