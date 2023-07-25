import * as moment from "moment";
import "../styles/documents.css";
import { useNavigate } from "react-router-dom";
import { Col, Dropdown, Row, Tooltip } from "antd";
import { MoreOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

const Documents = ({ data, setUpdated, updated }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({ id: "", title: "" });

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
  ];

  const handleOpen = () => setOpen(false);

  const handleDelete = async (key, id, title) => {
    if (+key === 2) {
      const { data } = await axios.delete(`/document/${id}`);
      setUpdated(!updated);
      toast.success(data.message);
    } else if (+key === 1) {
      setInfo({ id, title});
      setOpen(true);
    }
  };

  const handleDoc = async (id) => {
    navigate(`/document/${id}`);
    await axios.put(`/document/${id}`, { id });
  };
  
  return (
    <>
      <div className="documents">
        <h2>Recent documents</h2>
        <Row className="row" gutter={16} key={0}>
          {data.map((e) => (
              <Col className="gutter-row" span={4} style={style} key={e.id}>
                <div
                  className="content-preview"
                  onClick={() => handleDoc(e.id)}
                >
                  <div dangerouslySetInnerHTML={{ __html: e.inner_content }} />
                </div>
                <div className="details">
                  <Tooltip title={e.title}>
                    <h3 onClick={() => navigate(`/document/${e.id}`)}>
                      {e.title}
                    </h3>
                  </Tooltip>
                  <div className="more-details">
                    <span>Opened {moment(e.last_opened).calendar()}</span>
                    <Dropdown
                      menu={{
                        onClick: ({ key }) => handleDelete(key, e.id, e.title),
                        items: items,
                      }}
                      trigger={["click"]}
                    >
                      <MoreOutlined className="dots-icon" />
                    </Dropdown>
                  </div>
                </div>
              </Col>
          ))}
        </Row>
        <UpdateModal
          open={open}
          setOpen={setOpen}
          handleCancel={handleOpen}
          previousTitle={info.title}
          setUpdated={setUpdated}
          updated={updated}
          id={info.id}
        />
      </div>
    </>
  );
};

export default Documents;
