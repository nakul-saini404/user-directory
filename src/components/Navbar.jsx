import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            User Directory
          </Link>
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="default"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
