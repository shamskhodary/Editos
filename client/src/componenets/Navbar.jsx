import React, { useState } from "react";
import { Avatar, AutoComplete, Input, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/navbar.css";
import LogoWriter from "./LogoWriter";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = ({ docs }) => {
  const { user, setUser, logout } = useAuth();
  const [imgUrl, setImgUrl] = useState("");
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

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
    const pic = await axios.put("/api/v1/update-user", { image_url: img });
    setUser({ ...user, image_url: pic.data.image });
  };

  const handleUpload = (e) => {
    const data = new FormData();

    data.append("file", e.target.files[0]);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
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

  const filteredDocs = (data) =>
    docs
      .filter((doc) => doc.title.toLowerCase().includes(data.toLowerCase()))
      .map((e) => ({ value: e.title }));

  const handleSearch = () => {
    setOptions(search ? filteredDocs(search) : []);
  };

  const onSelect = (data) => {
    const id = docs.find((e) => data === e.title).id;
    navigate(`/document/${id}`);
  };

  return (
    <>
      <header className="header">
        <LogoWriter />
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          className="auto"
          options={options}
          onSearch={handleSearch}
          onSelect={onSelect}
          dropdownMatchSelectWidth={500}
          style={{
            width: "40%",
            color: "black",
          }}
        >
          <Input.Search
            size="large"
            placeholder="input here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </AutoComplete>
        <div className="rightie">
          <Popover content={content} title="Google Account">
            <div className="avatar">
              <input type="file" onChange={handleUpload} />
              {user?.id && (
                <Avatar
                  icon={<UserOutlined />}
                  src={user.image_url || imgUrl}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              )}
            </div>
          </Popover>
          <button className="logout-button" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
