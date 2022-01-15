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
          checkAuthentication();
        })
        .catch(() => {
          setErrorMessage(
            "Coś się zepsuło i nie można było zapisać do bazy, więc spróbuj jeszcze raz"
          );
        });
    } else setErrorMessage("Hasła muszą być identyczne!");
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
        <input
          type="password"
          onChange={passwordVerifierHandler}
          placeholder="repeat password"
        />
        <input type="button" onClick={submitHandler} value="Zarejestruj" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </div>
  );
};
export default Register;
