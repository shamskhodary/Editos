import React from "react";
import "../styles/document-page.css";
import DocDetails from "../componenets/DocDetails";
import TextEditor from "../componenets/TextEditor";

const Document = () => {
  return (
    <div className="wrapper">
      <DocDetails  />
      <TextEditor />
    </div>
  );
};

export default Document;
