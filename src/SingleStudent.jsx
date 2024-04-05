import React,{useEffect,useState} from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const SingleStudent = () => {
    let [stu,setstu]= useState("");

    let{id} =useParams();
    console.log(id);

    let fetApi=async ()=>{
        let { data } = await axios.get(`http://localhost:5000/student/${id}`);
        console.log(data)
        setstu(data);
    }
    //changing title
    useEffect(() => {
        document.title=`${stu.stdname} information`
      }, [stu.stdname]);
    useEffect(()=>{
        try{
            fetApi();
        }
        catch(e){
            console.log(e);
        }
    },[id]);
    let navigate=useNavigate();
  return (
    <>
        <section id="profile-container">
            <h1>Name: {stu.stdname}</h1>
            <h3>ID:{stu.id}</h3>
            <h3>Mail:{stu.stdemail}</h3>
            <div className='profile-button'>
            <button onClick={()=>navigate(-1)}>GO-BACK</button>
            <button onClick={()=>navigate("/")}>GO-TO-HOME</button></div>
        </section>
    
    </>
  )
}

export default SingleStudent