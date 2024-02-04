import { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Auth from "./scenes/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import Register from "./scenes/register";
import Welcome from "./scenes/welcome";
import Sidebar from "./scenes/global/sidebar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import HM from "./scenes/heatmap";
import Bar from "./scenes/bar";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Declare from "./scenes/declare";

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedin, setIsLoggedin] = useState(false);
  
  
  const token = localStorage.getItem('token');
useEffect(() => { 
  if (token) {
    setIsLoggedin(true);
  } else {
    setIsLoggedin(false);
  }
}
, [token]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isLoggedin={isLoggedin} /> 
          <main className="content">
            <Topbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
            <Routes>
              <Route path="/" element={<Auth setIsLoggedin={setIsLoggedin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/heatmap" element={<HM />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/declare" element={<Declare />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
