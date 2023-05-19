import React from "react";
import "../styles/signup.css";
import { Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import LogoWriter from "../componenets/LogoWriter";

const Login = () => {
  return (
    <div className="signup">
      <div className="signup-form">
        <LogoWriter />
        <label>
          Email
          <Input placeholder="Input Email" />
        </label>
        <label>
          Password
          <Input.Password
            placeholder="Input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </label>

        <Button className="submit-button" type="primary" value="large">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
