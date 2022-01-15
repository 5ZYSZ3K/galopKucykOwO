import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <NavLink to="/todo">Planer</NavLink>
      <br />
      <NavLink to="/reminders">Przypomnienia</NavLink>
      <br />
      <NavLink to="/expenses">Wydatki</NavLink>
      <br />
      <NavLink to="/meters">Liczniki</NavLink>
      <br />
      <NavLink to="/tips">Porady</NavLink>
    </div>
  );
};
export default Home;
