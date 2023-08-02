import React, {useState} from 'react';
import './pocket.css';
import axios from "axios";
import Subject from './components/subjects'
import {useSelector} from "react-redux";

function PocketPage() {
    
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [subject, setSubject] = useState();

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    
    const uploadFile = async (e) => {
        alert(subject+': File Uploaded Successfully!');
        
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
        const res = await axios.post(
            "http://localhost:3001/upload",
            formData
        );
        console.log(res);
        } catch (ex) {
        console.log(ex);
        }   

        
   
    };
    
    return (
        <div className='upload'>
            
            <div className='title'>POCKET</div>
            <br/>
            <Subject subject = {subject} setSubject = {setSubject}/>
            <br/><br/>
            
            <input type="file" onChange={saveFile} />
            <br/><br/>
            <br/><br/>
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
}

export default PocketPage;