import { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import * as Icon from "react-feather";
import { useTotalPrice } from "../../context/TotalPriceContext";
const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { total } = useTotalPrice();
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

  const ToggleDarkMode = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "light":
        setIsDarkMode(false);
        break;
      case "dark":
        setIsDarkMode(true);
        break;
      default:
        setIsDarkMode(false);
    }
  };

  return (
    <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-7">
      {username}
      <Button classname="bg-black ms-5" onClick={handleLogOut}>
        Log Out
      </Button>
      <div className="bg-black ms-5 px-6 py-2 rounded-md mr-20">
        item : {totalCart} | Total Price : ${" "}
        {total.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </div>
      <div
        className="bg-black  px-4 py-2 rounded-md  text-white relative cursor-pointer"
        name="toggle-dark-light"
        onClick={() => setIsOpen((open) => !open)}
        id="toggle-dl"
      >
        {isDarkMode ? "Dark" : "Light"}
        <div
          className={`absolute  left-0 bg-black   rounded-md ${
            isOpen ? "px-[0.9rem] py-2" : ""
          }`}
        >
          {isOpen && (
            <>
              <div className="" onClick={() => setIsDarkMode(false)}>
                Light
              </div>
              <div onClick={() => setIsDarkMode(true)}>Dark</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
