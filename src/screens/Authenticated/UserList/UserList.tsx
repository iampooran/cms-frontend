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
      {/* <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          
        }}
      >
         
        <Grid container spacing={1} >
          <Grid item xs={12} sm={6} >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#BA9B37" }}
            >
              Customer Listing
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <AddUserButton variant="contained">Add User</AddUserButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ color: "black" }} mt={3}>
              UserName Here
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              <ToggleOnIcon />

              <EditIcon sx={{ marginLeft: "25px" }} />

              <DeleteIcon sx={{ marginLeft: "25px" }} />
            </Typography>
          </Grid>
        </Grid>


      </Box> */}
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          
        }}
      >
        <Grid container >
          <Grid item xs={12} sm={11} >
            <Typography
            mb={3}
            ml={2}
              variant="h6"
              sx={{ fontWeight: "bold", color: "#BA9B37" }}
            >
              Customer Listing
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1}>
            <AddUserButton variant="contained">Add User</AddUserButton>
          </Grid>
        </Grid>
      <div className="w3-container">
      <ul className="w3-ul w3-card-4">
          <li className="w3-bar">
            <span className="w3-right">
            <Grid item xs={12} sm={2}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
          </Grid>
            </span>
            <div className="w3-bar-item">
              <span className="w3-large">UserName</span>
              <br />
              <span>Role</span>
            </div>
          </li>
        </ul>
        <ul className="w3-ul w3-card-4">
          <li className="w3-bar">
            <span className="w3-right">
            <Grid item xs={12} sm={2}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
          </Grid>
            </span>
            <div className="w3-bar-item">
              <span className="w3-large">UserName</span>
              <br />
              <span>Role</span>
            </div>
          </li>
        </ul>
        <ul className="w3-ul w3-card-4">
          <li className="w3-bar">
            <span className="w3-right">
            <Grid item xs={12} sm={2}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              <Link to="#"><ToggleOnIcon /></Link>
              <Link to="#"><EditIcon sx={{ marginLeft: "25px" }} /></Link>
              <Link to="#"><DeleteIcon sx={{ marginLeft: "25px",marginRight: "25px" }} /></Link>
            </Typography>
          </Grid>
            </span>
            <div className="w3-bar-item">
              <span className="w3-large">UserName</span>
              <br />
              <span>Role</span>
            </div>
          </li>
        </ul>
      </div>
      
      </Box>
    </>
  );
}
