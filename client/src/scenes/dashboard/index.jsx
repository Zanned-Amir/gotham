import { Box } from "@mui/material";
import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";

const DB = () => {
  return (
    <Box m="20px">
      <Header title="Heat Map" subtitle="Simple Heat Map" />
      <Box height="75vh">
        <Dashboard />
      </Box>
    </Box>
  );
};

export default DB;