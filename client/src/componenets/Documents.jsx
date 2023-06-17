import * as moment from 'moment';
import "../styles/documents.css";
import {useNavigate} from 'react-router-dom'
import { Col, Dropdown, Row, Spin, Tooltip } from "antd";
import { MoreOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
import axios from 'axios';
import { toast } from 'react-toastify';



const Documents = ({data, isLoading, setDeleted}) => {
  const navigate = useNavigate();

  const style = {
    margin: "1rem",
  };

  const items = [
    {
      label: (
        <>
          <EditFilled /> Rename
        </>
      ),
      key: 1,
    },
    {
      label: (
        <>
          <DeleteFilled /> Remove
        </>
      ),
      key: 2,
    },
  ]

  const handleDelete = async(key, id) =>{
   if(+key === 2){
    const {data} = await axios.delete(`/document/${id}`);
    setDeleted(true);
    toast.success(data.message);
   }
  }
  
  const handleDoc = async(id) => {
    navigate(`/document/${id}`);
    await axios.put(`/document/${id}`, {id});
  }


  return (
    <>
    {isLoading && <Spin/>}
    <div className="documents">
      <h2>Recent documents</h2>
      <Row className="row" gutter={16}>
        {data.map((e) => 
          <Col className="gutter-row" span={4} style={style} key={e.id} >
          <div className="content-preview" onClick={() => handleDoc(e.id)}>
            <p>{e.inner_content}</p>
          </div>
          <div className="details">
            <Tooltip title={e.title}>
              <h3 onClick={() => navigate(`/document/${e.id}`)}>{e.title}</h3>
            </Tooltip>
            <div className="more-details">
              <span>Opened {moment(e.last_opened).calendar()}</span>
              <Dropdown menu={{
                onClick:({key}) => handleDelete(key, e.id),
                 items: items,
                  }} trigger={["click"]}>
                <MoreOutlined className="dots-icon" />
              </Dropdown>
            </div>
          </div>
        </Col>
        )}
      
      </Row>
    </div>
    </>
   
  );
};

export default Documents;
