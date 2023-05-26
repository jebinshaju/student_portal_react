import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "yellowgreen" }}>
        <Toolbar>
          <Typography
            color="blue"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              
              }}align="left">
            Student Portal
          </Typography>
          <Button variant="contained" color="secondary">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Student
            </Link>{" "}
          </Button>
          <Button variant="contained" color="secondary">
            <Link to={"/a"} style={{ textDecoration: "none", color: "white" }}>
              Add
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
