import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      "Objective Regular",
      "Objective Bold",
      "Objective Thin",
      "Back Groove",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    // Other typography options...
  },
  palette: {
    primary: {
      main: "rgba(25, 25, 25, .85)"
      // main: "rgba(30, 35, 40, .85)"
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },

    background: {
      default: "#1E2328",
    },
  },
});

export default theme;
