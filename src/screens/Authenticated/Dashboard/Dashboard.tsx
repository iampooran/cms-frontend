import { Typography, Box } from "@mui/material";


const Dashboard = () => {
  return (
    <Box
        sx={{
          my: 5,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#BA9B37" }}>
              Dashboard
        </Typography>
    </Box>
  )
}

export default Dashboard;
