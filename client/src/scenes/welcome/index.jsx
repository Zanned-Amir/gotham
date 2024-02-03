import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
    const Navigate = useNavigate();
    const handleClick = (path) => () => {
        Navigate(path);
    };
  return (
    <Box display="flex" 
    height="100vh" 
    p={"10px"} 
    flexWrap={"wrap"}
     flexDirection="column"
      alignItems="center" 
      justifyContent="center">
        <Box flex="1" height="80%" width="100%"style={{
            backgroundImage: 'url("https://media1.tenor.com/m/Axe9entbcmoAAAAC/batman-and-robin-batman.gif")', 
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat' ,
            backgroundPosition: 'center'}}>
        </Box> 
        <Button  color="secondary" variant="contained" sx={{ mt: "20px" }} onClick={handleClick("/user")} >
                  
                  WELCOME TO THE BATCAVE
                </Button>
                <Button  color="secondary" variant="contained" sx={{ mt: "20px" }} onClick={handleClick("/")} >
                  
                  go back
                </Button>
        
            
    </Box>
    )
}

export default Welcome