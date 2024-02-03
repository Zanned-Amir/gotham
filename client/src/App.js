import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./scenes/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import User from "./scenes/user";
import Register from "./scenes/register";
import Welcome from "./scenes/welcome";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* <Topbar isLogin={isLogin} /> */}
            <Topbar />
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/user" element={<User isLoggedin={isLoggedin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
