import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import Documents from "../componenets/Documents";
import axios from "axios";

const Home = () => {
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

  return (
    <>
      <Navbar />
      {documents ? <Documents data={documents} />: <h5>No documents found</h5>}
    </>
  );
};

export default Home;
