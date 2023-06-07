import React from "react";
import "../styles/document-page.css";
import LogoWriter from "./LogoWriter";
import { FilePdfFilled } from "@ant-design/icons";

const DocDetails = () => {
  return (
    <div className="doc-details">
      <LogoWriter />
      <h1>
        Title <sub className="opened_at"> Last opened: 12:4:2002</sub>
      </h1>

      <ul>
        <li>
          <FilePdfFilled />
        </li>
      </ul>
    </div>
  );
};

export default DocDetails;
