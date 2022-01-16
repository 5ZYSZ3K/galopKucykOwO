import React from "react";
import { NavLink } from "react-router-dom";
//import Menu from "../Utility/Menu";
import "../../styles/home.css";
import Logout from "../Login/Logout";

const Home = () => {
  return (
    <div className="home">
      <div className="cl">
      <div className="div4 k1"><NavLink to="/settings"><img src="/assets/Ustawienia.svg" className="sredniemniejsze"/></NavLink></div>
      <div className="div k2"><NavLink to="/authors"><img src="/assets/tworcy.svg" className="mniejsze"/></NavLink></div>
      <div className="div k3"><Logout /></div>
      <div className="div2 k4"><NavLink to="/todo"><img src="/assets/Planer.svg" className="wiekszemniejsze"/></NavLink></div>
      <div className="div5 k5 podkl"><img src="/assets/Logo2.svg" className="out"/></div>
      <div className="div2 k6"><NavLink to="/reminders"><img src="/assets/Powiadomienia.svg" className="out"/></NavLink></div>
      <div className="div3 k7"><NavLink to="/expenses"><img src="/assets/Wydatki.svg" className="out"/></NavLink></div>
      <div className="div3 k8"><NavLink to="/meters"><img src="/assets/Liczniki.svg" className="wiekszemniejsze"/></NavLink></div>
      <div className="div4 k9"><NavLink to="/tips"><img src="/assets/Porady.svg" className="sredniemniejsze"/></NavLink></div>
    </div>
    </div>
  );
};
export default Home;
