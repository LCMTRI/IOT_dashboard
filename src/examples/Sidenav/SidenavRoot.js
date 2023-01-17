/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, transitions, breakpoints, functions, palette } = theme;
  const { miniSidenav } = ownerState;
  const { white } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;

  const sidebarWidth = 250;
  const { xxl } = boxShadows;

  const backgroundValue = "transparent";
  
  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    boxShadow: navbarBoxShadow,
    backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
    backgroundColor: rgba(white.main, 0.8),
    alignItems: "center",
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    [breakpoints.up("xl")]: {
      
      marginBottom: "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    boxShadow: navbarBoxShadow,
    backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
    backgroundColor: rgba(white.main, 0.8),
    alignItems: "center",
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    [breakpoints.up("xl")]: {
      boxShadow: xxl,
      marginBottom: "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    "& .MuiDrawer-paper": {
      border: "none",
      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
