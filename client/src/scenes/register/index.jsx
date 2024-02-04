import { Box, Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from 'react'
import { useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    gender: '',
  };
  const checkoutSchema = yup.object().shape({
    fullName: yup.string().required(),
    phoneNumber: yup.number().required(),

    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const handleFormSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:3000/user/register",{method: "POST",headers:{'Content-Type':'application/json'},mode : "cors", body: JSON.stringify(values)}).then(async(res) => {
      if (!res.ok){
        throw new Error('Network response was not ok');
      }
      const response = await res.json();
      localStorage.setItem("token",response.token);

    })
    .catch(()=> alert("Failed to log in"));
    navigate("/")
    
  };
    const handleClick = (path) => () => {
    navigate(path);
  };
  return (
    <Box display="flex" height="100vh">
      <Box flex="1" height="100%" width="100%"style={{backgroundImage: 'url("https://media1.tenor.com/m/iNGAKmaVB6oAAAAC/batman.gif")', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
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
              <Header title="REGISTER" subtitle="enter your data" />
              <Box
              width = {"30vw"}
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
                  name="fullName"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
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
                <div id="gender-radio-group">Gender</div>
        <div role="group" aria-labelledby="gender-radio-group">
          <label>
            <Field type="radio" name="gender" value="Male" required />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="Female" required/>
            Female
          </label>
        </div>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
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
                  InputProps={
                    {
                      style: { color: colors.dun[700] }, // change the input color here
                    }
                  }
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
                
                <Button  color="secondary" variant="contained" sx={{ ml: "20px" }} onClick={handleClick("/")} >
                  
                  go back
                </Button>
                <Button type="submit" color="secondary" variant="contained" sx={{ ml: "20px" }}  >
                  
                  CREATE NEW USER 
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );}
  


export default Register;