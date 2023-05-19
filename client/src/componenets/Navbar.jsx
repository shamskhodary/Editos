import React from "react";
import { Avatar, AutoComplete, Input, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/navbar.css";
import LogoWriter from "./LogoWriter";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <LogoWriter />
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          className="auto"
          dropdownMatchSelectWidth={500}
          style={{
            width: "40%",
          }}
        >
          <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
        <div className="avatar">
          <Tooltip title="user" style={{ backgroundColor: "red" }}>
            <Avatar icon={<UserOutlined />} />
          </Tooltip>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
