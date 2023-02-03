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
  color: "#FFFFFF",
  backgroundColor: "#BA9B37",
  // textDecorationLine: "none",
  // backgroundColor: "#BA9B37",
  textDecorationLine: "none",
  "&:hover":  {
    backgroundColor: "#9A7C1B",
    color: "#FFFFFF",
    textDecoration: "none"
    
  },
}));

// export interface admin{
//   id: number,
//   name: string,
//   company: string
//  } 

// export const Admins: admin[] = [
//   {id: 1, name: "Bhagyashree Bagul", company: "VIT"},
//   {id: 2, name: "Girish Pawar", company: "VIT"},
//   {id: 3, name: "Pooran Sen", company: "VIT"},
//   {id: 4, name: "Ranjeet More", company: "VIT"},
//   {id: 5, name: "Sairaj Sarde", company: "VIT"},
//   {id: 6, name: "Shekhar Chaugule", company: "VIT"},
//   {id: 7, name: "Tanishqa Raut", company: "VIT"},
//   {id: 8, name: "Vishal Kumar", company: "VIT"},
// ];

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
            ADMIN LIST
          </Typography>
        </div>

        <div className="right" >
          <AddUserButton variant="contained" text-decoration="none">
            <Link to="/adduser" text-decoration="none">
            Add User
            </Link>
          </AddUserButton> 
        </div>
    </div>


      <div className="userList">
        <div className="left">
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">
              {/* <ul>
                {Admins.map(data: => (<li key={data.id}>{data.name}</li>))}
              </ul> */}
              Bhagyashree Bagul
            </Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Girish Pawar</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Pooran Sen</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Ranjeet More</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Sairaj Sarde</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Shekhar Chaugule</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Tanishqa Raut</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIIT</Typography>
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
            <Typography mt={2} mb={2} variant="h6" fontWeight="bold">Vishal Kumar</Typography>
        </div>
        <div className="center">
        <Typography mt={2} mb={2} variant="h6" fontWeight="bold">VIT</Typography>
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
