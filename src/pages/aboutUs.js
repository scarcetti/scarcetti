import * as React from "react";
import AboutUs from "../components/bodies/AboutUs";
import MainDrawer from "../components/navigations/MainDrawer";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme.js";
import BackgroundImage from "../images/artworks/test.jpg";
// import BackgroundImage from "../images/luchtech.png";

const style = {}

const AboutUsPage = () => {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            flex: 1,
          }}
        >
          <MainDrawer />
          <AboutUs />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AboutUsPage;

export const Head = () => <title>About Us</title>;
