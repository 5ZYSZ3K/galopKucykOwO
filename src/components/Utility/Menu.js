import { NavLink } from "react-router-dom";
import Logout from "../Login/Logout";

const Menu = () => {
  return (
    <div>
      <NavLink to="/settings">Ustawienia</NavLink>
      <br />
      <NavLink to="/authors">Twórcy</NavLink>
      <Logout />
    </div>
  );
};

export default Menu;
