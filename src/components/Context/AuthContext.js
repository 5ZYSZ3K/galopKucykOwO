import axios from "axios";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const REACT_APP_LOGIN_URI = "http://localhost:5000/login/";
  const [isAuthenticated, setAuthentication] = useState(undefined);
  const checkAuthentication = () => {
    axios
      .get(`${REACT_APP_LOGIN_URI}check`)
      .then((data) => {
        setAuthentication(data.data);
      })
      .catch(() => setAuthentication(false));
  };
  useEffect(() => {
    checkAuthentication();
  });
  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthentication }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
