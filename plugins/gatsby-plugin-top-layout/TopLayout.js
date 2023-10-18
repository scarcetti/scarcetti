import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/styles/theme.js";
import objectiveThin from "../../src/fonts/Objective-Thin.otf";
import objectiveRegular from "../../src/fonts/Objective-Medium.otf";
import objectiveBold from "../../src/fonts/Objective-Bold.otf";

export default function TopLayout(props) {
  React.useEffect(() => {
    // Define the @font-face rule

    const fontStyles1 = `

  @font-face {
    font-family: 'Objective Thin';
    src: url('${objectiveThin}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  },
`;

    const fontStyles2 = `

  @font-face {
    font-family: 'Objective Regular';
    src: url('${objectiveRegular}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  },
`;

    const fontStyles3 = `

  @font-face {
    font-family: 'Objective Bold';
    src: url('${objectiveBold}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  },
`;

    // Add the font to the document
    const style1 = document.createElement("style");
    style1.appendChild(document.createTextNode(fontStyles1));
    document.head.appendChild(style1);

    // Add the font to the document
    const style2 = document.createElement("style");
    style2.appendChild(document.createTextNode(fontStyles2));
    document.head.appendChild(style2);

    // Add the font to the document
    const style3 = document.createElement("style");
    style3.appendChild(document.createTextNode(fontStyles3));
    document.head.appendChild(style3);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
