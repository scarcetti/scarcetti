import * as React from "react";
import MainDrawer from "../components/navigations/MainDrawer";
import Home from "../components/bodies/Home";
import AboutUs from "../components/bodies/AboutUs";
import Projects from "../components/bodies/Projects";
import ContactUs from "../components/bodies/ContactUs";
import theme from "../styles/theme.js";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
// import BackgroundImage from "../images/luchtech1.png";
import BackgroundImage from "../images/7.png";

const HomePage = () => {

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const backgroundPosition = `center ${-scrollPosition / 2}px`;
    document.getElementById("parallax-container").style.backgroundPosition = backgroundPosition;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Box
            style={{
              zIndex: 3,
            }}
          >
            {/* <MainDrawer /> */}
          </Box>
          <Box
            id="parallax-container"
            style={{
              zIndex: 2,
              overflowY: "auto",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              
            }}
          >
              <Home />
              <Projects />
              <ContactUs/>
              <AboutUs />
          </Box>
          <Box
            id="parallax-background"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              flex: 1,
              position: "relative",
              zIndex: 1,
            }}
          ></Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default HomePage;

export const Head = () => <title>Home</title>;
