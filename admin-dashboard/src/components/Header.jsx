import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import "./Header.css";

const Header = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <div>
      <div className="admin_nav">
        <h4>Hi, Admin</h4>
        <IconButton
            color="inherit"
            onClick={toggleTheme}
            className="header-icon"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
      </div>
    </div>
  );
};

export default Header;
