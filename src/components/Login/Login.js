import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import "../../styles/login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, checkAuthentication } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const loginHandler = (event) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = () => {
    axios
      .post("http://localhost:5000/login/", { login, password })
      .then((data) => {
        console.log(data);
        checkAuthentication();
        console.log(isAuthenticated);
      })
      .catch(() => {
        setErrorMessage("Zły login lub hasło!");
      });
  };
  return (
    <div className="prosze">
    <div className="App">
      <div className="main">
        <img className="logo" src="/assets/Logo.svg" />
        <input onChange={loginHandler} placeholder="Login" className="logg" />
        <input
          type="password"
          onChange={passwordHandler}
          placeholder="Hasło"
          className="logg"
        />
        <input type="button" onClick={submitHandler} value="Zaloguj" className="button logg"  />
        <p className="register">Nie masz konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </div>
    </div>
  );
}

export default Login;
