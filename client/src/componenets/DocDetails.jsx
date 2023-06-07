import React from "react";
import "../styles/document-page.css";
import LogoWriter from "./LogoWriter";
import { FilePdfFilled } from "@ant-design/icons";
import * as moment from "moment";

const DocDetails = ({data}) => {
  return (
    <div className="doc-details" key={data.id}>
      <LogoWriter />
      <h1>
        {data.title} <sub className="opened_at"> Last opened: {moment(data.last_opened).fromNow()}</sub>
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
