import React from "react";
import { Container, Typography } from "@mui/material";
import homeStyles from "../../styles/homeStyles";

const AboutUs = () => {

  return (
    <Container maxWidth="false" sx={{ marginTop: "var(--drawer-width)" }}>
            <Container sx={homeStyles.container} maxWidth="md">
                <Typography align="justify" variant="subtitle2">
                    <span style={homeStyles.title}>
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                    </span>
                </Typography>
                <Typography variant="h1" align="justify">
                    <span style={homeStyles.textTitle}> About </span>
                    <span style={homeStyles.textWithBackground}>US</span>
                </Typography>
                <Typography variant="caption" align="center" sx={{ mt: 0.5, ...homeStyles.normalText, }}>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </Container>
        </Container>
  );
};

export default AboutUs;
