import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./scenes/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import User from "./scenes/user";
import Register from "./scenes/register";
import Welcome from "./scenes/welcome";
import Sidebar from "./scenes/global/sidebar";
import Line from "./scenes/line";
// import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
useEffect(() => { 
  const token = localStorage.getItem('token');
  if (token) {
    setIsLoggedin(true);
  } else {
    setIsLoggedin(false);
  }
}
, [isLoggedin]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} /> 
          <main className="content">
            {/* <Topbar isLogin={isLogin} /> */}
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/user" element={<User isLoggedin={isLoggedin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/welcome" element={<Welcome />} />
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
