import { Button, Input, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Adds = (props) => {
  var [datas, setDatas] = useState(props.data);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDatas((datas) => ({ ...datas, [name]: value }));
    console.log(datas);
  };
  const addvalue = () => {
    if (props.method === "post") {
      axios
        .post("http://localhost:8080/create", datas)
        .then((response) => {
          alert("added");
          // setDatas({ sname: "", sgrade: "" });
        })
        .catch((err) => console.log(err));
    }
    if (props.method === "put") {
      axios.put("http://localhost:8080/edit/"+ datas._id,datas)
      .then((response) =>{
        console.log("putdata" + response.data);
        alert("updated")
        window.location.reload(false)
      })
      .catch((err)=>{
        console.log(err);
      })


    }
  };

  return (
    <div>
      <br />
      <br />
      <h1>Enter the details</h1>
      <TextField
        label="name"
        variant="outlined"
       
        name="sname"
        value={datas.sname}
        onChange={inputHandler}
      ></TextField>
      {/* <TextField
        placeholder="Name"
        variant="outlined"
         value={datas.name}  onChange={inputHandler} ></TextField> */}
      <br />
      <br />
      <TextField
        label="Marks"
        variant="outlined"
        name="sgrade"
        value={datas.sgrade}
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <Button variant="contained" onClick={addvalue}>
        submit
      </Button>
    </div>
  );
};

export default Adds;
