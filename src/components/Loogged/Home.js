import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="div">
        <NavLink to="/todo"><img className="blue" src="/assets/Planer.svg" /></NavLink>
        </div>
        <br />
        <NavLink to="/reminders">Przypomnienia</NavLink>
        <br />
        <NavLink to="/expenses">Wydatki</NavLink>
        <br />
        <NavLink to="/meters">Liczniki</NavLink>
        <br />
        <NavLink to="/tips">Porady</NavLink>
      </div>
    </div>
  );
};
export default Home;
