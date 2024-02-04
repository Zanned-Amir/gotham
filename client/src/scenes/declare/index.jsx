import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const Declare = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    textDeclaration: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  };
  const checkoutSchema = yup.object().shape({
    declaration: yup.string().required(),
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
  });
  const handleFormSubmit =  (values) => {
    
    console.log(values);
    fetch("http://localhost:3000/declare/register",{method: "POST",headers:{'Content-Type':'application/json'}, mode:"cors", body : JSON.stringify(values)}).then(async(res) => {
      if (!res.ok){
        throw new Error('Network response was not ok');
      } else {
        
        navigate("/dashboard")
      }

    })
    .catch(()=> alert("Failed to log in"));
   
    
  };
  const handleClick = (path) => () => {
    navigate(path);
  };
  return (
    <Box display="flex" height="100vh">
      <Box
        flex="1"
        m="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
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
              <form onSubmit={(values) => handleSubmit(values)} >
              <Header title="DECLARE" subtitle="enter your data" />
              <Box
                width={"30vw"}
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
                  type="text"
                  label="Full Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  id="fullName"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  sx={{
                    bgcolor: colors.dun[100],
                    borderRadius: "5px 5px 0 0",
                  }}
                  InputLabelProps={{
                    style: { color: colors.grey[700] }, // change the label color here
                  }}
                  InputProps={{
                    style: { color: colors.dun[700] }, // change the input color here
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{
                    bgcolor: colors.dun[100],
                    borderRadius: "5px 5px 0 0",
                  }}
                  InputLabelProps={{
                    style: { color: colors.grey[700] }, // change the label color here
                  }}
                  InputProps={{
                    style: { color: colors.dun[700] }, // change the input color here
                  }}
                />
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
                  InputProps={{
                    style: { color: colors.dun[700] }, // change the input color here
                  }}
                />
                <textarea
                  cols={"50"}
                  rows={"10"}
                  name="textDeclaration"
                  placeholder="Enter your declaration here..."
                  required
                ></textarea>
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ ml: "20px" }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Declare;
