import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Alert } from '@mui/material';
import credentialsSuperAdmin from '../../../utils/validators/credentials.json'
import PrimaryButton from '../../../components/Button/PrimaryButton';


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
  const [credentials, setCredentials] = useState({email:"", password:""})
  const [isLogin, setIsLogin] = useState<number | null>(null)
  const navigate = useNavigate();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(credentials.email===credentialsSuperAdmin.email && credentials.password===credentialsSuperAdmin.password){
      setIsLogin(1) 
    }
    else{
      setIsLogin(0)
    }
  };

  useEffect(()=>{
    if(isLogin){
      navigate("/")
    }
  },[isLogin,navigate])

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
            backgroundImage: 'url(https://img.freepik.com/free-vector/flat-cms-concept-blue-shades_23-2148820933.jpg?w=740&t=st=1675153619~exp=1675154219~hmac=4bdac24a80dd49649d94b5a2abd365fc09e1c6ede29255a6025af37c242128d9)',
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
              Log in
            </Typography>
            {isLogin===null ? "" : <Alert severity="error">Please enter valid credentials!</Alert>}
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
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
              />
              <TextField
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
              />
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button> */}
              <PrimaryButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {handleSubmit}
              >
              log in 
              </PrimaryButton>
              <Grid container>
                <Grid item xs>
                  <Typography  variant="body2">
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