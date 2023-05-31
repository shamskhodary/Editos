import React, { useState } from "react";
import { Avatar, AutoComplete, Input, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/navbar.css";
import LogoWriter from "./LogoWriter";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logout } = useAuth();
  const [imgUrl, setImgUrl] = useState("");

  const content = (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <span style={{ fontSize: "0.6rem", fontWeight: 700 }}>
        Click to change picture
      </span>
    </div>
  );

  const updateImg = async (img) => {
      const pic = await axios.put("/update-user", { image_url: img });
      setUser({ ...user, image_url: pic.data.image});
  };

  const handleUpload = (e) => {
    const data = new FormData();

    data.append("file", e.target.files[0]);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);

    fetch(`${process.env.REACT_APP_CLOUDINARY_UPLOAD_LINK}`, {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImgUrl(data.url);
        updateImg(data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleLogOut = async () => {
    const out = await logout();
    if (out.message) {
      toast.success(out.message);
    }
  };

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
        <Popover content={content} title="Google Account">
          <div className="avatar">
            <input type="file" onChange={handleUpload} />
            {user?.id && (
              <Avatar
                icon={<UserOutlined />}
                src={user.image_url || imgUrl}
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            ) }
          </div>
        </Popover>
          <button onClick={handleLogOut}>logout</button>
      </header>
    </>
  );
};

export default Navbar;
