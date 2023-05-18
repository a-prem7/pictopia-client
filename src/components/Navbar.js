import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar sx={{ p: "0 5%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <h3> Pictopia </h3>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Button>
            <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to={"/login"}
            >
              Login
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to={"/register"}
            >
              Register
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
