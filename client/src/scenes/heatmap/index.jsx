import { Box } from "@mui/material";
import Header from "../../components/Header";
import HeatMap from "../../components/HeatMap";

const HM = () => {
  return (
    <Box m="20px">
      <Header title="Heat Map" subtitle="Simple Heat Map" />
      <Box height="75vh">
        <HeatMap />
      </Box>
    </Box>
  );
};

export default HM;