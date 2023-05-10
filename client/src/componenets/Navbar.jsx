import React from "react";
import { Layout, Space } from "antd";
import { AutoComplete, Input } from "antd";
const { Header, Content } = Layout;

const Navbar = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <h1  style={{ color: "white", display: "inline" }}>Editos</h1>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{
              width: 250,
            }}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        </Header>
        <Content style={{ padding: "0 50px" }}></Content>
      </Layout>
    </>
  );
};

export default Navbar;
