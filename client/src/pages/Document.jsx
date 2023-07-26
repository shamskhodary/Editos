import React, { useEffect, useState } from "react";
import "../styles/document-page.css";
import DocDetails from "../componenets/DocDetails";
import TextEditor from "../componenets/TextEditor";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const Document = () => {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const doc = async () => {
      const response = await axios.get(`/api/v1/document/${id}`);
      setSaved(true)
      setDoc(response.data);
    };
    doc();
  }, [id]);

  if (!doc) return <Spin />;

  return (
    <div className="wrapper">
      {doc && doc.map((e) => <DocDetails data={e} key={e.id} saved={saved} />)}
      <TextEditor setSaved={setSaved} />
    </div>
  );
};

export default Document;
