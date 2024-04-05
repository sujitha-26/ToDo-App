import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Nav from './Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Update = () => {
  let [student,setStudent]=useState({
    stdname:"",
    stdemail:""
  })
  let navigate=useNavigate()
  //Fetch the content into Input
  let {id}=useParams();
  console.log(id)

  let getApi=async()=>{
      let {data}=await axios.get("http://localhost:5000/student/"+id);
      console.log(data);
      setStudent(data)
  };

  useEffect(() => {
    try{
      getApi();
    }
    catch(e){
      console.log(e);
    }
  }, []);
  //Fetching content into the output
  // destucture state var
  let {stdname,stdemail}=student;

  useEffect(() => {
    document.title="Update Page"
  }, []);
  //sbe
  let handleSubmit=(event)=>{
    event.preventDefault()
     console.log(student);
    try{
      if(stdname==="" && stdemail===""){
        alert("Enter data")
      }
      else if(stdname===""){
          alert("Enter name")
      }
      else if(stdemail===""){
        alert("Enter Email")
      }
      else{
        let payload={stdname,stdemail}
        axios.put("http://localhost:5000/student/"+id,payload);
        navigate("/viewall");
      }
    }
    catch(e){
      console.log(e)
    }
    finally{
      setStudent({
        stdname:"",
        stdemail:""
      })
    }
    
     
  }

  //
  let handleInput=(event)=>{
    console.log(event);
    let {name,value}=event.target;
    setStudent({...student,[name]:value})
  }
  return (
    <>
    <Nav/>
    <section id="Upd-container">
    <h1>Welcome to Update page</h1>
    <form className='UPD-FORM' onSubmit={handleSubmit}>
      <div id="form-button">
        <input type="text" value={stdname} name="stdname" onChange={handleInput}/>
        <input type="email" value={stdemail} name="stdemail" onChange={handleInput}/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    </section>
    </>
  )
}

export default Update