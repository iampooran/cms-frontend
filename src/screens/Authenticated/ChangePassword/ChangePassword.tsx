import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";


const theme = createTheme();

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

const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#BA9B37",
  "&:hover": {
    backgroundColor: "#EAE1C3",
    color: "#BA9B37",
  },
}));




export default function ChangePassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="currentpassword"
              label="Current Password"
              type="password"
              id="currentpassword"
              autoComplete="current-password"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="New Password"
              type="password"
              id="newpassword"
              autoComplete="new-password"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="renewpassword"
              label="Re-Enter New Password"
              type="password"
              id="renewpassword"
              autoComplete="re-enter-new-password"
            />
            <SignInButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </SignInButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}