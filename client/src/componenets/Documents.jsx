import * as moment from 'moment';
import "../styles/documents.css";
import {useNavigate} from 'react-router-dom'
import { Col, Dropdown, Row, Spin, Tooltip } from "antd";
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

const Documents = ({data}) => {
  const navigate = useNavigate();


  const style = {
    margin: "1rem",
  };

  if(!data) return (<Spin style={{display: 'flex', alignItems: 'center'}}/>)

  return (
    <div className="documents">
      <h2>Recent documents</h2>
      <Row className="row" gutter={16}>
        {data.map((e) => 
          <Col className="gutter-row" span={4} style={style} key={e.id} >
          <div className="content-preview" onClick={() => navigate(`/document/${e.id}`)}>
            <p>{e.inner_content}</p>
          </div>
          <div className="details">
            <Tooltip title={e.title}>
              <h3 onClick={() => navigate(`/document/${e.id}`)}>{e.title}</h3>
            </Tooltip>
            <div className="more-details">
              <span>Opened {moment(e.last_opened).calendar()}</span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        )}
      
      </Row>
    </div>
  );
};

export default Documents;
