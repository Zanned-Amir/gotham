import { Box } from "@mui/material";
import React from "react";

const HeatMap = () => {
  return (
    <Box m="20px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={"100%"} width={"100%"} >
      <iframe title="heatmap"src="output.html" width="80%" height="100%"></iframe>
    </Box>
  );
};

export default HeatMap;
