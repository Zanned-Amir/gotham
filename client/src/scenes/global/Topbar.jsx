import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect} from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

  const Topbar = ({isLoggedin, setIsLoggedin}) => {
  const Navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const token = localStorage.getItem('token');
  useEffect(() => { 
    if (token) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }
  , [token]);
  const handleClick = () => {
    localStorage.removeItem('token');
    setIsLoggedin(false);
    Navigate('/');
  }
    

  return (
    <div>
      {isLoggedin ? <Box  display="flex" justifyContent="end" p={2} >
        
        {/* SEARCH BAR */}
        
  
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
  
            <IconButton onClick={handleClick}>
              <PowerSettingsNewIcon />
            </IconButton>
            
            </Box>
          
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

