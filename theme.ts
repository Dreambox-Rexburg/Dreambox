"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      contrastText: "#00ffff",
    },
    secondary: {
      main: "#00ff00",
    },
  },
});

export default theme;
