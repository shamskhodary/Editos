import React from "react";
import { Avatar, AutoComplete, Input, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/navbar.css";
import Typewriter from 'typewriter-effect';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Typewriter
          style={{color: "white"}}
            onInit={(typewriter) => {
              typewriter
                .typeString("Editor")
                .pauseFor(500)
                .deleteChars(1)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .typeString("s")
                .start();
            }}
          />
        </div>
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
        <Tooltip title="user" style={{backgroundColor: "red"}}>
        <Avatar icon={<UserOutlined />} />
        </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Navbar;
