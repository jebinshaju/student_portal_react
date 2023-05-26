
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Adds from "./Adds";

const Student = () => {
  var [students, setStudents] = useState([{sname:'',sgrade:''}]);
  var [update,setUpdate]= useState(false)
  var [singleValue,setSingleValue]=useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/see").then((response) => {
      setStudents(response.data);
      console.log(response.data);
    })
  }, []);

  const deleteStudent = async (sid)=>{

    console.log(sid);
    const response = await axios.delete(`http://localhost:8080/delete/${sid}`)
    .then((response)=>{
      alert("deleted")
      window.location.reload(false)

    })
    .catch(err=>console.log(err));


  }

  const updateStudent = (value) =>{
    setSingleValue(value)
    setUpdate(true)
  }
  var finalJSX =  <div style={{  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', padding: "100px" }} >
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((val, index)=>{
            
              return(
              
                  <TableRow key={index}>
                      <TableCell>{val.sname}</TableCell>
                      <TableCell>{val.sgrade}</TableCell>
                      <TableCell><Button onClick={()=>updateStudent(val)}>update</Button></TableCell>
                      <TableCell><Button color="warning" onClick={()=>deleteStudent(val._id)}>delete</Button></TableCell>

                  </TableRow>
              )
          })}
        </TableBody>
      </Table>-
    </TableContainer>
  </div>
   if(update){
    finalJSX = <Adds data ={ singleValue } method = "put"/>
   }


  return (
   
    finalJSX
  );
};

export default Student;
