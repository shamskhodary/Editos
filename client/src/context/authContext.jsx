import { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get("/user/me");
      setUser(user.data.data);
      console.log(user.data);
    };
    getUser();
  }, []);

  return { user };
};

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { ProvideAuth, useAuth };
