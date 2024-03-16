"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ABABA",
      contrastText: "#F6F9F9",
    },
    secondary: {
      main: "#00ff00",
    },
    background: {
      default: "#EBF1F1",
    },
  },
});

export default theme;

//default theme:
// https://mui.com/material-ui/customization/default-theme/
