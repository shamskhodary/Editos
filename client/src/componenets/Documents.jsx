import axios from 'axios';
import * as moment from 'moment';
import "../styles/documents.css";
import { Col, Dropdown, Row, Tooltip } from "antd";
import { MoreOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

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

  const [documents, setDocuments] = useState(null);

  useEffect(()=>{
    const docs = async() => {
      try {
        const response = await axios.get('/documents');
        setDocuments(response.data);
      } catch (error) {
        setDocuments(null);
      }    
    }

    docs();
  },[]);

  const style = {
    margin: "1rem",
  };

  if(!documents) return <div>Loading...</div>

  return (
    <div className="documents">
      <h2>Recent documents</h2>
      <Row className="row" gutter={16}>
        {documents.map((e) => 
          <Col className="gutter-row" span={4} style={style} key={e.id} >
          <div className="content-preview">
            <p>{e.inner_content}</p>
          </div>
          <div className="details">
            <Tooltip title={e.title}>
              <h3>{e.title}</h3>
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
