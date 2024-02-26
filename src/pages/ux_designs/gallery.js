import * as React from "react";
import GalleryGrid from "../../components/ux_designs/GalleryGrid.js";
import GalleryList from "../../components/ux_designs/GalleryList.js";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../styles/theme.js";
import BackgroundImage from "../../images/10.png";

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
          {/* <GalleryList /> */}
          <GalleryGrid />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default GalleryPage;

export const Head = () => <title>Gallery</title>;