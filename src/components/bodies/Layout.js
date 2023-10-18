import React from "react";
import { Global, css } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import BackgroundImage from "../images/luchtech.png";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          body {
            margin: 0;
            background-image: url(${BackgroundImage});
            background-size: cover;
            background-attachment: fixed;
          }
        `}
      />
      {children}
    </>
  );
};

export default Layout;
