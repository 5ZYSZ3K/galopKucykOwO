import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import "../../styles/login.css";

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
    <div className="App">
      <div>
        <input onChange={loginHandler} placeholder="login" />
        <input
          type="password"
          onChange={passwordHandler}
          placeholder="password"
        />
        <input type="button" onClick={submitHandler} value="Zaloguj" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </div>
  );
}

export default Login;
