import { Box, Button,  useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import HeatMap from "../../components/HeatMap";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    console.log("Latitude: " + position.coords.latitude + 
    ", Longitude: " + position.coords.longitude); 
  }

  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }
    const Navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClick = (path) => () => {
    Navigate(path);
  }
  
    
  return (
    <Box m={"20px"}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        
      </Box>
      {/* GRID & CHARTS */}
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1  */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.grey[800]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={"5px"}
        >
          <HeatMap />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.grey[800]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BarChart />
        </Box>
      
      {/* ROW 2 */}
      <Box
        gridColumn="span 6"
        gridRow="span 2"
        backgroundColor={colors.grey[800]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <PieChart />
      </Box>
      <Box
        gridColumn="span 6"
        gridRow="span 2"
        backgroundColor={colors.grey[800]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        <Button color="secondary" variant="contained" onClick={getGeolocation}>Protect yourself</Button>
        <Button color="secondary" variant="contained" onClick={handleClick("/faq")} sx={{mt :"10px"}}>Learn More</Button>
      </Box>
    </Box>
    
    
    </Box>
  );
};

export default Dashboard;
