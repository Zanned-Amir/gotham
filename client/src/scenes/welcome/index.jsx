import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Welcome = () => {
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
            <Button>
                <Typography variant="h4">
                    Welcome to the Batcave
                </Typography>
            </Button>
        
            
    </Box>
    )
}

export default Welcome