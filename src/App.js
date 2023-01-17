import { useEffect} from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import Chatting from "examples/Chatting";
import Weather from "examples/Weather";
// Material Dashboard 2 React themes
import theme from "assets/theme";
import "./style.css";
// Material Dashboard 2 React Dark Mode themes

// Material Dashboard 2 React routes
import routes from "routes";
import routesUser from "routesUser";
// Material Dashboard 2 React contexts
import {
  useMaterialUIController,
  setOpenChatting,
} from "context";

// Images
import brandDark from "assets/images/logo-ct-dark.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    direction,
    layout,
    openChatting,
  } = controller;
  const { pathname } = useLocation();

  // Change the openConfigurator state
  const handleChattingOpen = () => setOpenChatting(dispatch, !openChatting);

  // Change the openConfigurator state

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsChattingButton = (
    <MDBox
      className="gradient-border"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={98}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="2.8rem"
        height="2.8rem"
        bgColor="white"
        borderRadius="50%"
        position="fixed"
        zIndex={99}
        sx={{ cursor: "pointer" }}
        onClick={handleChattingOpen}
      >
        <Icon fontSize="medium" color="inherit">
          person
        </Icon>
      </MDBox>
    </MDBox>
  );

  const user = JSON.parse(localStorage.getItem("profile"));
    //!user ? (<SignIn />) : 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color="info"
            brand={brandDark}
            brandName="IOT Dashboard"
            routes={user ? routesUser : routes}
          />
          <Chatting />
          {configsChattingButton}
          <Weather/>
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(user ? routesUser : routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
