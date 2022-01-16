import { NavLink } from "react-router-dom";
import Logout from "../Login/Logout";

const Menu = () => {
  return (
    <div className="nav">
      <NavLink to="/settings" className="a" ><img src="/assets/Ustawienia.svg" className="settings"/></NavLink>
      <NavLink to="/authors"><img src="/assets/Ustawienia.svg" className="authors"/></NavLink>
      <Logout />
    </div>
  );
};

export default Menu;
