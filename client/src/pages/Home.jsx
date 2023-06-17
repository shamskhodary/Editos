import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import Documents from "../componenets/Documents";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const auth= useAuth();
  const navigate = useNavigate();



  useEffect(()=>{
    const docs = async() => {
      setIsLoading(true)
      try {
        const response = await axios.get('/documents');
        setDocuments(response.data);
        setIsLoading(false)
      } catch (error) {
        setDocuments(null);
        setIsLoading(false);
      }    
    }

    docs();
  },[deleted]);

  const handleAddDoc = async()=> {
    try {
      const {data} = await axios.post('/document', {
        title: "Untitled Document",
        user_id: auth.user.id
      });
      if(data.data){
        navigate(`/document/${data.data.id}`)
      }
    } catch (error) {
      toast.error('unable to create a document')
    }

  }

  return (
    <>
      <Navbar />
      {documents.length ? <Documents data={documents} isLoading={isLoading} setDeleted={setDeleted} />: <h3 style={{padding: "2rem"}}>No documents found</h3>}
      <PlusOutlined className="plus-icon" onClick={handleAddDoc}/>
    </>
  );
};

export default Home;
