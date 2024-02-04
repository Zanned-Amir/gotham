import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.dun[500]} variant="h5">
          What are common targets for burglaries and thefts?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Common targets include homes, vehicles, and businesses. Valuables such as electronics, jewelry, cash, and easily resalable items are often sought after by thieves.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.dun[500]} variant="h5">
          How can I enhance the security of my home to prevent burglaries?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Improving home security involves measures such as installing sturdy doors and windows, using security systems (alarms, cameras), proper outdoor lighting, and being cautious about sharing vacation plans on social media.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.dun[500]} variant="h5">
          What should I do if I become a victim of theft or burglary?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Immediately contact local law enforcement to report the incident. Provide them with detailed information about the stolen items and any potential leads. Additionally, inform your insurance company to start the claims process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.dun[500]} variant="h5">
          Are there any statistics on the prevalence of thefts and burglaries in my area?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Local law enforcement agencies often provide crime statistics on their websites. You can also check with community organizations or neighborhood watch programs for relevant information. Keep in mind that crime rates can vary, so staying informed about your specific area is crucial.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.dun[500]} variant="h5">
          What measures can businesses take to prevent thefts and burglaries?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Businesses can implement security measures such as surveillance systems, access control systems, proper lighting in and around the premises, and employee training on security protocols. It's also important to conduct regular security assessments to identify and address potential vulnerabilities.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
