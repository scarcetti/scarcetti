import * as React from "react";
// import Gallery from "../../components/bodies/gallery";
import Details from "../../components/Artworks/Details";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../styles/theme.js";
import BackgroundImage from "../../images/10.png";
// import BackgroundImage from "../../images/test.jpg";

const style = {}

const ArtworkDetails = () => {

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
          <Details />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ArtworkDetails;

export const Head = () => <title>Art name</title>;