import "../styles/documents.css";
import { Col, Dropdown, Row, Tooltip } from "antd";
import { MoreOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";

const items = [
  {
    label: (
      <>
        <EditFilled /> Rename
      </>
    ),
    key: "0",
  },
  {
    label: (
      <>
        <DeleteFilled /> Remove
      </>
    ),
    key: "1",
  },
];

const Documents = () => {

  const style = {
    margin: "1rem",
  };

  return (
    <div className="documents">
      <h6>Recent documents</h6>
      <Row className="row" gutter={16} style={{ gap: "1rem" }}>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="details">
            <Tooltip title="production écrite, ce n'est pas possible ce qu'on fait">
              <h3>production écrite, ce n'est pas possible ce qu'on fait </h3>
            </Tooltip>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <div className="content-preview">
            <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
          </div>
          <div className="details">
            <h3>production écrite</h3>
            <div className="more-details">
              <span>Opened 22:26</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Documents;
