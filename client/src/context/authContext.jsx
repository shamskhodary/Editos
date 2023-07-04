import { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (payload) => {
    try {
      const userData = await axios.post("/signup", payload);
      if (userData.status === 201) {
        setUser(userData.data.user);
      }
      return { isLogged: true, message: userData.data.message };
    } catch (error) {
      setUser(null);
      return { isLogged: false, message: error.response.data.message };
    }
  };

  const login = async (payload) => {
    try {
      const userData = await axios.post("/signin", payload);
      if (userData.status === 200) {
        setUser(userData.data.user);
      }
      return { isLogged: true, message: userData.data.message };
    } catch (error) {
      setUser(null)
      return { isLogged: false, message: error.response.data.message };
    }
  };


  const logout = async() => {
      const signout = await axios.post('/signout');
      setUser(null)
      return {message: signout.data.message}
  }
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get("/user/me");
        setLoading(false)
        setUser(user.data.data);
      } catch (error) {
       setUser(null);
      }
    };
    getUser();
  }, []);

  return { user, loading, signup, login, setUser, logout };
};

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { ProvideAuth, useAuth };
