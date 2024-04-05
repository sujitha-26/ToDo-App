import React,{useEffect,useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
const ViewAll = () => {
  let [student,setStudent]=useState([]);
  let getApi=async ()=>{
    let {data}=await axios.get("http://localhost:5000/student");
    console.log(data);
    setStudent(data);
  }
  useEffect(() => {
    try{
       getApi();
    }
    catch(e){
        console.log(e)
    }
    
  }, []);
  //title
  useEffect(() => {
    document.title="View All page"
  }, []);

//delete
let deteleStd=(id)=>{
  console.log(id);
  axios.delete("http://localhost:5000/student/"+id)
  window.location.assign('/viewall')
}
  return (
    <>
    <Nav/>
    <center><h1>Information of All student</h1></center>

    <table id='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>STUDENT NAME</th>
          <th>STUDENT EMAIL</th>
          <th colSpan={3}>MORE OPTION</th>
        </tr>
      </thead>
      <tbody>
        {student.map((val,index)=>{
          console.log(val);
          return (
            <tr key={val.id} style={{background:index%2===0?"lightgray":"gray"}}>
              <td>{val.id}</td>
              <td>{val.stdname}</td>
              <td>{val.stdemail}</td>
              <td>
                <NavLink to={`/singlestu/${val.id}`}>
                <button>VIEW-MORE</button>
                </NavLink>
              </td>
              <td>
                <NavLink to={`/update/${val.id}`}>
                  <button>EDIT</button>
                </NavLink>
              </td>
              <td><button onClick={()=>deteleStd(val.id)}>DELETE</button></td>
            </tr>
          )
          
        })}
      </tbody>
    </table>
    </>
  )
}

export default ViewAll