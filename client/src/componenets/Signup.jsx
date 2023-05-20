import React, { useState } from "react";
import "../styles/signup.css";
import { Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import LogoWriter from "../componenets/LogoWriter";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";


const Signup = () => {
  const auth = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const submitUser = await auth.signup(user)

    if (submitUser.isLogged === true) {
      toast.success(submitUser.message);
    } else {
      toast.error(submitUser.message)
    }
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <LogoWriter />
        <label>
          Username
          <Input
            placeholder="Input Username"
            name="username"
            onChange={handleChange}
            value={user.username}
            type="text"
          />
        </label>
        <label>
          Email
          <Input
            placeholder="Input Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
          />
        </label>
        <label>
          Password
          <Input.Password
            name="password"
            placeholder="Input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={user.password}
            onChange={handleChange}
          />
        </label>

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

export default Signup;
