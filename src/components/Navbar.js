import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar sx={{ p: "0 5%", background: "#2E3B55" }}>
      <Toolbar>
        <h3> Pictopia </h3>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
