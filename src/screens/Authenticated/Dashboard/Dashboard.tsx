import { Container, Grid, Typography, Box } from "@mui/material";
import PageLoader from "../../../components/PageLoader";
const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <PageLoader/>
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={10} mb={2}>
            <Typography>
              {/* dashboard title */}
              DASHBOARD 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard;
