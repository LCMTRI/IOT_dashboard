// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import react from "assets/images/react.jpg";
import flutter from "assets/images/flutter.jpg";
import html from "assets/images/html.jpg";
import sourcetree from "assets/images/sourcetree.jpg";
import github from "assets/images/github.jpg";

function PlatformSettings() {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Technical Skill
        </MDTypography>
      </MDBox>
      <MDBox pb={2} px={2} lineHeight={1}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Frontend with Android, Web and Cross Platform
        </MDTypography>
        <MDBox key="React JS" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={react} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              React JS (5+ projects)
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Only know about the basic, core, principles as well as the flow in the React UI application. Also have experiments with React Native through projects: todo app, chat app, etc...
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox key="React JS" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={flutter} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              Flutter (20+ projects)
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Have experiences with MVC architecture, work in mant projects with UI templates (prokit-flutter)
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox key="React JS" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={html} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              HTML5 and CSS3 (10+ projects)
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Have many projects such as portfolio, landing page, or website with PHP, Django support. 
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox pb={2} px={2} lineHeight={1}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Source code management
        </MDTypography>
        <MDBox key="github" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={github} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              GitHub
            </MDTypography>
            <MDTypography variant="caption" color="text">
              Have experiences with MVC architecture, work with many UI templates (prokit-flutter)
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox key="sourcetree" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar src={sourcetree} alt="something here" shadow="md" />
          </MDBox>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              Source Tree
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

export default PlatformSettings;
