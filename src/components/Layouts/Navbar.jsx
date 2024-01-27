import { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import * as Icon from "react-feather";
const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
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
      <div className="bg-black ms-5 px-6 py-2 rounded-md mr-5">{totalCart}</div>
      {/* <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`bg-black  rounded-md mr-2`}
      >
        {isDarkMode ? "Dark" : "Light"}
      </Button> */}
      <select
        className="bg-black ms-5 px-3 py-2 rounded-md mr-5 text-white"
        name="toggle-dark-light"
        onChange={(e) => ToggleDarkMode(e)}
        id="toggle-dl"
      >
        <option value="light" className="text-sm flex">
          Light
          <Icon.Sun />
        </option>
        <option value="dark">
          Dark
          <Icon.Moon />
        </option>
      </select>
    </div>
  );
};

export default Navbar;
