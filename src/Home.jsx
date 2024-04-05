import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Nav from './Nav'
import axios from 'axios'
import toast from 'react-hot-toast'




const Home = () => {
  let [student,setStudent]=useState({
    stdname:"",
    stdemail:""
  })
  //to change title
  useEffect(() => {
    document.title="Home page"
  }, []);
  //for navigate 
  let navigate=useNavigate()
  // destucture state var
  let {stdname,stdemail}=student;

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
        axios.post("http://localhost:5000/student",payload);
        navigate("/viewall");
        toast.success('Successfully posted!')
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
    <div id='Home-body'>
    <h1 className='home-ele'>Welcome to home page</h1>
    <form onSubmit={handleSubmit}>
      <div className='home-ele'>
        <input type="text" value={stdname} placeholder="Enter name" name="stdname" onChange={handleInput}  id='input-home'/>
        <input type="email" value={stdemail} placeholder="Enter Email" name="stdemail" onChange={handleInput}  id='input-home'/>
      </div>
      <div>
        <button id='button-home'>Submit</button>
      </div>
    </form></div>
    </>
  )
}

export default Home