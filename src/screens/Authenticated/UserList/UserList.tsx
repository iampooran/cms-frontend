import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./UserList.scss"

const AddUserButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#BA9B37",
  "&:hover": {
    backgroundColor: "#EAE1C3",
    color: "#BA9B37",
  },
}));

export default function UserList() {

  return (
    <>
    <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >


<div className="userList2">
        <div className="left">
        <Typography
            mb={3}
            ml={2}
              variant="h5"
              sx={{ fontWeight: "bold", color: "#BA9B37" }}
            >
              Customer Listing
            </Typography>
        </div>
        <div className="right" >
        <AddUserButton variant="contained">Add User</AddUserButton> 
        </div>
      </div>


      <div className="userList">
        <div className="left">
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">User Name</Typography>
        </div>
        <div className="right">
        <Typography mt={2} mb={2}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
        </div>
      </div>

      <div className="userList">
        <div className="left">
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">User Name</Typography>
        </div>
        <div className="right">
        <Typography mt={2} mb={2}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
        </div>
      </div>

      <div className="userList">
        <div className="left">
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">User Name</Typography>
        </div>
        <div className="right">
        <Typography mt={2} mb={2}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
        </div>
      </div>

      <div className="userList">
        <div className="left">
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">User Name</Typography>
        </div>
        <div className="right">
        <Typography mt={2} mb={2}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
        </div>
      </div>
      </Box>
    </>
  );
}
