import * as React from 'react';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import { ButtonProps } from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryButton from '../../../components/Button/PrimaryButton';

import InputField from '../../../components/inputField';
import { Validators } from '../../../utils/validators';


const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#BA9B37",
  "&:hover": {
    backgroundColor: "#EAE1C3",
    color: "#BA9B37",
  },
}));


const CustomTextField = styledComponent(TextField)`
  & label.Mui-focused {
    color: #BA9B37;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #BA9B37;
    }
  }
`;

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      
        Clover Bay Technologies
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
  };


  const handleOnchange=(value:string)=>{
    console.log(value)  // here you can access email input value
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box textAlign="center" sx={{ m: 1}}>
            <img 
            src='https://g05991.p3cdn1.secureserver.net/wp-content/uploads/2021/10/CBT_Updated_Logo-168x55.png' alt="logo" />
          </Box>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* <CustomTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              /> */}

          <InputField 
                // This are the props which your going to pass
                variant='outlined' 
                label = "Email"
                sx = {{background: ''}}
                fullWidth
                autoFocus
                style = {{width : '400px'}}
                type = 'text'
                

                // by this function you can access the form value
                onChangeData={handleOnchange} 

                // here you can apply validators
                validators={[{
                    check: Validators.email,
                    message: "Please Enter Valid Email" }]} 
           ></InputField>



              <SignInButton id='btn'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              
              >
                Forgot Password
              </SignInButton>
              {/* <PrimaryButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick = {handleSubmit}
              > 
                Log in
              </PrimaryButton>*/}
              <Grid container>
                <Grid item xs>
                  <Typography  variant="body2">
                    <Link to="/login">
                      Back to Login Page
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}