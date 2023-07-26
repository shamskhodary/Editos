import { Input, Modal } from "antd";
import "../styles/documents.css";
import { useState } from "react";
import axios from "axios";

const UpdateModal = ({
  open,
  handleCancel,
  setOpen,
  previousTitle,
  id,
  setUpdated,
  updated,
}) => {
  const [title, setTitle] = useState("");

  const handleUpdate = async () => {
    await axios.put(`/api/v1/document/${id}/update-title`, { title });
    setOpen(false);
    setTitle("");
    setUpdated(!updated);
  };

  return (
    <Modal
      title="Rename"
      centered
      open={open}
      onOk={handleUpdate}
      onCancel={handleCancel}
    >
      <p>Please enter a new title...</p>
      <Input
        placeholder={previousTitle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </Modal>
  );
};

export default UpdateModal;
