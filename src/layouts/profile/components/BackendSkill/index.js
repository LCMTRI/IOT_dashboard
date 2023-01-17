// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import django from "assets/images/django.jpg";
import nodejs from "assets/images/nodejs.jpg";

function BackendSkill() {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Backend Experiment
        </MDTypography>
      </MDBox>
      <MDBox pb={2} px={2} lineHeight={1}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Portable Framework
        </MDTypography>
        <MDBox key="Django" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={django} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              Django
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Have experiences with MVC architecture, work with many UI templates (prokit-flutter)
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Run Time Environment
        </MDTypography>
        <MDBox key="React JS" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={nodejs} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              NodeJS
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Have experiences with MVC architecture, work with many UI templates (prokit-flutter)
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BackendSkill;
