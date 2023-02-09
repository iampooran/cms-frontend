import React, { FC, MouseEvent, RefObject, useRef, useState } from "react";
import "./Login.scss";
import {Box,Card,Container,Grid,useMediaQuery,useTheme} from "@mui/material";
import Form, { FormDataModel } from "../../../components/Form";
import { LoginForm } from "./LoginForm";
import PrimaryButton from "../../../components/Button/PrimaryButton";


const Login: FC<any> = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));


  // Created Use Ref Variable 
  // loginFormRef Points to the Form Component
  let loginFormRef: RefObject<Form | null | undefined> = useRef(); ///


  // handelLogin function will call when user will click on login Button
  // async function call // pass paramter e which is of type HTMLButtonElement
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();


    // Before accessing the getFormData method from the form component, 
    // the code performs a type-cast on the current property of loginFormRef using the as operator. 
    // This type-cast is necessary because the type of the current property is null | undefined | Form, 
    // and the code wants to access a specific method on the form component (getFormData).
    const { getFormData } = loginFormRef.current as {

      // The type of the getFormData method is defined as an arrow function 
      // that returns an object with two properties: formData and isFormValid.
      getFormData: () => { formData: FormDataModel; isFormValid: boolean };
    };

    // The type-cast creates an object with a single property, 
    // getFormData, which is a method that is expected to return 
    // an object with two properties: formData and isFormValid.

    const { formData, isFormValid } = getFormData();

    console.log("FORM DATA", formData, " valid", isFormValid);

  };

  return (
    <Container
      className={"login-container"} maxWidth={false}>
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh)" }}>
        <Grid item xs={12} sm={8} lg={4}>
          <Box textAlign="center" mb={3}>
            <img 
            // style={{ backgroundColor: theme.palette.primary.main }} 
            src='https://g05991.p3cdn1.secureserver.net/wp-content/uploads/2021/10/CBT_Updated_Logo-168x55.png' alt="logo" />
          </Box>

          <Card sx={{ p: matches ? 2 : 1 }}>
            <form onSubmit={handleLogin as any}>
              <Form

                ref={loginFormRef as RefObject<Form>}    
                // This line of code is rendering the form component 
                // and passing a reference to it using the ref attribute. 
                // The ref attribute is used to pass the reference to the form component so that 
                // it can be accessed later in the code, in this case, in the handleLogin function.

                // By passing the reference to the form component using the ref attribute, 
                // the code can access the form component and call its methods, 
                // such as getFormData, from other parts of the component.

                model={LoginForm()} values={{}}
              />

              <PrimaryButton fullWidth  onClick={handleLogin} type="submit" >SUBMIT</PrimaryButton>
            </form>
          </Card>
        </Grid>
        </Grid>
    </Container>
  );
};

export default Login;

