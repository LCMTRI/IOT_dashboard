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
  const { openChatting } = ownerState;
  const { palette, boxShadows, functions, transitions } = theme;

  const { white, text} = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const configuratorWidth = 360;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    "& .MuiDrawer-paper": {
      height: "83vh",
      top: "12vh",
      padding: pxToRem(8),
      boxShadow: navbarBoxShadow,
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor: rgba(white.main, 0.8),
      color: text.main,
      borderRadius: 20,
      overflowY: "auto",
      ...(openChatting ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
