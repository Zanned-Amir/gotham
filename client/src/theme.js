// // ["000000","000001","010102","0C0C0B","171615","4B4B4B","60605E","808080","BFAE88","D4C5A3"]
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === "dark" ? 
    {
        dun: {
        100: "#f6f3ed",
        200: "#eee8da",
        300: "#e5dcc8",
        400: "#ddd1b5",
        500: "#d4c5a3",
        600: "#aa9e82",
        700: "#7f7662",
        800: "#554f41",
        900: "#2a2721"
    },
    
    primary: {
        100: "#f2efe7",
        200: "#e5dfcf",
        300: "#d9ceb8",
        400: "#ccbea0",
        500: "#bfae88",
        600: "#998b6d",
        700: "#736852",
        800: "#4c4636",
        900: "#26231b"
    },
    
    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
    
} : {
    dun: {
        100: "#2a2721",
        200: "#554f41",
        300: "#7f7662",
        400: "#aa9e82",
        500: "#d4c5a3",
        600: "#ddd1b5",
        700: "#e5dcc8",
        800: "#eee8da",
        900: "#f6f3ed",
    },
    
    primary: {
        100: "#26231b",
        200: "#4c4636",
        300: "#736852",
        400: "#998b6d",
        500: "#bfae88",
        600: "#ccbea0",
        700: "#d9ceb8",
        800: "#e5dfcf",
        900: "#f2efe7",
    },
    
    grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
}),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.dun[700],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.grey[900],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[300],
              },
              secondary: {
                main: colors.dun[400],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };
  
