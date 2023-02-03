import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Alert } from '@mui/material';
import credentialsSuperAdmin from '../../../utils/validators/credentials.json'
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { useDispatch } from 'react-redux';
import { login } from '../../../utils/redux/reducer/authentication-slice';
import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import { ButtonProps } from "@mui/material/Button";
import '../Login/login.css'
import { blue } from '@mui/material/colors';
//import imagelogin from '../../../assets/images/imagelogin.png'

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

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [isLogin, setIsLogin] = useState<number | null>(null)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (credentials.email === credentialsSuperAdmin.email && credentials.password === credentialsSuperAdmin.password) {
      setIsLogin(1)
    } else {
      setIsLogin(0)
    }


    // if(credentials.email===credentialsSuperAdmin.email && credentials.password===credentialsSuperAdmin.password){
    //   setIsLogin(1)
    // }
    // else{
    //   setIsLogin(0)
    // }
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(login(isLogin))
      navigate("/")
    }
  }, [isLogin, navigate, dispatch])


  // from girish
  const handleOnchangeEmail = (value: string) => {
    // console.log(value)  // here you can access that value
    setCredentials({ ...credentials, email: value })

  }

  const handleOnchangePass = (value: string) => {
    // console.log(value)  // here you can access that value
    setCredentials({ ...credentials, password: value })

  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} className="login-page.css">
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={6}
          // md={7}

          sx={{



            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
            //backgroundImage: 'url(https://github.com/iampooran/cms-frontend/blob/feature_pooran/src/assets/images/imagelogin.png)', 
            //backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item sm={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              //margin: 'Top',
              //background: '#ddd',
              //padding: '10px',
              //borderRadius: '4px'
              left: '0px',
              top: '100px'

            }}
          >
            <Box textAlign="center"
              sx={{
                m: 3,
                left: '0px',
                top: '94px',
                padding: '5px',
                //background: '#ddd',
              }}>
              <img id='cloverBay-Logo'//Clover Logo
                src='https://g05991.p3cdn1.secureserver.net/wp-content/uploads/2021/10/CBT_Updated_Logo-168x55.png' alt="logo" />
            </Box>

            <Typography component="h1" variant="h5" >
              Log in
            </Typography>
            {isLogin === 1 || isLogin === null ? "" : <Alert severity="error">Please enter valid credentials!</Alert>}

            <Box component="form" noValidate onSubmit={handleSubmit} id="box1"
              //Main Login BOX 
              sx={{
                mt: 1,
                //position: 'absolute',
                width: '400px',
                height: '370px',
                left: '0px',
                top: '200px',
                background: '#F2E6BF80', //Background color of Login Page
                borderRadius: '10px',
                padding: '45px'

              }}>
              {/* <CustomTextField className="textFiled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              /> */}

              <InputField
                // This are the props which your going to pass
                variant='outlined'
                label="Email"
                sx={{ background: '' }}
                fullWidth
                autoFocus
                style={{ width: '300px' }}
                // by this function you can access the form value
                onChangeData={handleOnchangeEmail}
                validators={[{
                  check: Validators.email,
                  message: "Please Enter Valid Email"
                }]}
              ></InputField>

              <InputField
                // This are the props which your going to pass
                variant='outlined'
                label="Password"
                sx={{ background: '' }}
                fullWidth
                autoFocus
                style={{ width: '300px' }}
                type = 'password'
                // by this function you can access the form value
                onChangeData={handleOnchangePass}
                validators={[{
                  check: Validators.password,
                  message: "Please Enter Valid Password"
                }]}
              ></InputField>

              {/* <CustomTextField className='textFiled2'
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              /> */}
              <SignInButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2
                }}
              >
                Log In
              </SignInButton>
              {/* <PrimaryButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {handleSubmit}
              >
              log in 
              </PrimaryButton> */}
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2" >
                    <Link to="/forgot-password">
                      Forgot password?
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