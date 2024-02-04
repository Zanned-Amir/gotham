import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    
    email: "",
    password: "",
  };
  const checkoutSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const handleFormSubmit = (values) => {
    console.log(values);
    
  };
  const handleClick = (path) => () => {
    navigate(path);
  };    
  return (
    <Box display="flex" height="100vh">
      <Box flex="1" height="100%" width="100%"style={{backgroundImage: 'url("https://media.giphy.com/media/lTLV2erK8vf1MIz4Rk/giphy.gif")', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
      <Box flex="1" m="20px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Header title="LOGIN" subtitle="enter your data" />
              <Box width = {"30vw"}
                display="grid"
                gap="30px"
                gridTemplateColumns="1fr"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 1" },
                }}
              >
                
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    bgcolor: colors.dun[100],
                    borderRadius: "5px 5px 0 0",
                  }}
                  InputLabelProps={{
                    style: { color: colors.grey[700] }, // change the label color here
                  }}
                  InputProps={
                    {
                      style: { color: colors.dun[700] }, // change the input color here
                    }
                  }
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{
                    bgcolor: colors.dun[100],
                    borderRadius: "5px 5px 0 0",
                  }}
                  InputLabelProps={{
                    style: { color: colors.grey[700] }, // change the label color here
                  }}
                  InputProps={
                    {
                      style: { color: colors.dun[700] }, // change the input color here
                    }
                  }
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" color="secondary" variant="contained" onClick={handleClick("/user")}>
                  Login
                </Button>
                <Button type="submit" color="secondary" variant="contained" sx={{ ml: "20px" }} onClick={handleClick("/register")}>
                  
                  Register
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Auth;