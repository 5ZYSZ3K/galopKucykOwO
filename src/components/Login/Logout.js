import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";

export default function Logout() {
  const [errorMessage, setErrorMessage] = useState("");
  const { checkAuthentication } = useContext(AuthContext);
  const handleClick = () => {
    axios
      .post(`http://localhost:5000/login/logout`)
      .then(() => {
        checkAuthentication();
      })
      .catch(() => {
        checkAuthentication();
        setErrorMessage("Internal server error");
      });
  };
  return (
    <div className="logout">
      <button onClick={handleClick} className="exit"><img src="/assets/Wyloguj.svg" className="out"/></button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
