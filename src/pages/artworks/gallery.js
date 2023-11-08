import * as React from "react";
// import Gallery from "../../components/bodies/gallery";
import Gallery from "../../components/Artworks/Gallery";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../styles/theme.js";
import BackgroundImage from "../../images/7.png";
// import BackgroundImage from "../../images/test.jpg";

const style = {}

const GalleryPage = () => {

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
            backgroundAttachment: "fixed",
            flex: 1,
          }}
        >
          <Gallery />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default GalleryPage;

export const Head = () => <title>Gallery</title>;