import React from "react";
import * as moment from "moment";
import axios from 'axios';
import "../styles/document-page.css";
import { toast } from "react-toastify";
import LogoWriter from "./LogoWriter";
import { CheckCircleTwoTone, FilePdfFilled, SyncOutlined } from "@ant-design/icons";

const DocDetails = ({data, saved}) => {

  const handlePdfFile = async() => {
    const pdfFile = await axios.get(`/document/${data.id}/pdf`);
    console.log(pdfFile);
    if(pdfFile.status === 204){
      toast.success('Document is uploaded')
    }
  }

  return (
    <div className="doc-details" key={data.id}>
      <LogoWriter />
      
      <h1>
        {data.title} <sub className="opened_at"> Last opened: {moment(data.last_opened).fromNow()} {saved ? <sub> <CheckCircleTwoTone /> saved</sub>: <sub><SyncOutlined spin /> saving...</sub>} </sub>
        
      </h1>

      <ul>
        <li onClick={handlePdfFile}>
          <FilePdfFilled />
        </li>
      </ul>
    </div>
  );
};

export default DocDetails;
