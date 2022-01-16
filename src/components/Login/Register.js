import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import "../../styles/login.css";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerifier, setPasswordVerifier] = useState("");
  const { checkAuthentication } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const loginHandler = (event) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const passwordVerifierHandler = (event) => {
    setPasswordVerifier(event.target.value);
  };
  const submitHandler = () => {
    if (password === passwordVerifier) {
      axios
        .post("http://localhost:5000/login/create", { login, password })
        .then((data) => {
          console.log(data)
          checkAuthentication();
        })
        .catch((e) => {
          console.log(e);
          setErrorMessage(
            "Coś się zepsuło i nie można było zapisać do bazy, więc spróbuj jeszcze raz"
          );
        });
    } else setErrorMessage("Hasła muszą być identyczne!");
  };
  return (
    <div className="prosze">
    <div className="App">
      <div className="main">
        <img className="logo" src="/assets/Logo.svg" />
        <input onChange={loginHandler} placeholder="Login" className="logg"/>
        <input
          type="password"
          onChange={passwordHandler}
          placeholder="Hasło"
          className="logg"
        />
        <input
          type="password"
          onChange={passwordVerifierHandler}
          placeholder="Powtórz hasło"
          className="logg"
        />
        <input type="button" onClick={submitHandler} value="Zarejestruj" className="button logg" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </div>
    </div>
  );
};
export default Register;
