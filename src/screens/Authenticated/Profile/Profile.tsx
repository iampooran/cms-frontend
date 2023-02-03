import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  
import "./Profile.scss"
import { width } from "@mui/system";
const Profile = () => {
  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign:"left",
          
        }}
      >
        <Avatar sx={{ bgcolor: '#BA9B37'}} className="profileIcon" >
            <AccountCircleIcon sx={{ color: '#F8F5EB' }} className="profileIcon2" fontSize="large"/>
          </Avatar>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#BA9B37" }}>
          User Name
        </Typography>
        

        <Grid container spacing={1} ml={38}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
              Email: useremail@gmail.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
              Address: 123, Address, Pincode, Satate
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} ml={38}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
              Date of Birth: 1-1-2000
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
              Role: Role
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} ml={38}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
            Business Name
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mt={3}>
            Privilege : Privileges
            </Typography>
          </Grid>
        </Grid>
        </Box>



        <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >



      </Box>


    </>
  );
};

export default Profile;
