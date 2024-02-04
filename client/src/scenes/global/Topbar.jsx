import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


  const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => { 
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  , [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? <Box  display="flex" justifyContent="space-between" p={2} >
        
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px" 
          
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" 
           />
          <IconButton type="button" sx={{ p: 1 }}  >
            <SearchIcon />
          </IconButton>
        </Box>
  
        {/* ICONS */}
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          
            <Box>
  
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
            </Box>
          <IconButton>
          <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box> 
      :
      <Box display={"flex"}  justifyContent='end'>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>}

    </div>
    
  );
};

export default Topbar;

