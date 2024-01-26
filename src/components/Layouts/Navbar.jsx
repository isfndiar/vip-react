import { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setTotalCart(sum);
  }, [cart]);

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
      <div className="bg-black ms-5 px-6 py-2 rounded-md mr-5">{totalCart}</div>
    </div>
  );
};

export default Navbar;
