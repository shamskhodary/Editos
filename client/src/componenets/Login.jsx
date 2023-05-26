import React, { useState } from "react";
import "../styles/signup.css";
import { Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import LogoWriter from "../componenets/LogoWriter";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const submitUser = await auth.login(user);

    if (submitUser.isLogged === true) {
      toast.success(submitUser.message);
    } else {
      toast.error(submitUser.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <LogoWriter />
        <label>
          Email
          <Input
            placeholder="Input Email"
            onChange={handleChange}
            name="email"
            type="email"
            value={user.email}
          />
        </label>
        <label>
          Password
          <Input.Password
            placeholder="Input password"
            name="password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={handleChange}
            value={user.password}
          />
        </label>

        <Link to="/signup">New to Editos?</Link>
        <Button
          className="submit-button"
          type="primary"
          value="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
