import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import minhdai from "assets/images/minhdai.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";

function Header({ children }) {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < breakpoints.values.lg) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  });
  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 1,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={minhdai} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Ngô Minh Đại
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Backend Developer Intern 
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <MDBox style={{textAlign: mobileView ? "center" : "right"}} height="100%">
              <MDBox>
                <MDTypography variant="h7" fontWeight="medium" lineHeight={1}>
                  Computer Science
                </MDTypography>
              </MDBox>
              <MDBox>
                <MDTypography variant="button" color="text" fontWeight="regular" lineHeight={1}>
                  GPA: 8.12/10
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
