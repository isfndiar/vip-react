import { NavLink, Outlet } from "react-router-dom"

function SwitchPage(props) {
    const {text, navlink} = props;
  return (
    <>
    <NavLink to={navlink}>{text}</NavLink>
    <Outlet />
    </>
  )
}

export default SwitchPage