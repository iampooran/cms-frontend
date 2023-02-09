import React, { FC, MouseEvent, RefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import {
  AlertColor,
  Box,
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Form, { FormDataModel } from "../../../components/Form";
import { LoginForm } from "./LoginForm";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { useDispatch } from "react-redux";



const Login: FC<any> = () => {
  const Navigate = useNavigate();   // to navigate the routes
  const dispatch = useDispatch();   
  const theme = useTheme();

  let loginForm: RefObject<Form | null | undefined> = useRef(); ///

  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  // use state
  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    display: boolean;
    severity: AlertColor | null;
    message: string;
  }>({
    display: false,
    severity: null,
    message: "",
  });

  // handelLogin function will call when user will click on login Button
  // async function call // pass paramter e which is of type HTMLButtonElement
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const data = loginForm.current as {
    //  getFormData: () => { formData: FormDataModel; isFormValid: boolean };
    // };
    // const getFormData = data.getFormData
    const { getFormData } = loginForm.current as {
      getFormData: () => { formData: FormDataModel; isFormValid: boolean };
    };
    const { formData, isFormValid } = getFormData();
    const bodyData = formData;
    const body = new URLSearchParams(); // it is used to read and write url query
    body.append('username', bodyData.username as string);
    body.append('password', bodyData.password as string);
    body.append('scope', 'webclient');
    body.append('grant_type', 'password');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.REACT_APP_CLIENT,
          password: process.env.REACT_APP_SECRET,
        },
      };
      setHasError(false);
      if (isFormValid) {
        console.log("ok")
      } else {
        setHasError(true);
      }
    } catch (error: any) {
      setLoading(false);
    }
  };

  return (
    <Container
     
      className={"login-container"}
      maxWidth={false}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "calc(100vh)" }}
      >
        <Grid item xs={12} sm={8} lg={4}>
          <Box textAlign="center" mb={3}>
            <img 
            // style={{ backgroundColor: theme.palette.primary.main }} 
            src='https://g05991.p3cdn1.secureserver.net/wp-content/uploads/2021/10/CBT_Updated_Logo-168x55.png' alt="logo" />
          </Box>
          <Card sx={{ p: matches ? 2 : 1 }}>
            <form onSubmit={handleLogin as any}>
              <Form
                hasError={hasError}
                ref={loginForm as RefObject<Form>}
                model={LoginForm()}
                values={{}}
              />
              <PrimaryButton
                disabled={loading}
                fullWidth
                onClick={handleLogin}
                type="submit"
              >
              </PrimaryButton>
            </form>
          </Card>
        </Grid>
        </Grid>
    </Container>
  );
};

export default Login;
